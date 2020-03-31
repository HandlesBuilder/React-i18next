import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import BackendAdapter from 'i18next-multiload-backend-adapter';
import { initReactI18next } from 'react-i18next';

i18n
  // learn more: https://github.com/i18next/i18next-multiload-backend-adapter
  .use(BackendAdapter)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: navigator.language,
    fallbackLng: 'en',
    debug: true,
    preload: navigator.languages,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: {
      backend: XHR,
      allowMultiLoading: true,
      // learn more: https://github.com/i18next/i18next-xhr-backend
      backendOption: {
        loadPath: function(lngs, namespaces) {
          console.log(lngs, namespaces);
          return 'https://my-json-server.typicode.com/TserHub/Json/qinwm?lng={{lng}}&ns={{ns}}';
        },
        addPath:
          'https://my-json-server.typicode.com/TserHub/Json/qinwm?lng={{lng}}&ns={{ns}}'
      }
    }
  });

export default i18n;
