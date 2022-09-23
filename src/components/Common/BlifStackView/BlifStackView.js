import React from 'react';
import {StackView} from '@telus-uds/ds-allium';

function BlifStackView({
    children,
    space = 1,
    direction = 'row',
    divider,
    tag,
    tokens = {},
}) {
    return (
        <StackView
            space={space}
            direction={direction}
            divider={divider}
            tag={tag}
            tokens={tokens}>
            {children}
        </StackView>
    );
}

export default BlifStackView;
