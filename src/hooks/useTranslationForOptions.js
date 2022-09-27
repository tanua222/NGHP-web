import {useTranslation} from 'react-i18next';
import {useState, useEffect} from 'react';
import {checkIfArrayExists} from '../utils/helperFunctions';
import {ARRAY_MAP_KEYS} from '../utils/commonKeys';

// hook designed for translating array options language for filters

const useTranslationForOptions = (optionsArray = []) => {
    const {t} = useTranslation();
    const [translatedOptions, setTranslatedOptions] = useState([]);

    useEffect(() => {
        if (checkIfArrayExists(optionsArray)) {
            const translateArrayLanguage =
                optionsArray.map((item) => ({
                    [ARRAY_MAP_KEYS.value]: item[ARRAY_MAP_KEYS.value],
                    [ARRAY_MAP_KEYS.text]: t(
                        item[ARRAY_MAP_KEYS.languageTranslationKey],
                    ),
                })) ?? [];

            setTranslatedOptions(translateArrayLanguage);
        }
    }, [optionsArray, t]);

    return translatedOptions;
};

export default useTranslationForOptions;
