import { Role, chat } from '../ai/adapters/aiClient'
import { convertTopicsToTextFormat } from '../ai/replicantEngine'
import TOPIC_SNAPSHOT_PROMPT from '../ai/TOPIC_SNAPSHOT_PROMPT'
import prismaDb from '../prisma/prismaDb'
import { TopicModel } from '../../../shared/src/types'
import { delay } from '../../../shared/src/utils'

export const inProcessingRefreshSnapshot:Array<number> = []
export default async (repId: number) => {
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
      const res = await generateInterviewSnapshotFromChat(topics)
      console.log('Summury generateInterviewSnapshotFromChat:', res)

      await prismaDb.interview.update({
        where: {
          replicantId: repId,
        },
        data: {
          summary: res,
        },
      })
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

const generateInterviewSnapshotFromChat = async (topics: TopicModel[]) => {
  const formatDescription = 'New topic: data format Question/Answer/Emotion (Q/A/E) \n'
  const appendPrompt = 'Here’s the current version of the personality draft, updated with previous topics. Integrate the following new topic into it.\nCurrent draft:\n'

  let draft = ''
  for (const i in topics) {
    const topic = topics[i] as TopicModel
    let success = false
    let attempts = 0
    while (!success && attempts < 3) { // Ограничиваем количество попыток
      try {
        attempts++

        if (+i === 0) {
          // Для первого топика просто инициализируем черновик
          const req1 = [
            { role: Role.SYSTEM, content: TOPIC_SNAPSHOT_PROMPT },
            { role: Role.USER, content: formatDescription + convertTopicsToTextFormat([topic as TopicModel]) },
          ]
          draft = await chat(req1) // Получаем первый черновик
          console.log('draft', draft)
          success = true
          continue
        }

        // Для последующих топиков интегрируем их в текущий черновик
        const req = [
          { role: Role.SYSTEM, content: TOPIC_SNAPSHOT_PROMPT },
          { role: Role.USER, content: appendPrompt + draft + `\n\n--- TOPIC ${topic.name} ---\n` + formatDescription + convertTopicsToTextFormat([topic as TopicModel]) },
        ]
        console.log('req ' + '#' + i, req[1])

        const topicPortrait = await chat(req)
        console.log('topicPortrait ' + '#' + i, topicPortrait)

        // Конкатенируем новый топик с разделителями
        draft += `\n\n--- TOPIC ${topic.name} ---\n` + topicPortrait

        await prismaDb.interviewTopic.update({
          where: {
            id: topic.id as number,
          },
          data: {
            summary: topicPortrait,
          },
        })
        console.log('draft ' + '#' + i, draft)

        success = true // Если все прошло успешно, выходим из цикла
      } catch (error) {
        console.error(`Error processing topic ${topic.name} on attempt ${attempts}:`, error)
        if (attempts >= 3) {
          throw new Error(`Failed to process topic ${topic.name} after 3 attempts.`)
        } else {
          await delay(1000)
        }
      }
    }
  }

  return draft
}

// setImmediate(async () => {
//   const interview = await prismaDb.interview.findMany({
//     where: { replicantId: 7 },

//   })
//   // console.log('interview', interview)
//   fs.writeFileSync('interview.json', JSON.stringify(interview))
// })