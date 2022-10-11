import {Box} from '@telus-uds/ds-allium';
import React from 'react';
import BlifStackView from '../BlifStackView/BlifStackView';

/**
 * Component-wrapper for adding space around the content
 *
 * Recommendations:
 *
 * Acceptable values for Size type you can see at https://telus.github.io/allium-design-system/components/palette/sizing#responsive-spacing
 *
 * "inset" property was renamed to "space", so it's more preferable to use "space" than legacy
 *
 * Consider using Allium-styled inline children rendering instead of legacy combination of space and between properties, please
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
 * @param {Size} [space] - adds space at all four sides (top, left, bottom, right)
 *
 * @param {Number} [flex] - used for adjusting flex property. Please see https://reactnative.dev/docs/flexbox#flex to check available values
 *
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'article' | 'aside' | 'blockquote' | 'footer' | 'figure' | 'form' | 'header' | 'ul' | 'li' | 'main' | 'nav' | 'section' | 'label')} [tag] - renders Box as a semanthic HTML element. DOESN'T changes styles, only HTML tag
 *
 * @param {Object} [tokens] - used for custom CSS styling, please see https://telus.github.io/allium-design-system/components/components/box#tokens to see the full list of tokens available for Box
 *
 * @param {Object} [variant] - used for adjusting box background type. https://telus.github.io/allium-design-system/components/components/box#variants to check all options
 *
 * @param {Size} [inset] - legacy property for adding space at all four sides (top, left, bottom, right). Please consider using "space" property instead
 *
 * @param {boolean} [inline] - for making children rendering inline
 *
 * @param {Size} [between] - adds spacing between rendered children
 *
 * @param {(React.ReactNode | String)} children - would be rendered inside of <Box> component. Mandatory
 *
 */

const BlifBox = ({
    scroll,
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
    inline,
    between,
    inset,
    viewTokens,
    children,
    direction,
}) => {
    return (
        <Box
            vertical={vertical}
            horizontal={horizontal}
            space={space || inset}
            flex={flex}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            variant={variant}
            tokens={tokens}
            scroll={scroll}>
            <BlifStackView
                accessibilityLiveRegion="polite"
                space={between}
                direction={inline ? 'row' : direction || 'column'}
                tokens={viewTokens}>
                {children}
            </BlifStackView>
        </Box>
    );
};

export default BlifBox;
