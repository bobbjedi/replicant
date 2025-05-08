import { Role, chat } from '../ai/adapters/aiClient'
import { convertTopicsToTextFormat } from '../ai/replicantEngine'
import TOPIC_SNAPSHOT_PROMPT from '../ai/TOPIC_SNAPSHOT_PROMPT'
import prismaDb from '../prisma/prismaDb'
import { TopicModel } from '../../../shared/src/types'

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
      await generateInterviewSnapshotFromChat(topics)
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
    if (+i === 0) {
      // Для первого топика просто инициализируем черновик
      const req1 = [
        { role: Role.SYSTEM, content: TOPIC_SNAPSHOT_PROMPT },
        { role: Role.USER, content: formatDescription + convertTopicsToTextFormat([topic as TopicModel]) },
      ]
      draft = await chat(req1) // Получаем первый черновик
      console.log('draft', draft)
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
  }

  return draft
}