import React, {useState} from 'react';
import BlifSelectInput from '../Common/BlifInput/BlifSelectInput';
import BlifButton from '../Common/Buttons/BlifButton';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import BlifBox from '../Common/Box/BlifBox';
import BlifFlexGrid from '../Common/BlifFlexGrid/BlifFlexGrid';
import {TextInput, Select, Spacer} from '@telus-uds/ds-allium';
import BlifTextInput from '../Common/Inputs/BlifTextInput';
import {btnCss, boxCss, selectCss, textInputCss} from './PreCheckComponentsCss';

import {
    FileCol,
    ProvinceCol,
    BrgIndicatorCol,
    RejectsCol,
} from './PreCheckColumnComponents';

// search onClick handler
const clickHandler = (e) => {
    e.preventDefault();
    alert('Search Query');
};

// PreCheck Component
const PreCheck = () => {
    const [showEntriesDropdown, setShowEntriesDropdown] = useState({});

    return (
        <BlifFlexGrid gutter={false}>
            <BlifFlexGrid.Row>
                <BlifFlexGrid.Col>
                    <BlifFlexGrid.Row>
                        <BlifTypography variant={{size: 'h2'}}>
                            Pre-Check
                        </BlifTypography>
                    </BlifFlexGrid.Row>
                    <Spacer space={1} />
                    <BlifBox
                        variant={{background: 'light'}}
                        tokens={boxCss}
                        flex={1}>
                        <form>
                            <Spacer space={1} />
                            <BlifFlexGrid.Row
                                verticalAlign="center"
                                horizontalAlign="center">
                                <FileCol />
                                <ProvinceCol />
                                <BrgIndicatorCol />
                                <RejectsCol />
                            </BlifFlexGrid.Row>
                            <Spacer space={4} />
                            <BlifFlexGrid.Row>
                                <BlifFlexGrid.Col>
                                    <BlifBox tokens={{paddingLeft: '113px'}}>
                                        <BlifButton
                                            tokens={btnCss}
                                            variant={{size: 'small'}}
                                            onClick={clickHandler}>
                                            Search
                                        </BlifButton>
                                    </BlifBox>
                                </BlifFlexGrid.Col>
                            </BlifFlexGrid.Row>
                        </form>
                    </BlifBox>
                </BlifFlexGrid.Col>
            </BlifFlexGrid.Row>
        </BlifFlexGrid>
    );
};

export default PreCheck;
