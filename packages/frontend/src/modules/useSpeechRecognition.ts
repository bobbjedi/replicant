import type { MessageLanguages } from 'src/stores/langStorage'
import { ref } from 'vue'

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

export const initializeSpeechRecognition = (lang: MessageLanguages) => {
  // Check if the browser supports the Web Speech API
  if (!('webkitSpeechRecognition' in window)) {
    console.error('Speech Recognition API is not supported by this browser')
  }

  // Initialize recognition
  // eslint-disable-next-line no-undef
  const recognition: TRecognition = new webkitSpeechRecognition()
  recognition.continuous = true // Will continue recognition
  recognition.lang = lang === 'RU' ? 'ru-RU' : 'en-US' // Set the language for recognition
  recognition.interimResults = true // Show interim results

  const isListening = ref(false)
  const transcript = ref('')
  // When recognition ends
  recognition.onend = () => {
    isListening.value = false
  }
  let onTranscript_: (transcript: string) => void
  // Error handling
  recognition.onresult = (event: TEvent) => {
    let result = ''
    for (let i = event.resultIndex; i < event.results.length; i++) {
      result += event.results?.[i]?.[0].transcript
    }

    // Add interim data to avoid overwriting
    if (event?.results?.[event.resultIndex]?.isFinal) {
      if (onTranscript_) {
        onTranscript_(' ' + result + ' ')
      }
    }
  }
  return {
    onTranscript: (fn: (transcript: string) => void) => { onTranscript_ = fn },
    isListening,
    transcript,
    stopRecognition: () => {
      if (isListening.value) {
        recognition?.stop() // Stop recognition if it is active
      }
      isListening.value = false
    },
    toggleSpeechRecognition: () => {
      if (isListening.value) {
        recognition?.stop() // Stop recognition if it is active
      } else {
        if (!recognition) {
          initializeSpeechRecognition(lang) // Initialize recognition if it was not initialized
        }
        recognition?.start() // Start recognition
      }
      isListening.value = !isListening.value
    },
  }
}