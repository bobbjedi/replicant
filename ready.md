
generator client {
  provider = "prisma-client-js"
  output   = "./client"
}

datasource db {
  provider = "sqlite"
  url      = "file:./db.sqlite"
}

model Replicant {
  id          Int        @id @default(autoincrement())
  name        String
  description String?
  createdAt   DateTime   @default(now())
  snapshot    String     // Заменил Bytes на String
  interview   Interview? @relation(name: "ReplicantInterview")
}

model Interview {
  id          Int             @id @default(autoincrement())
  replicantId Int             @unique
  replicant   Replicant       @relation(name: "ReplicantInterview", fields: [replicantId], references: [id], onDelete: Cascade)
  createdAt   DateTime        @default(now())
  summary     String          // Заменил Bytes на String
  topics      InterviewTopic[]
}

model InterviewTopic {
  id          Int       @id @default(autoincrement())
  interviewId Int
  name        String
  questions   Question[]
  summary     String    // Заменил Bytes на String
  type        String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @default(now())
  interview   Interview @relation(fields: [interviewId], references: [id], onDelete: Cascade)
}

model Question {
  id            Int            @id @default(autoincrement())
  topicId       Int
  questionText  String
  answerText    String?
  emotion       String
  createdAt     DateTime       @default(now())
  topic         InterviewTopic @relation(fields: [topicId], references: [id], onDelete: Cascade)
}

import prismaDb, { InterviewModel } from '../prisma/prismaDb'
import { z } from 'zod'
import t from './trcpInstance'
import { QuestionModel } from '../../../shared/src/types'
import { generateNextQuestionByQuestionsListFromChat, generateFirstQuestionOfNewTopicFromChat } from '../ai/replicantEngine'

export const getInterviewByRepId = async (repId: number): Promise<InterviewModel | null> => {
  return prismaDb.interview.findFirst({
    where: {
      replicantId: repId,
    },
    include: {
      questions: true,
    },
  })
}

export const getInterviewTopicsWithQuestions = t.procedure
  .input(z.object({ repId: z.number() }))
  .query(async ({ input }) => {
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: input.repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!interview) {
      throw new Error('Interview not found')
    }

    // Группируем вопросы по topic
    const topicsMap: Record<string, QuestionModel[]> = {}

    interview.questions.forEach((q: QuestionModel) => {
      topicsMap[q.topic] ||= []
      const list = topicsMap[q.topic] as QuestionModel[]
      list.push({ ...q })
    })

    // Формируем массив тем с вопросами
    const result = Object.entries(topicsMap).map(([topic, questions]) => {
      return {
        topic,
        updatedAt: questions[0]?.createdAt,
        questions,
      }
    }).sort((t1, t2) => Number(t2.updatedAt) - Number(t1.updatedAt))

    return result
  })

export const crateInterviewQuestion = t.procedure
  .input(z.object({
    repId: z.number(),
    emotion: z.string(),
    topic: z.string(),
    questionText: z.string(),
    answerText: z.string(),
  }))
  .mutation(async ({ input }) => {
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: input.repId },
    })

    if (!interview) {

      throw new Error('Interview not found')
    }
    const { emotion, topic, questionText, answerText } = input
    return prismaDb.question.create({
      data: {
        interviewId: interview.id,
        emotion: emotion || 'unknown',
        topic: topic,
        questionText,
        answerText: answerText.replace(/  /g, ' '),
      },
    })
  })

