import {Icon} from '@telus-uds/ds-allium';
import {
    CaretDown,
    CaretUp,
    Diagram,
    Diamond,
    Refresh,
} from '@telus-uds/palette-allium/build/rn/icons';

//TODO Show what values are currently supported. UseEffect as icon values can change.
const BlifDecorativeIcon = ({
    icon,
    accessibilityLabel,
    scalesWithText,
    variant = {},
    tokens = {},
}) => {
    switch (icon) {
        case 'Refresh':
            icon = Refresh;
            break;
        case 'Diagram':
            icon = Diagram;
            break;
        case 'Diamond':
            icon = Diamond;
            break;
        case 'CaretDown':
            icon = CaretDown;
            break;
        case 'CaretUp':
            icon = CaretUp;
            break;
        default:
            break;
    }

    return (
        <Icon
            icon={icon}
            accessibilityLabel={accessibilityLabel}
            scalesWithText={scalesWithText}
            variant={variant}
            tokens={tokens}
        />
    );
};

export default BlifDecorativeIcon;
