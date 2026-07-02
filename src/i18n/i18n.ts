import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptJSON from './locales/pt.json';
import enJSON from './locales/en.json';
import esJSON from './locales/es.json';

// Get language from localStorage or detect from browser
const getInitialLanguage = () => {
  const saved = localStorage.getItem('i18nLanguage');
  if (saved) return saved;

  // Detect browser language
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'es', 'pt'].includes(browserLang)) {
    return browserLang;
  }

  // Default to Portuguese if not found
  return 'pt';
};

const resources = {
  en: { translation: enJSON },
  es: { translation: esJSON },
  pt: { translation: ptJSON },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
