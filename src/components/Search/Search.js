import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {ARRAY_MAP_KEYS, FILTER_TYPES, ZERO_INDEX} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import {checkIfArrayExists} from '../../utils/helperFunctions';
import BlifSpacer from '../Common/BlifSpacer/BlifSpacer';

import {
    SEARCH_LANGUAGE_KEYS,
    PROVINCE_FILTER_LANGUAGE_KEYS,
    REJECTS_FILTER_LANGUAGE_KEYS,
    BRG_FILTER_LANGUAGE_KEYS,
    FILE_SEARCH_FILTER_LANGUAGE_KEYS,
    BUS_OPERATING_NAME_FILTER_LANGUAGE_KEYS,
    PHONE_NUMBER_FILTER_LANGUAGE_KEYS,
    START_DATE_FILTER_LANGUAGE_KEYS,
    END_DATE_FILTER_LANGUAGE_KEYS,
    ACTION_INDICATOR_FILTER_LANGUAGE_KEYS,
    INTERNAL_STATUS_FILTER_LANGUAGE_KEYS,
} from '../../utils/languageKeys/components/searchKeys';
import {
    getProvinceFilterOptions,
    getBrgIndicatorFilterOptions,
    getRejectsFilterOptions,
} from '../PreCheck/PreCheck';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {useTranslation} from 'react-i18next';
import {BUTTON_TITLE} from '../../utils/commonKeys';

// Options
export const getActionIndicatorFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: ACTION_INDICATOR_FILTER_LANGUAGE_KEYS.ALL,
        [ARRAY_MAP_KEYS.value]: 'ALL',
    },
    {
        [ARRAY_MAP_KEYS.text]: ACTION_INDICATOR_FILTER_LANGUAGE_KEYS.A,
        [ARRAY_MAP_KEYS.value]: 'A',
    },
    {
        [ARRAY_MAP_KEYS.text]: ACTION_INDICATOR_FILTER_LANGUAGE_KEYS.OI,
        [ARRAY_MAP_KEYS.value]: 'O/I',
    },
    {
        [ARRAY_MAP_KEYS.text]: ACTION_INDICATOR_FILTER_LANGUAGE_KEYS.D,
        [ARRAY_MAP_KEYS.value]: 'D',
    },
];

export const getInternalStatusFilterOptions = [
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS.ALL,
        [ARRAY_MAP_KEYS.value]: 'ALL',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0000'],
        [ARRAY_MAP_KEYS.value]: '0000',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0001'],
        [ARRAY_MAP_KEYS.value]: '0001',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0002'],
        [ARRAY_MAP_KEYS.value]: '0002',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0010'],
        [ARRAY_MAP_KEYS.value]: '0010',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0015'],
        [ARRAY_MAP_KEYS.value]: '0015',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0031'],
        [ARRAY_MAP_KEYS.value]: '0031',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0032'],
        [ARRAY_MAP_KEYS.value]: '0032',
    },
    {
        [ARRAY_MAP_KEYS.text]: INTERNAL_STATUS_FILTER_LANGUAGE_KEYS['0050'],
        [ARRAY_MAP_KEYS.value]: '0050',
    },
];

//Form Schema
const SEARCH_FORM_SCHEMA_KEYS = {
    PHONE_NUMBER_INPUT: 'PHONE_NUMBER_INPUT',
    BUS_OPERATING_NAME_INPUT: 'BUS_OPERATING_NAME_INPUT',
    ACTION_INDICATOR_INPUT: 'ACTION_INDICATOR_INPUT',
    REJECTS_INPUT: 'REJECTS_INPUT',
    BRG_INDICATOR_INPUT: 'BRG_INDICATOR_INPUT',
    INTERNAL_STATUS_INPUT: 'INTERNAL_STATUS',
    FILE_INPUT: 'FILE_INPUT',
    PROVINCE_INPUT: 'PROVINCE_INPUT',
    START_DATE_INPUT: 'START_DATE_INPUT',
    END_DATE_INPUT: 'END_DATE_INPUT',
};

const SEARCH_FORM_SCHEMA = {
    [SEARCH_FORM_SCHEMA_KEYS.PHONE_NUMBER_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.BUS_OPERATING_NAME_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.FILE_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.ACTION_INDICATOR_INPUT]:
        getActionIndicatorFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT]:
        getRejectsFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT]:
        getInternalStatusFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions[ZERO_INDEX].value,
    [SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT]: '',
};

const Search = () => {
    const {t} = useTranslation();

    const [searchFilterQuery, setSearchFilterQuery] =
        useState(SEARCH_FORM_SCHEMA);

    const [filterSchema, setFilterSchema] = useState([]);

    useEffect(() => {
        if (
            checkIfArrayExists(getProvinceFilterOptions) &&
            checkIfArrayExists(getBrgIndicatorFilterOptions) &&
            checkIfArrayExists(getRejectsFilterOptions) &&
            checkIfArrayExists(getActionIndicatorFilterOptions) &&
            checkIfArrayExists(getInternalStatusFilterOptions)
        ) {
            const localFilterSchema = [
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        PHONE_NUMBER_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.PHONE_NUMBER_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        BUS_OPERATING_NAME_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.BUS_OPERATING_NAME_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        ACTION_INDICATOR_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.OPTIONS]: getActionIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.ACTION_INDICATOR_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: REJECTS_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.OPTIONS]: getRejectsFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: BRG_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.OPTIONS]: getBrgIndicatorFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT,
                },

                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        INTERNAL_STATUS_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.OPTIONS]: getInternalStatusFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        FILE_SEARCH_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.FILE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
                    [ARRAY_MAP_KEYS.label]: PROVINCE_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.OPTIONS]: getProvinceFilterOptions,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                    [ARRAY_MAP_KEYS.label]:
                        START_DATE_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT,
                },
                {
                    [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
                    [ARRAY_MAP_KEYS.label]: END_DATE_FILTER_LANGUAGE_KEYS.LABEL,
                    [ARRAY_MAP_KEYS.ON_CHANGE]:
                        SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT,
                },
            ];

            setFilterSchema(localFilterSchema);
        }
    }, [
        getProvinceFilterOptions,
        getBrgIndicatorFilterOptions,
        getRejectsFilterOptions,
        getActionIndicatorFilterOptions,
        getInternalStatusFilterOptions,
    ]);

    const handleSearchInputChange = (searchFilterKey, searchVal) => {
        setSearchFilterQuery((prev) => ({
            ...prev,
            [searchFilterKey]: searchVal,
        }));
    };

    useEffect(() => {
        console.log(searchFilterQuery);
    }, [searchFilterQuery]);

    // search onClick handler
    const searchClickHandler = (e) => {
        e.preventDefault();
        alert('search query');
    };
    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGridRow>
                <BlifFlexGridCol>
                    <BlifTypography variant={{size: 'h2'}}>
                        {t(SEARCH_LANGUAGE_KEYS.SEARCH_HEADING)}
                    </BlifTypography>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
            <BlifSpacer space={2} />
            <BlifFlexGridRow verticalAlign="middle" horizontalAlign="center">
                <BlifFlexGridCol>
                    <BlifBox
                        variant={{background: 'light'}}
                        bottom={{md: 1}}
                        left={{md: 1}}
                        right={{md: 7}}
                        top={{md: 1}}
                        flex={1}>
                        <FiltersView
                            heading={BUTTON_TITLE.SEARCH_BUTTON_TITLE}
                            clickHandler={searchClickHandler}
                            schema={filterSchema}
                            handleInputChange={handleSearchInputChange}
                        />
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifFlexGridRow>
        </BlifFlexGrid>
    );
};

export default Search;
