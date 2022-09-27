import {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import {useTranslation} from 'react-i18next';
import {checkIfArrayExists} from '../../utils/helperFunctions';

import BlifBox from '../Common/Box/BlifBox';
import useTranslationForOptions from '../../hooks/useTranslationForOptions';
import {
    PROVINCE_FILTER_OPTIONS_KEYS,
    REJECTS_FILTER_OPTIONS_KEYS,
    BRG_FILTER_OPTIONS_KEYS,
    CLEC_FILTER_OPTIONS_KEYS,
    PRECHECK_LANGUAGE_KEYS,
} from '../../utils/languageKeys/components/preCheckKeys';

import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';

// OPTIONS
export const getProvinceFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: 'ALL',
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            PROVINCE_FILTER_OPTIONS_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'QC',
        [ARRAY_MAP_KEYS.value]: 'QC',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            PROVINCE_FILTER_OPTIONS_KEYS.QC,
    },
];

export const getBrgIndicatorFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: 'ALL',
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.languageTranslationKey]: BRG_FILTER_OPTIONS_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'Business',
        [ARRAY_MAP_KEYS.value]: 'Business',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            BRG_FILTER_OPTIONS_KEYS.BUSINESS,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'Residential',
        [ARRAY_MAP_KEYS.value]: 'Residential',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            BRG_FILTER_OPTIONS_KEYS.RESIDENTIAL,
    },
];

export const getRejectsFilterOption = [
    {
        [ARRAY_MAP_KEYS.text]: 'ALL',
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            REJECTS_FILTER_OPTIONS_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'Only Rejects',
        [ARRAY_MAP_KEYS.value]: 'Only Rejects',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            REJECTS_FILTER_OPTIONS_KEYS.ONLY_REJECTS,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'No Rejects',
        [ARRAY_MAP_KEYS.value]: 'No Rejects',
        [ARRAY_MAP_KEYS.languageTranslationKey]:
            REJECTS_FILTER_OPTIONS_KEYS.NO_REJECTS,
    },
];

export const getClecFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: 'ALL',
        [ARRAY_MAP_KEYS.value]: 'ALL',
        [ARRAY_MAP_KEYS.languageTranslationKey]: CLEC_FILTER_OPTIONS_KEYS.ALL,
    },
    {
        [ARRAY_MAP_KEYS.text]: 'FIDO',
        [ARRAY_MAP_KEYS.value]: 'FIDO',
        [ARRAY_MAP_KEYS.languageTranslationKey]: CLEC_FILTER_OPTIONS_KEYS.FIDO,
    },
];

//Form Schema
const PRECHECK_FORM_SCHEMA_KEYS = {
    FILE_INPUT: 'FILE_INPUT',
    PROVINCE_INPUT: 'PROVINCE_INPUT',
    BRG_INDICATOR_INPUT: 'BRG_INDICATOR_INPUT',
    REJECTS_INPUT: 'REJECTS_INPUT',
    CLEC_INPUT: 'CLEC_INPUT',
};

const PRECHECK_FORM_SCHEMA = {
    [PRECHECK_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [PRECHECK_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.REJECTS_INPUT]:
        getRejectsFilterOption[ZERO_INDEX].value,
    [PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT]:
        getClecFilterOptions[ZERO_INDEX].value,
};

// PreCheck Component
const PreCheck = () => {
    const {t} = useTranslation();

    //Translate options
    const translatedProvinceFilterOptions = useTranslationForOptions(
        getProvinceFilterOptions,
    );

    const translatedBrgIndicatorFilterOptions = useTranslationForOptions(
        getBrgIndicatorFilterOptions,
    );

    const translatedRejectsFilterOptions = useTranslationForOptions(
        getRejectsFilterOption,
    );

    const translatedClecFilterOptions =
        useTranslationForOptions(getClecFilterOptions);

    const [filterQuery, setFilterQuery] = useState(PRECHECK_FORM_SCHEMA);
    const [filterSchema, setFilterSchema] = useState([]);

    useEffect(() => {
        if (
            checkIfArrayExists(translatedProvinceFilterOptions) &&
            checkIfArrayExists(translatedBrgIndicatorFilterOptions) &&
            checkIfArrayExists(translatedRejectsFilterOptions) &&
            checkIfArrayExists(translatedClecFilterOptions)
        ) {
            const localFilterSchema = [
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]: 'File',
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.FILE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: 'Province',
                    [ARRAY_MAP_KEYS.OPTIONS]: translatedProvinceFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.PROVINCE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: 'CLEC',
                    [ARRAY_MAP_KEYS.OPTIONS]: translatedClecFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.CLEC_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: 'BRG Indicator',
                    [ARRAY_MAP_KEYS.OPTIONS]:
                        translatedBrgIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: 'Rejects',
                    [ARRAY_MAP_KEYS.OPTIONS]: translatedRejectsFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        PRECHECK_FORM_SCHEMA_KEYS.REJECTS_INPUT,
                },
            ];

            setFilterSchema(localFilterSchema);
        }
    }, [
        translatedProvinceFilterOptions,
        translatedBrgIndicatorFilterOptions,
        translatedRejectsFilterOptions,
        translatedClecFilterOptions,
    ]);

    const handleInputChange = (filterKey, val) => {
        setFilterQuery((prev) => ({...prev, [filterKey]: val}));
    };

    // search onClick handler
    const clickHandler = (e) => {
        e.preventDefault();

        alert('search query');
    };

    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGridRow>
                <BlifFlexGridCol lg={12} md={10}>
                    <BlifTypography variant={{size: 'h2'}}>
                        {t(PRECHECK_LANGUAGE_KEYS.PRECHECK_HEADING)}
                    </BlifTypography>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
            <BlifFlexGridRow verticalAlign="middle" horizontalAlign="center">
                <BlifFlexGridCol lg={12} md={10}>
                    <BlifBox
                        variant={{background: 'light'}}
                        bottom={{lg: 1}}
                        left={{lg: 1}}
                        right={{lg: 7}}
                        flex={1}>
                        <FiltersView
                            clickHandler={clickHandler}
                            schema={filterSchema}
                            handleInputChange={handleInputChange}
                        />
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
        </BlifFlexGrid>
    );
};

export default PreCheck;
