import React from 'react';
import {Typography} from '@telus-uds/ds-allium';

/**
 * Component for rendering custom text content.
 *
 * Recommendations:
 *
 * Use <IvsTypography> instead of legacy <Text> to make a simple text
 * Use <IvsTypography variant={{ bold: true }}> instead of legacy <Strong> or to just make a bold text
 * Use <IvsTypography variant={{ inverse: true }}> to create white text on dark background. Please take care, it should be INVERSE, not INVERT what is a legacy of TDS
 * Use <IvsTypography heading="h1" variant={{ size: "h1"}}> instead of <Heading level="h1">
 *
 * @param {('auto' | 'left' | 'right' | 'center' | 'justify')} [align] - aligns text into the text block
 *
 * @param {boolean} [block] - makes text wrapper behave like block element
 *
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')} [heading] - renders text as a semanthic heading element. DOESN'T changes styles, only HTML tag. Should not be used with tag property together
 *
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'code' | 'del' | 'em' | 'ins' | 'li' | 'strong' | 'label')} [tag] - same as heading property but with more variants
 *
 * @param {Object} [tokens] - used for custom CSS styling, please see https://telus.github.io/allium-design-system/components/components/typography#tokens to see the full list of tokens available for Typography
 *
 * @param {Object} [variant] - used for adjusting font size, colour, boldness or make text white for dark backgrounds. Please see https://telus.github.io/allium-design-system/components/components/typography#variants to check all options
 *
 * @param {boolean} [bold] - TDS legacy analogue of variant bold parameter. Better to use <IvsTypography variant={{ bold: true }}> instead
 *
 * @param {boolean} [invert] - TDS legacy analogue of variant inverse parameter. Better to use <IvsTypography variant={{ inverse: true }}> instead
 *
 */

const BlifTypography = ({
    block,
    align,
    heading,
    tag,
    tokens,
    variant = {},
    bold,
    invert,
    children,
}) => {
    return (
        <Typography
            block={Boolean(block)}
            align={align}
            heading={heading}
            tag={tag}
            tokens={tokens}
            variant={{bold, inverse: invert, ...(variant ? variant : {})}}>
            {children}
        </Typography>
    );
};

export default BlifTypography;
