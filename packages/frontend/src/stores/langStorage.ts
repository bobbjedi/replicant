import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { FIRST_QUESTION, INTRO, INTRO_PATH_2 } from 'src/constants'

export type MessageLanguages = 'EN' | 'RU';

const FIELD = 'lang'
localStorage.setItem(FIELD, 'RU')

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: localStorage.getItem(FIELD) || 'en' as MessageLanguages, // You can set the initial language
  }),
  actions: {
    setLanguage (lang: MessageLanguages) {
      this.currentLang = lang
      localStorage.setItem(FIELD, lang)
    },
    loadLanguageFromQuasar () {
      const $q = useQuasar()
      const lang = ($q.lang.getLocale()?.toUpperCase() || 'EN') as MessageLanguages // Get the current locale from Quasar
      this.currentLang = lang
      localStorage.setItem(FIELD, lang)
    },
  },
  getters: {
    lang: (state) => state.currentLang as MessageLanguages,
    introMessage: (state) => state.currentLang === 'EN' ? INTRO.EN : INTRO.RU,
    intro2Message: (state) => state.currentLang === 'EN' ? INTRO_PATH_2.EN : INTRO_PATH_2.RU,
    firstQuestionMessage: (state) => state.currentLang === 'EN' ? FIRST_QUESTION.EN : FIRST_QUESTION.RU,
  },
})