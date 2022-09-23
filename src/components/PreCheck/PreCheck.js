import React from 'react';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import BlifStackView from '../Common/BlifStackView/BlifStackView';

import BlifBox from '../Common/Box/BlifBox';
import {
    BlifFlexGrid,
    BlifFlexGridRow,
    BlifFlexGridCol,
} from '../Common/BlifFlexGrid/BlifFlexGrid';
import {Spacer} from '@telus-uds/ds-allium';

import PreCheckFilters from './PreCheckFilters';

// search onClick handler
const clickHandler = (e) => {
    e.preventDefault();
    alert('Search Query');
};

// PreCheck Component
const PreCheck = () => {
    return (
        <BlifFlexGrid gutter={false}>
            <BlifStackView tokens={{justifyContent: 'center'}}>
                <BlifFlexGridCol xs={12} lg={10} verticalAlign="center">
                    <BlifFlexGridRow>
                        <BlifTypography variant={{size: 'h2'}}>
                            Pre-Check
                        </BlifTypography>
                    </BlifFlexGridRow>
                    <Spacer space={1} />
                    <BlifBox variant={{background: 'light'}} flex={1}>
                        <BlifFlexGridRow
                            verticalAlign="center"
                            horizontalAlign="center">
                            <PreCheckFilters clickHandler={clickHandler} />
                        </BlifFlexGridRow>
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifStackView>
        </BlifFlexGrid>
    );
};

export default PreCheck;
