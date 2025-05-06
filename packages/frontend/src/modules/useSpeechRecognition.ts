import { ref } from "vue";

type TEvent = { results: { transcript: string, isFinal: boolean }[], error: string, resultIndex: number, isFinal: boolean }

export type TRecognition = {
    start: () => void;
    stop: () => void;
    onend: () => void;
    onresult: (event: TEvent) => void;
    onerror: (event: TEvent) => void;
    continuous: boolean;
    interimResults: boolean;
    lang: string;
};

export const initializeSpeechRecognition = () => {
    // Проверяем, поддерживает ли браузер Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        console.error('Speech Recognition API не поддерживается этим браузером');
    }

    // Инициализируем распознавание
    const recognition: TRecognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Будет продолжаться распознавание
    recognition.lang = 'ru-RU'; // Устанавливаем язык для распознавания
    recognition.interimResults = true; // Показывать промежуточные результаты

    const isListening = ref(false);
    const transcript = ref('');
    // Когда распознавание завершится
    recognition.onend = () => {
        isListening.value = false;
    };
    let onTranscript_: (transcript: string) => void;
    // Обработка ошибок
    recognition.onresult = (event: TEvent) => {
        let result = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            result += event.results?.[i]?.[0].transcript;
        }

        // Добавляем промежуточные данные, чтобы они не перезаписывались
        if (event?.results?.[event.resultIndex]?.isFinal) {
            if (onTranscript_) {
                onTranscript_(' ' + result + ' ');
            }
        }
    };
    return {
        onTranscript: (fn: (transcript: string) => void) => { onTranscript_ = fn },
        isListening,
        transcript,
        stopRecognition: () => {
            if (isListening.value) {
                recognition?.stop(); // Останавливаем распознавание, если оно активно
            }
            isListening.value = false;
        },
        toggleSpeechRecognition: () => {
            if (isListening.value) {
                recognition?.stop(); // Останавливаем распознавание, если оно активно
            } else {
                if (!recognition) {
                    initializeSpeechRecognition(); // Инициализируем распознавание, если оно не было инициализировано
                }
                recognition?.start(); // Начинаем распознавание
            }
            isListening.value = !isListening.value;
        }
    }
};