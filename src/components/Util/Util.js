import {Button} from '@telus-uds/ds-allium';
import React from 'react';
import {isEnglish} from '../../Utils/constants';

export const CorpModifyButton = ({onf = (f) => f}, buttonName = '') => {
    function handleClick() {
        let rtn = onf();
        if (rtn && rtn != null) {
            alert(rtn);
            //history.push("/ivs/corp/orders/view?id=" + rtn);
        }
    }

    return <Button onClick={() => handleClick()}>{buttonName}</Button>;
};

export const getCorporationTypeOptions = () => {
    let options = [
        {text: 'WHOLESALE', value: 'W'},
        {text: 'RETAIL', value: 'R'},
    ];
    return options;
};

export const getAccountPrimeOptions = () => {
    let options = [
        {text: 'AB', value: 'AB'},
        {text: 'BC', value: 'BC'},
    ];
    return options;
};

export const getReportPeriodOptions = () => {
    let options = [
        // { text: '', value: null },
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'},
        {text: '4', value: '4'},
        {text: '5', value: '5'},
        {text: '6', value: '6'},
        {text: '7', value: '7'},
        {text: '8', value: '8'},
        {text: '9', value: '9'},
        {text: '10', value: '10'},
        {text: '11', value: '11'},
        {text: '12', value: '12'},
        {text: '13', value: '13'},
        {text: '14', value: '14'},
        {text: '15', value: '15'},
        {text: '16', value: '16'},
        {text: '17', value: '17'},
        {text: '18', value: '18'},
        {text: '19', value: '19'},
        {text: '20', value: '20'},
        {text: '21', value: '21'},
        {text: '22', value: '22'},
        {text: '23', value: '23'},
        {text: '24', value: '24'},
        {text: '25', value: '25'},
        {text: '26', value: '26'},
        {text: '27', value: '27'},
        {text: '28', value: '28'},
        {text: 'Last Day', value: 'Last Day'},
    ];
    return options;
};

export const getNumbersSequenceSelectOptions = ({
    range = [1, 24],
    addEmptyOption,
}) => {
    const [from, to] = range;
    const optionsCount = to - from + 1;

    let iterator = from;
    const options = [...Array(optionsCount)].map(() => {
        const value = String(iterator++);

        return {text: value, value};
    });

    return addEmptyOption ? [{text: '', value: ''}, ...options] : options;
};

export const getNumericOptions = (len) => {
    const loptions = [...Array(len)].map((item, index) => ({
        text: String(index + 1),
        value: String(index + 1),
    }));
    let optEmpty = {text: '', value: ''};
    loptions.unshift(optEmpty);
    return loptions;
};

export const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};

export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export const searchValueTrim = (value) => {
    return isEmpty(value) ? undefined : value.trim();
};

export const ORDER_STATE_HELD = 'held';
export const ORDER_STATE_REJECTED = 'rejected';
export const ORDER_STATE_CANCELLED = 'cancelled';
export const ORDER_STATE_COMPLETED = 'completed';
export const ORDER_STATE_INPROGRESS = 'inProgress';
export const ORDER_STATE_PENDING = 'pending';
export const ORDER_STATE_FAILED = 'failed';

const orderStates = {};
orderStates[ORDER_STATE_HELD] = 'ivs.order.status.held';
orderStates[ORDER_STATE_REJECTED] = 'ivs.order.status.rejected';
orderStates[ORDER_STATE_CANCELLED] = 'ivs.order.status.cancelled';
orderStates[ORDER_STATE_COMPLETED] = 'ivs.order.status.completed';
orderStates[ORDER_STATE_INPROGRESS] = 'ivs.order.status.inProgress';
orderStates[ORDER_STATE_PENDING] = 'ivs.order.status.pending';
orderStates[ORDER_STATE_FAILED] = 'ivs.order.status.failed';

export const getGuiOrderState = (state) => {
    return isNullOrUndefined(orderStates[state]) ? '' : orderStates[state];
};

const guiOrderTransactionType = {
    add: 'ivs.order.tran.add',
    modify: 'ivs.order.tran.modify',
    delete: 'ivs.order.tran.delete',
    validate: 'ivs.order.tran.validate',
    activate: 'ivs.order.tran.activate',
};

export const getGuiOrderTransactionType = (transactionType) => {
    return isNullOrUndefined(guiOrderTransactionType[transactionType])
        ? ''
        : guiOrderTransactionType[transactionType];
};

export const ORDER_TRANS_ADD = 'INSERT';
export const ORDER_TRANS_DELETE = 'DELETE';
export const ORDER_TRANS_UPDATE = 'UPDATE';

const orderTrans = {};
orderTrans[ORDER_TRANS_ADD] = 'ivs.order.tran.add';
orderTrans[ORDER_TRANS_DELETE] = 'ivs.order.tran.delete';
orderTrans[ORDER_TRANS_UPDATE] = 'ivs.order.tran.modify';

export const getCorpGuiOrderTrans = (trans) => {
    return isNullOrUndefined(orderTrans[trans]) ? '' : orderTrans[trans];
};

const telNoRegex = /^(\d{3})(\d{3})(\d{4})$/;

export const formatTelephoneNumber = (telNo) => {
    let match = String(telNo).match(telNoRegex);

    let formattedNumber = telNo;
    if (match) {
        formattedNumber = match[1] + '-' + match[2] + '-' + match[3];
    }

    return formattedNumber;
};

export function isValueInRequest(value) {
    return (
        value !== 'null' && value !== 'undefined' && !isNullOrUndefined(value)
    );
}

export function isAuthenticated(value) {
    return value === 'true';
}

export function compareAscending(item1, item2) {
    return item1 > item2 ? 1 : -1;
}

export function compareDescending(item1, item2) {
    return item1 > item2 ? -1 : 1;
}

export function getLanguageCode(lang) {
    return isEnglish(lang) ? 'en' : 'fr';
}

export function compareAscendingCaseInsensitive(item1, item2) {
    if (isNullOrUndefined(item1)) return -1;
    if (isNullOrUndefined(item2)) return 1;
    return (item1 + '').toLowerCase() > (item2 + '').toLowerCase() ? 1 : -1;
}

export function isNotBlankArray(obj) {
    return obj && Array.isArray(obj) && obj.length > 0;
}

export function mapToSelectOptions(arr) {
    return arr && arr.length
        ? arr.map(({text, value}) => ({
              text: String(text),
              value: String(value),
          }))
        : [];
}

export function getLocalStoragePageSize() {
    return localStorage.getItem('pageSize');
}

export function setLocalStoragePageSize(newPageSize) {
    localStorage.setItem('pageSize', newPageSize);
}
