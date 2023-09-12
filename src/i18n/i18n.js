import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to our app!',
        },
      },
      ha: {
        translation: {
          welcome: 'Barka da zuwa app ɗin mu !',
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue dans notre application !',
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
