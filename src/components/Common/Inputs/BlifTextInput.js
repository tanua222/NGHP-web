import React from 'react';
import {TextInput} from '@telus-uds/ds-allium';

const BlifTextInput = ({
    label,
    hint,
    hintPosition,
    tooltip,
    tokens,
    variant,
    value,
    readOnly,
    onChange,
    initialValue,
    inactive,
    children,
}) => {
    return (
        <TextInput
            label={label}
            hint={hint}
            hintPosition={hintPosition}
            tooltip={tooltip}
            tokens={tokens}
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
