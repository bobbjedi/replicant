declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

declare let SpeechRecognition
interface Window {
  // eslint-disable-next-line no-undef
  webkitSpeechRecognition: SpeechRecognition;
}

// eslint-disable-next-line no-undef
declare let webkitSpeechRecognition: SpeechRecognition