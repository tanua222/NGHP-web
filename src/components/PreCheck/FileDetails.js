import BlifTypography from '../Common/BlifTypography/BlifTypography';
import {BlifFlexGrid} from '../Common/BlifFlexGrid/BlifFlexGrid';
import BlifBox from '../Common/Box/BlifBox';

const BlifFileDetails = () => {
    return (
        <>
            <BlifBox bottom={2}>
                <BlifTypography variant={{size: 'h3'}}>
                    File Details
                </BlifTypography>
                <BlifFlexGrid gutter={false}>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Filename
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            <BlifTypography>B_20190206</BlifTypography>
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Province
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            <BlifTypography>BC</BlifTypography>
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Date Completed
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col></BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Date Downloaded
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            <BlifTypography>2019-02-08</BlifTypography>
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Error Code
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            <BlifTypography>0</BlifTypography>
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                File Status
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            <BlifTypography>3</BlifTypography>
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                </BlifFlexGrid>
            </BlifBox>

            <BlifBox bottom={2}>
                <BlifTypography variant={{size: 'h3'}}>
                    Listing Details
                </BlifTypography>
                <BlifFlexGrid gutter={false}>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Action Ind
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>A</BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                LTI
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>BC</BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                NPA
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col></BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Line
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>2019-02-08</BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                B/R/G
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>0</BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                    <BlifFlexGrid.Row>
                        <BlifFlexGrid.Col md={4}>
                            <BlifTypography variant={{bold: true}}>
                                Bus Operating Name
                            </BlifTypography>
                        </BlifFlexGrid.Col>
                        <BlifFlexGrid.Col>
                            olgi_test_operating_name
                        </BlifFlexGrid.Col>
                    </BlifFlexGrid.Row>
                </BlifFlexGrid>
            </BlifBox>
        </>
    );
};

export default BlifFileDetails;
