import BlifBox from '../Box/BlifBox';
import {BlifFlexGrid, BlifFlexGridCol} from '../BlifFlexGrid/BlifFlexGrid';
import BlifTextInput from '../Inputs/BlifTextInput';
import BlifSelectInput from '../Inputs/BlifSelectInput';
import BlifStackView from '../BlifStackView/BlifStackView';
import BlifSpacer from '../BlifSpacer/BlifSpacer';
import BlifButton from '../Buttons/BlifButton';
import {useState, useEffect} from 'react';
import {ARRAY_MAP_KEYS, FILTER_TYPES} from '../../../utils/commonKeys';

const ITEMS_IN_ROW = 3;
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

const FiltersView = ({clickHandler, schema = [], handleInputChange}) => {
    const [modifySchemaFormat, setModifySchemaFormat] = useState([]);
    useEffect(() => {
        if (schema) {
            // Convert Array to 3 cols per row structure
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
                                                rowItem[ARRAY_MAP_KEYS.LABEL]
                                            }
                                            onChangeText={(e) => {
                                                handleInputChange(
                                                    rowItem[
                                                        ARRAY_MAP_KEYS.ON_CHANGE
                                                    ],
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                    );
                                } else
                                    return (
                                        <SelectInputFilter
                                            label={
                                                rowItem[ARRAY_MAP_KEYS.LABEL]
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
                            })}
                        </BlifStackView>
                    );
                })}

                <BlifFlexGridCol>
                    <BlifBox tokens={{paddingLeft: '15px'}}>
                        <BlifButton onClick={clickHandler}>Search</BlifButton>
                    </BlifBox>
                </BlifFlexGridCol>
            </BlifStackView>
        </BlifFlexGrid>
    );
};

export {TextInputFilter, SelectInputFilter, FiltersView};