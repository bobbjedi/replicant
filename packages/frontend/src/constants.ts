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
  RU: `Давай начнём с знакомства. Расскажи, пожалуйста, о себе — твой пол, как тебя зовут, когда ты родился, сколько тебе лет, есть ли у тебя семья или дети, чем ты увлекаешься.
Эти данные помогут лучше понять твой жизненный контекст и сформировать максимально точный персональный портрет. Вся информация хранится только у тебя на устройстве, под шифрованием, и не передаётся наружу.`,
  EN: `Let’s start by getting to know you. Please tell me about yourself — your gender, your name, date of birth, age, whether you have a family or children, and what your interests are.
This information will help build a clearer understanding of your life context and create a more accurate personal profile.
All your data is stored only on your device, encrypted, and never shared externally.`
}

export const FIRST_TOPIC_NAME = {
  RU: 'Знакомство',
  EN: 'Greeting'
}
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

export const BASE_TOPICS = [
  { RU: 'Религия', EN: 'Religion', emoji: '🙏' },
  { RU: 'Философия', EN: 'Philosophy', emoji: '🤔' },
  { RU: 'Политика', EN: 'Politics', emoji: '🏛️' },
  { RU: 'Личное развитие', EN: 'Self-development', emoji: '📈' },
  { RU: 'Семья и отношения', EN: 'Family & Relationships', emoji: '👨‍👩‍👧‍👦' },
  { RU: 'Этика', EN: 'Ethics', emoji: '⚖️' },
  { RU: 'Работа и карьера', EN: 'Work & Career', emoji: '💼' },
  { RU: 'Дружба', EN: 'Friendship', emoji: '🤝' },
  { RU: 'Жизненные ценности', EN: 'Life Values', emoji: '💖' },
  { RU: 'Страхи и тревоги', EN: 'Fears & Anxieties', emoji: '😨' },
  { RU: 'Будущее', EN: 'Future', emoji: '🔮' },
  { RU: 'Воспоминания детства', EN: 'Childhood Memories', emoji: '🧸' },
  { RU: 'Любимые книги и фильмы', EN: 'Books & Movies', emoji: '🎥' },
  { RU: 'Моральные дилеммы', EN: 'Moral Dilemmas', emoji: '🧭' },
  { RU: 'Отношение к технологиям', EN: 'Technology', emoji: '📱' },
  { RU: 'Смысл жизни', EN: 'Meaning of Life', emoji: '✨' },
  { RU: 'Путешествия', EN: 'Travel', emoji: '✈️' },
  { RU: 'Эмоции и чувства', EN: 'Emotions & Feelings', emoji: '💓' },
  { RU: 'Культура и искусство', EN: 'Culture & Art', emoji: '🎨' },
  { RU: 'Смерть и загробная жизнь', EN: 'Death & Afterlife', emoji: '⚰️' }
]