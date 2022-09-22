import BlifButton from '../Common/Buttons/BlifButton';
import BlifTypography from '../Common/BlifTypography/BlifTypography';
import BlifBox from '../Common/Box/BlifBox';
import BlifFlexGrid from '../Common/BlifFlexGrid/BlifFlexGrid';
import BlifTextInput from '../Common/Inputs/BlifTextInput';
import {Select} from '@telus-uds/ds-allium';
import {btnCss, boxCss, selectCss, textInputCss} from './PreCheckComponentsCss';

const province = [
    {text: 'ALL', value: 'ALL'},
    {text: 'QC', value: 'QC'},
];

const brgIndicator = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Business', value: 'Business'},
    {text: 'Residential', value: 'Residential'},
];

const rejects = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Only Rejects', value: 'Only Rejects'},
    {text: 'No Rejects', value: 'No Rejects'},
];

const FileCol = () => {
    return (
        <>
            <BlifFlexGrid.Col md={1} horizontalAlign="right">
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                    }}>
                    <BlifTypography>File</BlifTypography>
                </BlifBox>
            </BlifFlexGrid.Col>
            <BlifFlexGrid.Col md={2}>
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    }}>
                    <BlifTextInput tokens={textInputCss} />
                </BlifBox>
            </BlifFlexGrid.Col>
        </>
    );
};

const ProvinceCol = () => {
    return (
        <>
            {' '}
            <BlifFlexGrid.Col md={1} horizontalAlign="right">
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                    }}>
                    <BlifTypography>Province</BlifTypography>
                </BlifBox>
            </BlifFlexGrid.Col>
            <BlifFlexGrid.Col md={2}>
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    }}>
                    <Select tokens={selectCss}>
                        {province.map((item, index) => {
                            return (
                                <Select.Item value={item.value} key={index}>
                                    {item.text}
                                </Select.Item>
                            );
                        })}
                    </Select>
                </BlifBox>
            </BlifFlexGrid.Col>{' '}
        </>
    );
};
const BrgIndicatorCol = () => {
    return (
        <>
            <BlifFlexGrid.Col md={1} horizontalAlign="right">
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                    }}>
                    <BlifTypography>BRG Indicator</BlifTypography>
                </BlifBox>
            </BlifFlexGrid.Col>
            <BlifFlexGrid.Col md={2}>
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    }}>
                    <Select tokens={selectCss}>
                        {brgIndicator.map((item, index) => {
                            return (
                                <Select.Item value={item.value} key={index}>
                                    {item.text}
                                </Select.Item>
                            );
                        })}
                    </Select>
                </BlifBox>
            </BlifFlexGrid.Col>
        </>
    );
};

const RejectsCol = () => {
    return (
        <>
            {' '}
            <BlifFlexGrid.Col md={1} horizontalAlign="right">
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                    }}>
                    <BlifTypography>Rejects</BlifTypography>
                </BlifBox>
            </BlifFlexGrid.Col>
            <BlifFlexGrid.Col md={2}>
                <BlifBox
                    tokens={{
                        backgroundColor: '#f5f5f5',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    }}>
                    <Select tokens={selectCss}>
                        {rejects.map((item, index) => {
                            return (
                                <Select.Item value={item.value} key={index}>
                                    {item.text}
                                </Select.Item>
                            );
                        })}
                    </Select>
                </BlifBox>
            </BlifFlexGrid.Col>
        </>
    );
};

export {FileCol, ProvinceCol, BrgIndicatorCol, RejectsCol};
