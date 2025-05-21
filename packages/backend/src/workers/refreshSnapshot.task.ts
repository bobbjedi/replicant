import * as fs from 'fs'
import { useChat } from '../ai/adapters/aiClient'
import { convertTopicsToTextFormat } from '../ai/interview/interviewer'
import TOPIC_SNAPSHOT_PROMPT from '../ai/interview/prompts/TOPIC_SNAPSHOT_TEMPLATE'
import prismaDb from '../prisma/prismaDb'
import { TopicModel } from '../../../shared/src/types'
import { delay } from '../../../shared/src/utils'
import { COMMON_PART_OF_PORTRAIT_PROMPTS, PORTRAIT_PROMPTS } from '../ai/interview/prompts/PORTRAIT_PROMPTS'
import { Role } from '../ai/adapters/gpt.types'

export const inProcessingRefreshSnapshot:Array<number> = []

export default (repId: number) => {
  if (inProcessingRefreshSnapshot.includes(repId)) {
    return {
      success: false,
      message: 'Already in processing',
    }
  }

  inProcessingRefreshSnapshot.push(repId)

  console.log('Start task generateInterviewSnapshotFromChat. inProcessingRefreshSnapshot:', inProcessingRefreshSnapshot)

  setImmediate(async () => {
    try {
      const topics = await prismaDb.interviewTopic.findMany({
        where: {
          interview: { replicantId: repId },
        },
        include: {
          questions: {
            orderBy: { createdAt: 'asc' },
          },
        },
      })
      const topicsSummaries = await generateTopicSummaries(topics, repId)
      console.log('topicsSummaries:', topicsSummaries)

      inProcessingRefreshSnapshot.splice(inProcessingRefreshSnapshot.indexOf(repId), 1)

      await refreshPortraitSnapshot(repId)
    } catch (error) {
      console.error('generateInterviewSnapshotFromChat.task:', error)
    }

    inProcessingRefreshSnapshot.splice(inProcessingRefreshSnapshot.indexOf(repId), 1)
    console.log('End task generateInterviewSnapshotFromChat. inProcessingRefreshSnapshot:', repId, inProcessingRefreshSnapshot)
  })

  return {
    success: true,
    message: 'Success add to queue',
  }
}

const generateTopicSummaries = async (topics: TopicModel[], repId: number) => {
  const formatDescription = 'New topic: data format Question/Answer/Emotion (Q/A/E) \n'
  const appendPrompt = 'Here’s the current version of the personality draft, updated with previous topics. Integrate the following new topic into it.\nCurrent draft:\n'

  topics.sort((t1, t2) => t1.id - t2.id)

  console.log('Prepare interview snapshot \n', topics.map(t => t.name).join('\n'))

  let draft = ''
  for (const i in topics) {
    const topic = topics[i] as TopicModel
    if (topic.questions.length === 0) {
      continue
    }
    let success = false
    let attempts = 0

    const setSummary = async (summary: string) => {
      await prismaDb.interviewTopic.update({
        where: { id: topic.id },
        data: { summary },
      })
    }

    while (!success && attempts < 3) { // Limit the number of attempts
      try {
        attempts++

        if (+i === 0) {
          // For the first topic, simply initialize the draft
          const req1 = [
            { role: Role.SYSTEM, content: TOPIC_SNAPSHOT_PROMPT },
            { role: Role.USER, content: formatDescription + convertTopicsToTextFormat([topic as TopicModel]) },
          ]
          draft = await useChat(req1) // Get the first draft
          // console.log('draft', draft)
          await setSummary(draft)
          success = true
          continue
        }

        // For subsequent topics, integrate them into the current draft
        const req = [
          { role: Role.SYSTEM, content: TOPIC_SNAPSHOT_PROMPT },
          { role: Role.USER, content: appendPrompt + draft + `\n\n--- TOPIC ${topic.name} ---\n` + formatDescription + convertTopicsToTextFormat([topic as TopicModel]) },
        ]
        // console.log('req ' + '#' + i, req[1])

        const topicPortrait = await useChat(req)
        // console.log('topicPortrait ' + '#' + i, topicPortrait)

        // Concatenate the new topic with separators
        draft += `\n\n--- TOPIC ${topic.name} ---\n` + topicPortrait

        fs.writeFileSync('topicsDraft.md', draft)

        await setSummary(topicPortrait)

        console.log('Topic snapshot done:', '#' + i, topic.name)
        // console.log('draft ' + '#' + i, draft)

        success = true // If everything went well, exit the loop
      } catch (error) {
        console.error(`Error processing topic ${topic.name} on attempt ${attempts}:`, error)
        if (attempts >= 3) {
          throw new Error(`Failed to process topic ${topic.name} after 3 attempts.`)
        } else {
          await delay(2_000)
        }
      }
    }
    await prismaDb.interview.update({
      where: {
        replicantId: repId,
      },
      data: {
        summary: draft,
      },
    })
  }

  return draft
}

