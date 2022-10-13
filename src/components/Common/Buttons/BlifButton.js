import {Button} from '@telus-uds/ds-allium';

const BlifButton = ({children, onPress, variant = {}, tokens}) => {
    return (
        <Button
            variant={{
                priority: variant.priority || 'high',
                size: variant.size || 'regular',
                danger: variant.danger,
                inverse: variant.inverse,
            }}
            tokens={tokens}
            onPress={onPress}>
            {children}
        </Button>
    );
};

export default BlifButton;
