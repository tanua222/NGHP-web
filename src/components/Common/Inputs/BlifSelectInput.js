import React, {useState, useEffect} from 'react';
import validate from '../../../Validations/FieldValidation';
import {useTranslation} from 'react-i18next';
import {Select} from '@telus-uds/ds-allium';

const BlifSelectInput = React.forwardRef((props, ref) => {
    const {
        label,
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
        <React.Fragment>
            <Select
                label={label || ' '}
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
        </React.Fragment>
    );
});

const IvsSelectGroup = ({group}) => (
    <Select.Group>
        <optgroup label={group.text}>
            {group.options &&
                group.options.map((option, index) => (
                    <IvsSelectOption option={option} key={index} />
                ))}
        </optgroup>
    </Select.Group>
);

const IvsSelectOption = ({option}) => (
    <Select.Item value={option.value}>{option.text}</Select.Item>
);

BlifSelectInput.displayName = 'BlifSelectInput';
export default BlifSelectInput;
