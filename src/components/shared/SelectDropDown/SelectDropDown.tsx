import React from 'react';
import {useState, useEffect} from 'react';
import './SelectDropDown.scss';

export enum DROPDOWN_KEYS {
    VALUE = 'value',
    LABEL = 'label',
}

interface DROPDOWN_OBJECT_INTERFACE {
    [DROPDOWN_KEYS.LABEL]: string;
    [DROPDOWN_KEYS.VALUE]: any;
}
interface DROPDOWN_INTERFACE {
    options: Array<DROPDOWN_OBJECT_INTERFACE>;
    getState: object;
    setState: any;
}

const SelectDropDown = ({options, getState, setState}: DROPDOWN_INTERFACE) => {
    const handleChange = (event: any) => {
        const eventValue = event?.target?.value;
        if (!eventValue) {
            setState({});
        }
        const getValueObject = options?.find(
            (item) => item[DROPDOWN_KEYS.VALUE] === eventValue,
        );

        if (getValueObject) {
            setState(getValueObject);
        }
    };
    return (
        <div>
            <select
                onChange={handleChange}
                defaultValue={'DEFAULT'}
                className="SelectDropDown-select">
                <option value="DEFAULT" disabled>
                    Select
                </option>
                {options &&
                    options.map((item, index) => (
                        <option value={item[DROPDOWN_KEYS.VALUE]} key={index}>
                            {item[DROPDOWN_KEYS.LABEL]}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default SelectDropDown;
