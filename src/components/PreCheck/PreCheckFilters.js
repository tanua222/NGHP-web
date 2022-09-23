import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';

import {
    PROVINCE_FILTER_OPTIONS,
    BRG_INDICATOR_FILTER_OPTIONS,
    REJECTS_FILTER_OPTIONS,
    CLEC_FILTER_OPTIONS,
} from './PreCheck';

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

//Component
const PreCheckFilters = ({clickHandler}) => {
    return <FiltersView clickHandler={clickHandler} schema={FILTER_SCHEMA} />;
};

export default PreCheckFilters;
