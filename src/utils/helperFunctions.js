export const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};

export const checkIfArrayExists = (array) => {
    return Array.isArray(array) && array?.length > 0;
};
