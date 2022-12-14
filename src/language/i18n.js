import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {EnglishTranslations} from './EnglishTranslations';
import {FrenchTranslations} from './FrenchTranslations';
import {LANGUAGES} from './Languages';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        // English
        en: {
            translations: {...EnglishTranslations},
        },

        // French
        fn: {
            translations: {...FrenchTranslations},
        },
    },
    fallbackLng: LANGUAGES.ENGLISH,
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    nsSeparator: false,
    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        skipOnVariables: false,
    },

    react: {
        useSuspense: true,
    },
});

export default i18n;
