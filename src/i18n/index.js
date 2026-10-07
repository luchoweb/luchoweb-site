import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        supportedLngs: ['en', 'es'],
        fallbackLng: 'es',
        load: 'languageOnly',
        detection: {
            order: ['navigator'],
            caches: [],
        },
        interpolation: {
            escapeValue: false,
        },
    });

const syncDocumentLang = (lng) => {
    document.documentElement.lang = (lng || 'es').toLowerCase().startsWith('en') ? 'en' : 'es-CO';
};

i18n.on('languageChanged', syncDocumentLang);
syncDocumentLang(i18n.language);

export default i18n;
