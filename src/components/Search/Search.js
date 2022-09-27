import React, {useState, useEffect} from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import BlifStackView from '../Common/BlifStackView/BlifStackView';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';
import BlifBox from '../Common/Box/BlifBox';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {Spacer} from '@telus-uds/ds-allium';
import {
    getRejectsFilterOption,
    getBrgIndicatorFilterOptions,
    getProvinceFilterOptions,
} from '../PreCheck/PreCheck';

// Options
export const getActionIndicatorFilterOption = () => {
    let ACTION_INDICATOR_FILTER_OPTIONS = [
        {text: 'ALL', value: 'ALL'},
        {text: 'A', value: 'A'},
        {text: 'O/I', value: 'O/I'},
        {text: 'D', value: 'D'},
    ];
    return ACTION_INDICATOR_FILTER_OPTIONS;
};

export const getInternalStatusFilterOptions = () => {
    let INTERNAL_STATUS_FILTER_OPTIONS = [
        {text: 'ALL', value: 'ALL'},
        {text: '0000', value: 'NEW'},
        {text: '0001', value: 'Awaiting manual pre-check'},
        {text: '0002', value: 'Awaiting BLIF to Direction automation'},
        {text: '0010', value: 'Locked by automation'},
        {text: '0015', value: 'Failed BLIF to Direction automation'},
        {text: '0031', value: 'Rejected'},
        {text: '0032', value: 'Accepted'},
        {text: '0050', value: 'Completed'},
    ];
    return INTERNAL_STATUS_FILTER_OPTIONS;
};

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
        getActionIndicatorFilterOption()[0].value,
    [SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT]: getRejectsFilterOption()[0].value,
    [SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT]:
        getBrgIndicatorFilterOptions()[0].value,
    [SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT]:
        getInternalStatusFilterOptions()[0].value,
    [SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT]:
        getProvinceFilterOptions()[0].value,
    [SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT]: '',
    [SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT]: '',
};

// Search Filter Schema
const filterSchema = [
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Phone Number',
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.PHONE_NUMBER_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Bus Operating Name',
        [ARRAY_MAP_KEYS.ON_CHANGE]:
            SEARCH_FORM_SCHEMA_KEYS.BUS_OPERATING_NAME_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Action Indicator',
        [ARRAY_MAP_KEYS.OPTIONS]: getActionIndicatorFilterOption(),
        [ARRAY_MAP_KEYS.ON_CHANGE]:
            SEARCH_FORM_SCHEMA_KEYS.ACTION_INDICATOR_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Rejects',
        [ARRAY_MAP_KEYS.OPTIONS]: getRejectsFilterOption(),
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.REJECTS_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'BRG Indicator',
        [ARRAY_MAP_KEYS.OPTIONS]: getBrgIndicatorFilterOptions(),
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.BRG_INDICATOR_INPUT,
    },

    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Internal Status',
        [ARRAY_MAP_KEYS.OPTIONS]: getInternalStatusFilterOptions(),
        [ARRAY_MAP_KEYS.ON_CHANGE]:
            SEARCH_FORM_SCHEMA_KEYS.INTERNAL_STATUS_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'File',
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.FILE_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Province',
        [ARRAY_MAP_KEYS.OPTIONS]: getProvinceFilterOptions(),
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.PROVINCE_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Start Date',
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.START_DATE_INPUT,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.DATE_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'End Date',
        [ARRAY_MAP_KEYS.ON_CHANGE]: SEARCH_FORM_SCHEMA_KEYS.END_DATE_INPUT,
    },
];

const Search = () => {
    const [searchFilterQuery, setSearchFilterQuery] =
        useState(SEARCH_FORM_SCHEMA);

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
            <BlifStackView tokens={{justifyContent: 'center'}}>
                <BlifFlexGridCol xs={12} lg={10}>
                    <BlifFlexGridRow>
                        <BlifTypography variant={{size: 'h2'}}>
                            Pre-Check
                        </BlifTypography>
                    </BlifFlexGridRow>
                    <Spacer space={1} />
                    <BlifBox variant={{background: 'light'}} flex={1}>
                        <BlifFlexGridRow
                            verticalAlign="middle"
                            horizontalAlign="center">
                            <FiltersView
                                clickHandler={searchClickHandler}
                                schema={filterSchema}
                                handleInputChange={handleSearchInputChange}
                            />
                        </BlifFlexGridRow>
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifStackView>
        </BlifFlexGrid>
    );
};

export default Search;
