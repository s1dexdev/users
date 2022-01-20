import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages, { LOCALES } from '../lang';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: LOCALES.ENGLISH,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            enUS: {
                translation: messages[LOCALES.ENGLISH],
            },
            ru: {
                translation: messages[LOCALES.RUSSIAN],
            },
        },
    });

export default i18n;
