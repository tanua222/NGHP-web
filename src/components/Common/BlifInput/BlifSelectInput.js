import React, {useState, useEffect, useRef} from 'react';
import validate from '../../../Validations/FieldValidation';
import {useTranslation} from 'react-i18next';
import {Select} from '@telus-uds/ds-allium';
import './BlifSelectInput.scss';

const BlifSelectInput = (props) => {
    const {
        label,
        smallInputHeight,
        smallInputWidth,
        hint,
        hintPosition,
        id,
        value,
        onChange,
        options,
        defaultValue,
        placeholder,
        validationRule,
        triggerValidate,
        validationResult,
        stopValidate,
        name,
        disabled,
    } = props;
    const {t} = useTranslation();
    const [error, setError] = useState();
    const [localVal, setLocalVal] = useState();
    const ref = useRef();

    const validateFn = () => {
        const result = validate(validationRule, localVal);
        if (!result.success) {
            setError(result.error);
            triggerValidate && validationResult(false);
        } else {
            setError();
            triggerValidate && validationResult(true);
        }
        stopValidate && stopValidate();
    };

    const updateValue = (event) => {
        setLocalVal(event.target.value);
    };

    useEffect(() => {
        if (defaultValue) setLocalVal(defaultValue);
    }, []);

    useEffect(() => {
        setLocalVal(value || '');
        setError();
    }, [value]);

    useEffect(() => {
        if (triggerValidate) validateFn();
    }, [triggerValidate]);

    return (
        <div
            ref={ref}
            className={`${smallInputHeight && 'Select-input-small-height'}
            ${smallInputWidth && 'Select-input-small-width'}
            Select-input-BlifSelectInput`}>
            <Select
                hint={hint}
                hintPosition={hintPosition}
                id={id}
                value={value || ''}
                ref={ref}
                placeholder={placeholder}
                initialValue={defaultValue}
                name={name}
                feedback={error && t(error)}
                validation={error && 'error'}
                onChange={(_, event) => {
                    onChange && onChange(event);
                    updateValue(event);
                }}
                onBlur={validateFn}
                inactive={disabled}>
                {options &&
                    options.map((option, index) =>
                        option.options ? (
                            <IvsSelectGroup group={option} key={index} />
                        ) : (
                            <IvsSelectOption option={option} key={index} />
                        ),
                    )}
            </Select>
        </div>
    );
};

const IvsSelectGroup = ({group}) => (
    <Select.Group label={group.text}>
        {group.options &&
            group.options.map((option, index) => (
                <IvsSelectOption option={option} key={index} />
            ))}
    </Select.Group>
);

const IvsSelectOption = ({option}) => (
    <Select.Item value={option.value}>{option.text}</Select.Item>
);

export default BlifSelectInput;
