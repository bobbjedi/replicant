import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';
import { FIRST_QUESTION, INTRO, INTRO_PATH_2 } from 'src/constants';

type MessageLanguages = 'EN' | 'RU';

const FIELD = 'lang';
localStorage.setItem(FIELD, 'RU');

export const useLanguageStore = defineStore('language', {
    state: () => ({
        currentLang: localStorage.getItem(FIELD) || 'en' as MessageLanguages,  // Можно задать начальную локаль
    }),
    actions: {
        setLanguage(lang: MessageLanguages) {
            this.currentLang = lang;
            localStorage.setItem(FIELD, lang);
        },
        loadLanguageFromQuasar() {
            const $q = useQuasar();
            const lang = ($q.lang.getLocale()?.toUpperCase() || 'EN') as MessageLanguages;  // Получаем текущую локаль из Quasar
            this.currentLang = lang;
            localStorage.setItem(FIELD, lang);
        },
    },
    getters: {
        lang: (state) => state.currentLang,
        introMessage: (state) => state.currentLang === 'EN' ? INTRO.EN : INTRO.RU,
        intro2Message: (state) => state.currentLang === 'EN' ? INTRO_PATH_2.EN : INTRO_PATH_2.RU,
        firstQuestionMessage: (state) => state.currentLang === 'EN' ? FIRST_QUESTION.EN : FIRST_QUESTION.RU,
    },
});
