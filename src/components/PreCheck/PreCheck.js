import React, {useState} from 'react';
import BlifSelectInput from '../Common/BlifInput/BlifSelectInput';
import BlifButton from '../Common/Buttons/BlifButton';
// importing necessary allium components
import {
    FlexGrid,
    Typography,
    TextInput,
    Select,
    Spacer,
    Button,
    Box,
} from '@telus-uds/ds-allium';

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

const btnCss = {
    backgroundColor: '#57a708',
    color: 'white',
    fontSize: '19px',
    lineHeight: '19px',
    textAlign: 'center',
    fontWeight: '800',
    borderRadius: '3px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '14px',
};

const boxCss = {
    paddingTop: '9px',
    paddingBottom: '35px',
    paddingRight: '40px',
};

const selectCss = {
    height: '40px',
    paddingTop: '7px',
    paddingRight: '12px',
    paddingBottom: '7px',
    paddingLeft: '12px',
    fontSize: '14px',
    color: '#1b1b1b',
    borderRadius: '3px',
};

const PreCheck = () => {
    const [showEntriesDropdown, setShowEntriesDropdown] = useState({});

    return (
        <FlexGrid gutter={false}>
            <FlexGrid.Row>
                <FlexGrid.Col>
                    <FlexGrid.Row>
                        <Typography block variant={{size: 'h2'}}>
                            Pre-Check
                        </Typography>
                    </FlexGrid.Row>
                    <Spacer space={1} />
                    <Box
                        variant={{background: 'light'}}
                        tokens={boxCss}
                        flex={1}>
                        <form>
                            <Spacer space={1} />
                            <FlexGrid.Row
                                verticalAlign="center"
                                horizontalAlign="center">
                                <FlexGrid.Col md={1} horizontalAlign="right">
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingTop: '5px',
                                            paddingBottom: '5px',
                                        }}>
                                        <Typography>File</Typography>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={2}>
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingLeft: '15px',
                                            paddingRight: '15px',
                                        }}>
                                        <TextInput
                                            tokens={{fontSize: '14px'}}
                                        />
                                    </Box>
                                </FlexGrid.Col>

                                <FlexGrid.Col md={1} horizontalAlign="right">
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingTop: '5px',
                                            paddingBottom: '5px',
                                        }}>
                                        <Typography>Province</Typography>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={2}>
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingLeft: '15px',
                                            paddingRight: '15px',
                                        }}>
                                        <Select tokens={selectCss}>
                                            {province.map((item, index) => {
                                                return (
                                                    <Select.Item
                                                        value={item.value}
                                                        key={index}>
                                                        {item.text}
                                                    </Select.Item>
                                                );
                                            })}
                                        </Select>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={1} horizontalAlign="right">
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingTop: '5px',
                                            paddingBottom: '5px',
                                        }}>
                                        <Typography>BRG Indicator</Typography>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={2}>
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingLeft: '15px',
                                            paddingRight: '15px',
                                        }}>
                                        <Select tokens={selectCss}>
                                            {brgIndicator.map((item, index) => {
                                                return (
                                                    <Select.Item
                                                        value={item.value}
                                                        key={index}>
                                                        {item.text}
                                                    </Select.Item>
                                                );
                                            })}
                                        </Select>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={1} horizontalAlign="right">
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingTop: '5px',
                                            paddingBottom: '5px',
                                        }}>
                                        <Typography>Rejects</Typography>
                                    </Box>
                                </FlexGrid.Col>
                                <FlexGrid.Col md={2}>
                                    <Box
                                        tokens={{
                                            backgroundColor: '#f5f5f5',
                                            paddingLeft: '15px',
                                            paddingRight: '15px',
                                        }}>
                                        <Select tokens={selectCss}>
                                            {rejects.map((item, index) => {
                                                return (
                                                    <Select.Item
                                                        value={item.value}
                                                        key={index}>
                                                        {item.text}
                                                    </Select.Item>
                                                );
                                            })}
                                        </Select>
                                    </Box>
                                </FlexGrid.Col>
                            </FlexGrid.Row>
                            <Spacer space={4} />
                            <FlexGrid.Row>
                                <FlexGrid.Col>
                                    <Box tokens={{paddingLeft: '113px'}}>
                                        {/* <Button tokens={btnCss}>Search</Button> */}
                                        <BlifButton
                                            tokens={btnCss}
                                            variant={{size: 'small'}}>
                                            Search
                                        </BlifButton>
                                    </Box>
                                </FlexGrid.Col>
                            </FlexGrid.Row>
                        </form>
                    </Box>
                </FlexGrid.Col>
            </FlexGrid.Row>
        </FlexGrid>
    );
};

export default PreCheck;
