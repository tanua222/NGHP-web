import React from 'react';
import {Button} from '@telus-uds/ds-allium';

const BlifButton = ({children, onClick, variant = {}, tokens}) => {
    return (
        <Button
            variant={{
                priority: variant.priority || 'high',
                size: variant.size || 'regular',
                danger: variant.danger,
                inverse: variant.inverse,
            }}
            tokens={tokens}
            onPress={onClick}>
            {children}
        </Button>
    );
};

export default BlifButton;
