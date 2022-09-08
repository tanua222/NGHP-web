import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import corp_english from "./corp-english.json";
import corp_french from "./corp-french.json";
import ld_english from "./ld-english.json";
import ld_french from "./ld-french.json";
import tf_english from "./tf-english.json";
import tf_french from "./tf-french.json";
import ivs_english from "./ivs-english.json";
import ivs_french from "./ivs-french.json";
import hierarchy_english from "./hierarchy-english.json";
import hierarchy_french from "./hierarchy-french.json";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {translations:{...corp_english,...ld_english,...tf_english,...ivs_english,...hierarchy_english}},
    // fn: fn
    fn: {translations:{...corp_french,...ld_french,...tf_french,...ivs_french,...hierarchy_french}}
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  nsSeparator: false,
  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
    skipOnVariables: false
  },

  react: {
    wait: true
  }
});

export default i18n;