export const refreshPortraitSnapshot = (repId: number) => {
  if (inProcessingRefreshSnapshot.includes(repId)) {
    return {
      success: false,
      message: 'Already in processing',
    }
  }

  inProcessingRefreshSnapshot.push(repId)
  setImmediate(async () => {
    try {
      const topics = await prismaDb.interviewTopic.findMany({
        where: {
          interview: { replicantId: repId },
        },
        select: {
          summary: true,
        },
      })

      const summaries = topics.map((topic) => topic.summary).join('\n --- \n')

      fs.writeFileSync(`fullSummary_${repId}.md`, summaries)

      const portraitDrafts = await generatePortrait(summaries)

      await prismaDb.replicant.update({
        where: {
          id: repId,
        },
        data: {
          snapshot: portraitDrafts,
        },
      })

      fs.writeFileSync(`fullPortrait_${repId}.md`, portraitDrafts)

      // const finalPortrait = await generateFinalPortrait(portraitDrafts)

      // await prismaDb.replicant.update({
      //   where: {
      //     id: repId,
      //   },
      //   data: {
      //     snapshot: finalPortrait,
      //   },
      // })

      // fs.writeFileSync('portrait.md', finalPortrait)

    } catch (error) {
      console.error('refreshPortraitSnapshot', error)
    }
    inProcessingRefreshSnapshot.splice(inProcessingRefreshSnapshot.indexOf(repId), 1)
    console.log('[refreshPortraitSnapshot] DONE', repId)
  })
  return {
    success: true,
    message: 'Success add to queue',
  }
}

const generatePortrait = async (topicSummaries: string) => {
  const appendPrompt = 'Here’s the current version of the final personality portrait draft. Integrate the following portrait part into it.\nCurrent draft:\n'

  const portraitParts = Object.keys(PORTRAIT_PROMPTS)

  console.log('Prepare final portrait draft \n', portraitParts.map(p => p).join('\n'))

  let portraitDraft = ''
  for (const i in portraitParts) {
    const partName = portraitParts[i] as 'Core beliefs'
    let success = false
    let attempts = 0

    while (!success && attempts < 3) {
      try {
        attempts++
        console.log('generatePortrait:', partName, 'portraitDraft.len:', portraitDraft.length)
        // Form the prompt for the first part or for the rest
        const partPrompt = [
          { role: Role.SYSTEM, content: PORTRAIT_PROMPTS[partName] + COMMON_PART_OF_PORTRAIT_PROMPTS },
          { role: Role.USER, content:
              `Interview topic summaries:\n${topicSummaries}\n\n` +
              (i === '0'
                ? `Generate the "${PORTRAIT_PROMPTS}" section for the final portrait based on the topic summaries above.`
                : appendPrompt + portraitDraft + `\n\n--- Portrait Part: ${partName} ---\nGenerate this part based on the topic summaries above.`),
          },
        ]

        const partContent = await useChat(partPrompt)
        // console.log('portrait part ' + '#' + i, partContent)

        // Add this part to the current draft
        portraitDraft += `\n\n--- Portrait Part: ${partName} ---\n` + partContent

        // console.log('portraitDraft ' + '#' + i, portraitDraft)

        console.log('Portrait part snapshot done:', '#' + i, partName)

        fs.writeFileSync('portraitDraft.md', portraitDraft)
        success = true
      } catch (error) {
        console.error(`Error processing portrait part ${partName} on attempt ${attempts}:`, error)
        if (attempts >= 3) {
          throw new Error(`Failed to process portrait part ${partName} after 3 attempts.`)
        } else {
          await delay(2_000)
        }
      }
    }
  }

  return portraitDraft
}

// const generateFinalPortrait = (portraitDrafts: string) => {
//   console.log('Start generate final portrait')
//   return chat([
//     { role: Role.SYSTEM, content: portraitDrafts },
//     { role: Role.USER, content: `Holistic portrait of a person for refactoring: ${portraitDrafts}` },
//   ])

// }