import React from 'react';
import {TextInput} from '@telus-uds/ds-allium';
import {useTranslation} from 'react-i18next';

const BlifTextInput = ({
    label,
    hint,
    hintPosition,
    tooltip,
    tokens = {},
    variant,
    value,
    readOnly,
    onChange,
    initialValue,
    inactive,
    children,
}) => {
    const {t} = useTranslation();
    const TEXT_INPUT_TOKENS = {
        // borderColor: '#66afe9',

        ...tokens,
    };
    return (
        <TextInput
            label={t(label) || ''}
            hint={hint}
            hintPosition={hintPosition}
            tooltip={tooltip}
            tokens={TEXT_INPUT_TOKENS}
            variant={variant}
            value={value}
            readOnly={readOnly}
            onChange={onChange}
            initialValue={initialValue}
            inactive={inactive}>
            {children}
        </TextInput>
    );
};

export default BlifTextInput;
