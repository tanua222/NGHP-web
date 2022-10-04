import {Spinner} from '@telus-uds/ds-allium';

const BlifSpinner = ({label, show, size, fullScreen, children}) => {
    return (
        <Spinner label={label} show={show} fullScreen={fullScreen} size={size}>
            {children}
        </Spinner>
    );
};

export default BlifSpinner;
