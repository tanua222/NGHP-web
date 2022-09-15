export const isEnglish = (i18nLanguage) => {
    const englishValidValues = ['en', 'en-US', 'en-CA'];
    return englishValidValues.includes(i18nLanguage);
};
