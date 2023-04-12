import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translationEn.json';
import ruTranslation from './ru/translationRu.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export default i18n;
