import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../utils/commonKeys';
import {FiltersView} from '../Common/Filters/Filters';

const PROVINCE_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'QC', value: 'QC'},
];

const BRG_INDICATOR_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Business', value: 'Business'},
    {text: 'Residential', value: 'Residential'},
];

const REJECTS_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Only Rejects', value: 'Only Rejects'},
    {text: 'No Rejects', value: 'No Rejects'},
];

const CLEC_FILTER_OPTIONS = [
    {text: 'ALL', value: 'ALL'},

    {text: 'FIDO', value: 'FIDO'},
];

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
