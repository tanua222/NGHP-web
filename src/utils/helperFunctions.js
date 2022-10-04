export const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};

export const checkIfArrayExists = (array) => {
    return Array.isArray(array) && array?.length > 0;
};

export const isEnglish = (i18nLanguage) => {
    const englishValidValues = ['en', 'en-US', 'en-CA'];
    return englishValidValues.includes(i18nLanguage);
};