export const generateNextQuestionText = t.procedure
  .input(z.object({
    repId: z.number(),
    topicName: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .query(async ({ input }) => {
    const { repId, topicName, lang } = input

    console.log('generateNextQuestionText', input)
    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    const greetingTopicName = interview?.questions[0]?.topic as string

    // always use greeting topic for generate next questions
    const greetingQuestions = await prismaDb.question.findMany({
      where: {
        topic: greetingTopicName,
        interviewId: interview?.id as number,
      },
    })

    const currentTopicQuestions = await prismaDb.question.findMany({
      where: {
        topic: topicName,
        interviewId: interview?.id as number,
      },
    })

    const newQuestionText = await generateNextQuestionByQuestionsListFromChat({
      greetingQuestions: greetingTopicName === topicName ? [] : greetingQuestions,
      currentTopicQuestions,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

export const generateFirstQuestionOfTopic = t.procedure
  .input(z.object({
    repId: z.number(),
    topicName: z.string(),
    lang: z.enum(['RU', 'EN']),
  }))
  .query(async ({ input }) => {
    const { repId, topicName, lang } = input

    const interview = await prismaDb.interview.findFirst({
      where: { replicantId: repId },
      include: {
        questions: {
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    const greetingTopicName = interview?.questions[0]?.topic as string

    // always use greeting topic for generate next questions
    const greetingQuestions = await prismaDb.question.findMany({
      where: {
        topic: greetingTopicName,
        interviewId: interview?.id as number,
      },
    })

    const newQuestionText = await generateFirstQuestionOfNewTopicFromChat({
      greetingQuestions,
      topicName,
      nativeLanguage: lang,
    })

    console.log('newQuestionText:', newQuestionText)
    return newQuestionText
  })

  import prismaDb from '../prisma/prismaDb'
import { ReplicantModel } from '../../../shared/src/types'
import { z } from 'zod'
import t from './trcpInstance'

export const createReplicant = t.procedure
  .input(z.object({ name: z.string(), description: z.string() }))
  .mutation(async ({ input }): Promise<ReplicantModel> => {
    const replicant = await prismaDb.replicant.create({
      data: {
        name: input.name,
        description: input.description || null,
        interview: {
          create: { },
        },
      },
    })
    return replicant
  })

export const getReplicantsList = t.procedure.query(() => {
  return prismaDb.replicant.findMany() as Promise<ReplicantModel[]>
})


export enum Role {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
}

interface Message {
  role: Role;
  content: string;
}

interface ChatOptions {
  model?: string;
  temperature?: number;
  headers?: Record<string, string>;
}

interface RequestItem {
  messages: Message[];
  options: ChatOptions;
  resolve: (value: string) => void;
  reject: (reason?: any) => void;
}

const queue: RequestItem[] = []
let isProcessing = false

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function processQueue () {
  if (isProcessing) { return }
  isProcessing = true

  while (queue.length > 0) {
    const item = queue.shift()
    if (!item) { continue }

    const {
      messages,
      options: {
        model = 'openai/gpt-4o-mini',
        temperature = 0.7,
        headers = {},
      },
      resolve,
      reject,
    } = item

    try {
      const response = await axios.post(
        `${BASE_URL}/chat/completions`,
        {
          model,
          messages,
          temperature,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            ...headers,
          },
        },
      )

      const answer = response.data.choices[0].message.content
      resolve(answer)
    } catch (error) {
      const axiosError = error as AxiosError
      console.error(
        'Ошибка при обращении к API:',
        axiosError.response ? axiosError.response.data : axiosError.message,
      )
      reject(error)
    }

    await delay(1100) // пауза между запросами
  }

  isProcessing = false
}

export function chat (
  messages: Message[],
  options: ChatOptions = {},
): Promise<string> {
  return new Promise((resolve, reject) => {
    queue.push({ messages, options, resolve, reject })
    processQueue()
  })
}



На фронте добавлено:
- список репликантов
- добавление репликанта
- вывод списка топиков
- первый хардкодный топик Знакомство
- поле для ввода ответа + голосовой ввод
- эмодзи - эмоция приклеменная к ответу
- создание первого Question


Порядок проведения интервью:
Запускается первый топик Знакомство
Первый вопрос хардкодовы - проьба рассказать о себе. Имя, год рождения, где родился и тд и тп - зачастую важно чтобы лучше понять среду где рос человек
После кажого вопроса появляется список эмоций - чтобы пользователь оценил с какой эмоцией он это рассказал
Далее сохраняем Question
Идем к GPT - отдаем весь топик и просим сформулировать следующий вопрос по теме топика
Пользователь видит новый вопрос
У него есть выбор - начать отвечать + эмодзи и так по кругу
Или отказаться отвечать на этот вопрос с пояснением, например Не приятная тема, Не однозначно сформулирован вопрос и тд
В этом случае также сохраняем в Questions с причиной отказа отвечать. такие данные так же важны для формирования личности 
Просим GPT сформулировать новый вопрос
Кроме возможности отказаться от вопроса, можно завршить топик и начать новый (завершить топик)
Список топиков будет предоставлен хардкодом
А так же есть возможность пользователю сформулировать топик самому
Видно историю топиков с вопросами-ответами
При желании можно переключться и продолжыть любой из прошлых топиков из истории

Как формируется следующий вопрос:
- я отправляю GPT в обязтельном порядке топик Знакомство. Там базовая информация есть. Думаю полезно понимать при формировании вопроса пол, возраст и общие моменты о человеке
- кроме этого отправляю весь текущий топик
- системный промпт

Соответсвенно при начале нового топика, отправляем Знакомство, новую тему топика и промпт системный соответсвующий

export const SYSTEM_PROMPT_TEMPLATE = `
You are conducting a psychological interview to better understand a person's personality and life experience. 
You are provided with a list of topics. Each topic contains a series of questions, the person's answers, and the emotions they felt during the responses. 
The first topic is always "Introduction," and it includes basic information such as name, birth year, place of birth, and other important details. 
After each answer, the person selects an emotion that describes how they felt while answering. 
Your task is to formulate the next question for the interview, considering the emotional tone of the answers and the flow of the conversation. 
Pay attention to sensitive topics and avoid repeating questions. 
You should actively switch between different themes within a topic, so that the conversation remains dynamic and covers a wide range of aspects related to the topic. The interviewer should take the initiative to guide the conversation and avoid getting stuck on a single subject. 
Respond **only with the next interview question** in the native language of the interviewee: {{language}}.
`

export const NEW_TOPIC_PROMPT_TEMPLATE = `
You are conducting a psychological interview to better understand a person's personality and life experience.
You have a list of questions and answers from the "Introduction" topic — it contains basic information such as the person's name, birth year, place of birth, hobbies, and other facts.

A new topic has now started: "{{topicName}}".
The description of the topic may be missing.

Your task:
- Formulate the **first question** for this new topic that helps start a meaningful conversation on the subject.
- The question must be **open-ended** (not answerable with just "yes" or "no").
- Avoid repeating information already covered in the "Introduction" topic.
- Do not dive into details right away — begin with a broad question to give the person room to share.
- If the "Introduction" contains information related to the new topic, you may use it to personalize the question.
- Always write the question in the native language of the interviewee: {{language}}.

**Respond only with the question itself, no additional explanations or comments.**
`

вот такие предпромпты системные для проведения интервью.

Интервью полностью готово и бек и фронт.


Мысли:
- добавить озвучивание вопроса
- добавить возможность чтобы GPT попросил юзера сформулировать те или иные вопросы по теме топика. Чтобы сохранить как полльзователь сам строит вопросы. А то в интевью он только оттвечает на них. Для живости репликанта это необходимо

Попросить GPT предложить пользователю выбор из 2–3 вариантов следующего вопроса, чтобы пользователь сам выбрал направление разговора.

Фиксировать наиболее частые эмоции по топикам — для последующего анализа или построения эмоционального профиля.

Позволить пользователю задать свой вопрос Replicant'у — чтобы имитировать диалог в обе стороны.

Добавить возможность аудиозаписи ответа (не только голосового ввода текста) — с сохранением аудиофайла в снапшот.

Периодически формулировать промежуточные выводы о собеседнике на основе накопленных вопросов и эмоций.


Предполагаема схема лайт режима общения с репликантом:
[Вопрос пользователя] 
       │
       ▼
[Создаём эмбеддинг]
       │
       ▼
[Ищем близкие куски в ChromaDB]
       │
       ▼
[Формируем промпт из них + вопрос]
       │
       ▼
[Отправляем в GPT]
       │
       ▼
[Получаем ответ репликанта]

OPENAI_API_KEY=sk-or-vv-ab9eeaaf0d90aaa3a60e09d5cd37b1830e4235214ab4377c2b6f42e59569f27e
OPENAI_BASE_URL=https://api.vsegpt.ru/v1

ИНСТРУКЦИЯ ДЛЯ ТЕБЯ: Пиши максимально коротко. прежде чем давать код, проговори словами алгоритм. И по неольшому кусочку кода, а не сразу весь листинг

curl https://api.vsegpt.ru/v1/embeddings
  -H "Authorization: Bearer $VSEGPT_API_KEY"
  -H "Content-Type: application/json"
  -d '{
    "input": "The food was delicious and the waiter...",
    "model": "text-embedding-ada-002",
    "encoding_format": "float"
  }'