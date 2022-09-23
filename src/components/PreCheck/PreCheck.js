import React, {useState} from 'react';
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

// OPTIONS
export const PROVINCE_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'QC', value: 'QC'},
];

export const BRG_INDICATOR_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Business', value: 'Business'},
    {text: 'Residential', value: 'Residential'},
];

export const REJECTS_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Only Rejects', value: 'Only Rejects'},
    {text: 'No Rejects', value: 'No Rejects'},
];

export const CLEC_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},

    {text: 'FIDO', value: 'FIDO'},
];

//Form Schema
const FORM_SCHEMA_KEYS = {
    FILE_INPUT: 'FILE_INPUT',
};

const FORM_SCHMEA = {
    [FORM_SCHEMA_KEYS.FILE_INPUT]: '',
};

//OPTIONS

const FILTER_SCHEMA = [
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.TEXT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'File',
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Province',
        [ARRAY_MAP_KEYS.OPTIONS]: PROVINCE_FILTER_OPTIONS,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'CLEC',
        [ARRAY_MAP_KEYS.OPTIONS]: CLEC_FILTER_OPTIONS,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'BRG Indicator',
        [ARRAY_MAP_KEYS.OPTIONS]: BRG_INDICATOR_FILTER_OPTIONS,
    },
    {
        [ARRAY_MAP_KEYS.FILTER_TYPE]: FILTER_TYPES.SELECT_INPUT,
        [ARRAY_MAP_KEYS.LABEL]: 'Rejects',
        [ARRAY_MAP_KEYS.OPTIONS]: REJECTS_FILTER_OPTIONS,
    },
];

// search onClick handler
const clickHandler = (e) => {
    e.preventDefault();
    alert('Search Query');
};

// PreCheck Component
const PreCheck = () => {
    const [filterQuery, setFilterQuery] = useState(FORM_SCHMEA);

    const handleSelectInputChange = (val, filterKey) => {
        setFilterQuery((prev) => ({...prev, [filterKey]: val}));
    };

    return (
        <BlifFlexGrid gutter={false}>
            <BlifStackView tokens={{justifyContent: 'center'}}>
                <BlifFlexGridCol xs={12} lg={10} verticalAlign="center">
                    <BlifFlexGridRow>
                        <BlifTypography variant={{size: 'h2'}}>
                            Pre-Check
                        </BlifTypography>
                    </BlifFlexGridRow>
                    <Spacer space={1} />
                    <BlifBox variant={{background: 'light'}} flex={1}>
                        <BlifFlexGridRow
                            verticalAlign="center"
                            horizontalAlign="center">
                            <FiltersView
                                clickHandler={clickHandler}
                                schema={FILTER_SCHEMA}
                            />
                        </BlifFlexGridRow>
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifStackView>
        </BlifFlexGrid>
    );
};

export default PreCheck;
