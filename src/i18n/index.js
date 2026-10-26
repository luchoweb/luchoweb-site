import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};

// Spanish (Colombia) is the default. English is only used when the visitor
// picks it in the switch (saved in localStorage) or via ?lang=en.
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        supportedLngs: ['en', 'es'],
        fallbackLng: 'es',
        load: 'languageOnly',
        detection: {
            order: ['querystring', 'localStorage'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'lang',
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

const setMeta = (selector, content) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
};

const syncDocument = (lng) => {
    const isEn = (lng || 'es').toLowerCase().startsWith('en');
    document.documentElement.lang = isEn ? 'en-US' : 'es-CO';
    document.title = i18n.t('meta.title');
    setMeta('meta[name="description"]', i18n.t('meta.description'));
    setMeta('meta[name="content-language"]', isEn ? 'en-US' : 'es-CO');
};

i18n.on('languageChanged', syncDocument);
syncDocument(i18n.language);

export default i18n;
