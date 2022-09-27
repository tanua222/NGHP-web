import BlifBox from '../Box/BlifBox';
import {BlifFlexGrid, BlifFlexGridCol} from '../BlifFlexGrid/BlifFlexGrid';
import BlifTextInput from '../Inputs/BlifTextInput';
import BlifSelectInput from '../Inputs/BlifSelectInput';
import BlifStackView from '../BlifStackView/BlifStackView';
import BlifSpacer from '../BlifSpacer/BlifSpacer';
import BlifButton from '../Buttons/BlifButton';
import {useState, useEffect} from 'react';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../../utils/commonKeys';
import {DatePicker} from '@telus-uds/ds-allium';
import BlifDatePicker from '../BlifDatePicker/BlifDatePicker';
import BlifTypography from '../BlifTypography/BlifTypography';

const ITEMS_IN_ROW = 4;
const ZERO_NUMBER = 0;

const TextInputFilter = ({label = '', onChangeText}) => {
    return (
        <BlifFlexGridCol md={3}>
            <BlifBox vertical={1} horizontal={3}>
                <BlifTextInput label={label} onChange={onChangeText} />
            </BlifBox>
        </BlifFlexGridCol>
    );
};

const SelectInputFilter = ({label = '', options = [], onChangeSelect}) => {
    return (
        <BlifFlexGridCol md={3}>
            <BlifBox vertical={1} horizontal={3}>
                <BlifSelectInput
                    label={label}
                    options={options}
                    onChange={onChangeSelect}
                />
            </BlifBox>
        </BlifFlexGridCol>
    );
};

const DateInputFilter = ({label, index, handleInputChange}) => {
    return (
        <>
            <BlifFlexGridCol md={3}>
                <BlifBox vertical={1} horizontal={3}>
                    {/* <BlifTypography>{label}</BlifTypography> */}
                    <DatePicker
                        id="DatePicker"
                        key={index}
                        label={label}
                        copy="en"
                        // onDateChange={handleInputChange}
                    />
                </BlifBox>
            </BlifFlexGridCol>
        </>
    );
};

const FiltersView = ({clickHandler, schema = [], handleInputChange}) => {
    const [modifySchemaFormat, setModifySchemaFormat] = useState([]);
    useEffect(() => {
        if (schema) {
            // Convert Array to 4 cols per row structure
            let arrayIndex = 0;
            let modifiedArray = [];

            schema.forEach((item) => {
                if (
                    modifiedArray?.[arrayIndex]?.length % ITEMS_IN_ROW ===
                    ZERO_NUMBER
                ) {
                    arrayIndex = arrayIndex + 1;
                }

                if (modifiedArray?.[arrayIndex]?.length < ITEMS_IN_ROW + 1) {
                    let getCurrentData = modifiedArray[arrayIndex];
                    getCurrentData.push(item);
                    modifiedArray[arrayIndex] = getCurrentData;
                } else modifiedArray.push([item]);
            });

            if (modifiedArray) setModifySchemaFormat(modifiedArray);
        }
    }, [schema]);

    return (
        <BlifFlexGrid limitWidth={false}>
            <BlifSpacer space={3} />
            <BlifStackView space={4} direction="column">
                {modifySchemaFormat?.map((item, index) => {
                    return (
                        <BlifStackView space={3} key={index}>
                            {item.map((rowItem, index) => {
                                if (
                                    rowItem[ARRAY_MAP_KEYS.FILTER_TYPE] ===
                                    FILTER_TYPES.TEXT_INPUT
                                ) {
                                    return (
                                        <TextInputFilter
                                            key={index}
                                            label={
                                                rowItem[ARRAY_MAP_KEYS.label]
                                            }
                                            onChangeText={(val) => {
                                                handleInputChange(
                                                    rowItem[
                                                        ARRAY_MAP_KEYS.ON_CHANGE
                                                    ],
                                                    val,
                                                );
                                            }}
                                        />
                                    );
                                } else if (
                                    rowItem[ARRAY_MAP_KEYS.FILTER_TYPE] ===
                                    FILTER_TYPES.SELECT_INPUT
                                ) {
                                    return (
                                        <SelectInputFilter
                                            key={index}
                                            label={
                                                rowItem[ARRAY_MAP_KEYS.label]
                                            }
                                            options={
                                                rowItem[ARRAY_MAP_KEYS.OPTIONS]
                                            }
                                            onChangeSelect={(e) => {
                                                handleInputChange(
                                                    rowItem[
                                                        ARRAY_MAP_KEYS.ON_CHANGE
                                                    ],
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                    );
                                } else {
                                    return (
                                        <DateInputFilter
                                            key={index}
                                            label={
                                                rowItem[ARRAY_MAP_KEYS.label]
                                            }

                                            // handleInputChange={(val) => {
                                            //     handleInputChange(
                                            //         rowItem[
                                            //             ARRAY_MAP_KEYS.ON_CHANGE
                                            //         ],
                                            //         val._d,
                                            //     );
                                            // }}
                                        />
                                    );
                                }
                            })}
                        </BlifStackView>
                    );
                })}

                <BlifFlexGridCol>
                    <BlifBox horizontal={{xs: 1, sm: 2, md: 3}}>
                        <BlifButton onClick={clickHandler}>Search</BlifButton>
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifStackView>
            <BlifSpacer space={3} />
        </BlifFlexGrid>
    );
};

export {TextInputFilter, SelectInputFilter, FiltersView};
