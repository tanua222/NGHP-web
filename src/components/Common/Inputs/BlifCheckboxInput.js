import React, {useEffect, useState} from 'react';
import {Checkbox} from '@telus-uds/ds-allium';
//import useUnsavedChanges from '../../../hooks/useUnsavedChanges';
import {isNullOrUndefined} from '../../../utils/helperFunctions';

function BlifCheckboxInput({
    checked = false,
    defaultChecked = false,
    error = false,
    feedback,
    id,
    inactive,
    label = '',
    name,
    onChange,
    tokens,
    value = '',
    variant,
    disabled,
    accessibilityLabel,
}) {
    //const {setDirty} = useUnsavedChanges();
    const [localInactive, setLocalInactive] = useState();

    const handleUpdateValueEvent = (event) => {
        if (localInactive) return;
        onChange(event);
    };

    useEffect(() => {
        // keeping disabled to support existing IvsCheckBoxInput contract
        const lInActive = isNullOrUndefined(inactive)
            ? isNullOrUndefined(disabled)
                ? undefined
                : disabled
            : inactive;
        setLocalInactive(lInActive);
    }, [inactive, disabled]);

    return (
        <Checkbox
            checked={checked}
            defaultChecked={defaultChecked}
            error={error}
            feedback={feedback}
            id={id}
            inactive={localInactive}
            label={label}
            name={name}
            onChange={(value, event) => {
                // existing checkbox/ivscheckboxinput expects target.checked in the event object
                const valueEvent = {target: {checked: value}};
                onChange && handleUpdateValueEvent(valueEvent);
            }}
            tokens={tokens}
            value={value}
            variant={variant}
            accessibilityLabel={accessibilityLabel}
        />
    );
}

export default BlifCheckboxInput;
