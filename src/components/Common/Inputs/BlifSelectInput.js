import React, {useState, useEffect} from 'react';
import validate from '../../../Validations/FieldValidation';
import {useTranslation} from 'react-i18next';
import {Select} from '@telus-uds/ds-allium';

const BlifSelectInput = (props) => {
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
                label={t(label) || ''}
                hint={hint}
                hintPosition={hintPosition}
                id={id}
                value={value || ''}
                placeholder={placeholder}
                initialValue={defaultValue}
                name={name}
                feedback={error && t(error)}
                validation={error && 'error'}
                onChange={(_, event) => {
                    let value = event.target.value;
                    onChange && onChange(value);
                    setLocalVal(value);
                }}
                onBlur={validateFn}
                inactive={disabled}>
                {options &&
                    options.map((option, index) =>
                        option.options ? (
                            <IvsSelectGroup group={option} key={index} t={t} />
                        ) : (
                            <Select.Item key={index} value={option.value}>
                                {t(option.text)}
                            </Select.Item>
                        ),
                    )}
            </Select>
        </React.Fragment>
    );
};

const IvsSelectGroup = ({group, t}) => (
    <Select.Group>
        <optgroup label={group.text}>
            {group.options &&
                group.options.map((option, index) => (
                    <Select.Item key={index} value={option.value}>
                        {t(option.text)}
                    </Select.Item>
                ))}
        </optgroup>
    </Select.Group>
);

BlifSelectInput.displayName = 'BlifSelectInput';
export default BlifSelectInput;
