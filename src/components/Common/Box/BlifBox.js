import {Box} from '@telus-uds/ds-allium';
import React from 'react';

/**
 * Component-wrapper for adding space around the content
 *
 * Recommendations:
 *
 * Acceptable values for Size type you can see at https://telus.github.io/allium-design-system/components/palette/sizing#responsive-spacing
 *
 * PLEASE pay attention! <Box between={2}> will not add space between children of Box, this property is not longer supported.
 * Instead of using "between" property, please add additional <IvsStackView space={2}> wrapper inside of box and around of content
 * For example next code pattern will render two buttons with space between of them:
 *
 * @example
 * <IvsBox>
 *   <IvsStackView space={2}>
 *     <IvsButton />
 *     <IvsButton />
 *   </IvsStackView>
 * </IvsBox>
 *
 * @param {Size} [top] - adds space in top of content
 *
 * @param {Size} [left] - adds space in left of content
 *
 * @param {Size} [bottom] - adds space in bottom of content
 *
 * @param {Size} [right] - adds space in right of content
 *
 * @param {Size} [vertical] - adds vertical (top and bottom combination) space to content
 *
 * @param {Size} [horizontal] - adds horizontal (left and right combination) space to content
 *
 * @param {Size} [space] - add space at all for sides (top, left, bottom, right)
 *
 * @param {Number} [flex] - used for adjusting flex property. Please see https://reactnative.dev/docs/flexbox#flex to check available values
 *
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'article' | 'aside' | 'blockquote' | 'footer' | 'figure' | 'form' | 'header' | 'ul' | 'li' | 'main' | 'nav' | 'section' | 'label'} [tag] - renders Box as a semanthic HTML element. DOESN'T changes styles, only HTML tag
 *
 * @param {Object} [tokens] - used for custom CSS styling, please see https://telus.github.io/allium-design-system/components/components/box#tokens to see the full list of tokens available for Box
 *
 * @param {Object} [variant] - used for adjusting box background type. https://telus.github.io/allium-design-system/components/components/box#variants to check all options
 *
 * @param {(React.ReactNode | String)} children - would be rendered inside of <Box> component. Mandatory
 *
 */

const BlifBox = ({
    vertical,
    horizontal,
    space,
    flex,
    left,
    right,
    bottom,
    top,
    tokens,
    variant,
    children,
}) => {
    return (
        <Box
            vertical={vertical}
            horizontal={horizontal}
            space={space}
            flex={flex}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            variant={variant}
            tokens={tokens}>
            {children}
        </Box>
    );
};

export default BlifBox;
