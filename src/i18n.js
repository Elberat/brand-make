import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import ru from './translation/ru.json';
import ky from './translation/ky.json';
import kz from './translation/kz.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  ru: { translation: ru },
  ky: { translation: ky },
  kz: { translation: kz },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') ?? 'ru', // language to use, more information here:
    // you can use the i18n.changeLanguage function to change the language manually:
    // if you're using a language detector, do not define the lng option

    interpolation: { escapeValue: false },
  });

export default i18n;
