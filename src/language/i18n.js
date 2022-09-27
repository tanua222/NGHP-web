import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {headerEnglish, headerFrench} from './components/headerLanguage';
import {
    miscellaneousFrench,
    miscellaneousEnglish,
} from './miscellaneousLanguage';

import {preCheckFrench, preCheckEnglish} from './components/preCheckLanguage';

import COMMON_LANGUAGE_KEYS from '../utils/languageKeys/commonKeys';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        // English
        [COMMON_LANGUAGE_KEYS.ENGLISH]: {
            translations: {
                ...headerEnglish,
                ...preCheckEnglish,
                ...miscellaneousEnglish,
            },
        },

        // French
        [COMMON_LANGUAGE_KEYS.FRENCH]: {
            translations: {
                ...headerFrench,
                ...preCheckFrench,
                ...miscellaneousFrench,
            },
        },
    },
    fallbackLng: COMMON_LANGUAGE_KEYS.ENGLISH,
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
