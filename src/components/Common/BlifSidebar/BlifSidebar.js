import BlifBox from '../Box/BlifBox';
import BlifTypography from '../BlifTypography/BlifTypography';
import BlifStackView from '../BlifStackView/BlifStackView';
import {IconButton} from '@telus-uds/ds-allium';
import './BlifSidebar.scss';

const BlifSidebar = ({title, onClose, children}) => {
    return (
        <div className="blif-sidebar">
            <BlifBox flex={1} horizontal={4} vertical={4}>
                <BlifStackView tokens={{justifyContent: 'space-between'}}>
                    <BlifTypography variant={{size: 'h2'}}>
                        {title}
                    </BlifTypography>
                    <IconButton
                        iconName="Close"
                        onPress={() => {
                            onClose && onClose();
                        }}
                    />
                </BlifStackView>
                <BlifBox
                    top={2}
                    scroll={{
                        contentContainerStyle: {
                            maxHeight: '85vh',
                            overflowY: 'auto',
                        },
                    }}>
                    {children}
                </BlifBox>
            </BlifBox>
        </div>
    );
};

export default BlifSidebar;
