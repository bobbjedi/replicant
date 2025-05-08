import { DEFAULT_TOPICS_META } from '../../shared/src/constants'

export const INTRO = {
  RU: `Сейчас мы начнем создание твоего цифрового портрета, который будет основываться на твоих взглядах, ценностях и жизненном опыте.\n
    Для этого мы проведем интервью, в котором от тебя потребуется поделиться своими мыслями и переживаниями. \n
     Важно быть внимательным при ответах, чтобы мы могли точно и полно отразить твою уникальную личность. Этот процесс поможет создать максимально точный и персонализированный портрет, который будет только твоим.`,
  EN: `Now, we will start creating your digital portrait, which will be based on your views, values, and life experience. \n
    To do this, we will conduct an interview where you will share your thoughts and feelings. It’s important to be attentive with your answers, so we can accurately and fully reflect your unique personality. \n
    This process will help create the most accurate and personalized portrait that will be solely yours.`
}

export const INTRO_PATH_2 = {
  RU: `Не стоит заострять внимание на текущих проблемах или переживаниях во время интервью, если они имеются. Это может повлиять на точность твоего общего портрета. \n
    В ходе интервью будет рассмотрено множество тем, охватывающих разные области. Ты можешь отвечать на них столько, сколько посчитаешь нужным. Если почувствуешь, что тема исчерпана, нажми на кнопку "Новый топик".\n
    Обязательно отмечай свои эмоции в ответах — это поможет отразить твое отношение к каждому вопросу. Таким образом, мы сможем точнее и полнее понять твою уникальность.\n
    Если ты готов, давай начнем!`,
  EN: `It's important not to focus on current problems or concerns during the interview, as they may distort your overall portrait. \n
    The interview will cover a range of topics in various areas. You can answer as much or as little as you feel is necessary. If you feel a topic is exhausted, click the "New Topic" button.\n
    Don’t forget to mark your emotions in your answers. They reflect your attitude toward the question, helping us gain a more accurate and complete understanding of your uniqueness.\n
    If you're ready, let's begin!
    `
}

export const FIRST_QUESTION = {
  RU: `Привет! Давай начнем с нашего знакомства. Расскажи немного о себе: как тебя зовут, сколько тебе лет, есть ли у тебя семья, чем увлекаешься. /n
  Это поможет создать более точное представление о твоей жизни. Все данные сохраняются только на твоем устройстве и под защитой.`,
  EN: `Hello! Let’s start with a quick introduction. Tell me a bit about yourself: your name, age, whether you have a family, and what your hobbies are.\n
   This will help me better understand your life. All your data is stored securely on your device, encrypted.`
}

export const FIRST_TOPIC_NAME = DEFAULT_TOPICS_META[0] as { RU: string, EN: string }

export const EMOTIONS = [
  {
    RU: 'Нейтрально',
    EN: 'Neutral',
    emoji: '😐',
    color: '#6C757D' // серый
  },
  {
    RU: 'Интересно',
    EN: 'Interested',
    emoji: '🧐',
    color: '#5BC0BE' // морской бирюзовый
  },
  {
    RU: 'Радость',
    EN: 'Joy',
    emoji: '😊',
    color: '#FFB830' // тёплый янтарный
  },
  {
    RU: 'Грусть',
    EN: 'Sadness',
    emoji: '😢',
    color: '#4A6572' // приглушённый сине-серый
  },
  {
    RU: 'Тревога',
    EN: 'Anxious',
    emoji: '😰',
    color: '#F05454' // кораллово-красный
  },
  {
    RU: 'Смущение',
    EN: 'Embarrassed',
    emoji: '😳',
    color: '#BB86FC' // сиреневый
  },
  {
    RU: 'Гнев',
    EN: 'Anger',
    emoji: '😠',
    color: '#D7263D' // насыщенный красный
  },
  {
    RU: 'Усталость',
    EN: 'Tired',
    emoji: '😴',
    color: '#A9A9A9' // тёмный серый
  },
  {
    RU: 'Воодушевление',
    EN: 'Inspired',
    emoji: '🤩',
    color: '#F96D00' // яркий оранжевый
  },
  {
    RU: 'Замешательство',
    EN: 'Confused',
    emoji: '😕',
    color: '#9E9E9E' // глухой серо-синий
  }
]

export const SKIP_REASONS = [
  { RU: 'Неинтересный вопрос', EN: 'Not interesting', emoji: '🙄' },
  { RU: 'Слишком личный вопрос', EN: 'Too personal', emoji: '😶' },
  { RU: 'Не хочу отвечать', EN: 'Don’t want to answer', emoji: '🚫' },
  { RU: 'Не знаю ответа', EN: 'Don’t know', emoji: '🤷‍♂️' }
]
export const SKIP_REASON_PREFIX = {
  RU: 'Пользователь не стал отвечать, указал причину: ',
  EN: 'User did not answer, reason: '
}

import './seedDb'