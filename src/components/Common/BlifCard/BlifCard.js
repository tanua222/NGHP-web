import React from 'react';
import {Card} from '@telus-uds/ds-allium';

function BlifCard({
    children,
    footer,
    footerPadding = {},
    fullBleedContent = {},
    fullBleedImage = {},
    tokens = {},
    variant = {},
}) {
    return (
        <Card
            footer={footer}
            footerPadding={{
                paddingBottom: footerPadding.paddingBottom,
                paddingLeft: footerPadding.paddingLeft,
                paddingRight: footerPadding.paddingRight,
                paddingTop: footerPadding.paddingTop,
            }}
            fullBleedContent={{
                alt: fullBleedContent.alt,
                position: fullBleedImage.position,
                align: fullBleedContent.align,
                src: fullBleedContent.src,
                content: fullBleedContent.content,
            }}
            fullBleedImage={{
                alt: fullBleedImage.alt,
                position: fullBleedImage.position,
                align: fullBleedImage.align,
                src: fullBleedImage.src,
            }}
            tokens={{
                paddingBottom: tokens.paddingBottom,
                paddingLeft: tokens.paddingLeft,
                paddingRight: tokens.paddingRight,
                paddingTop: tokens.paddingTop,
            }}
            variant={{padding: variant.padding}}>
            {children}
        </Card>
    );
}

export default BlifCard;
