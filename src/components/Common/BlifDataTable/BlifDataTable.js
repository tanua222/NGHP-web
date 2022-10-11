import BlifTypography from '../BlifTypography/BlifTypography';
import React, {useEffect, useState} from 'react';
import {generatePath} from 'react-router';
import {Link} from 'react-router-dom';
//import IvsAuthPrivilege from '../../IvsPage/IvsAuthPrivilege';  //TODO
import {
    getLocalStoragePageSize,
    isNullOrUndefined,
    setLocalStoragePageSize,
} from '../../../utils/helperFunctions';
import './BlifDataTable.css';
import BlifSpinner from '../BlifSpinner/BlifSpinner';
import BlifPalette from '../BlifPalette/BlifPalette';
import BlifStackView from '../BlifStackView/BlifStackView';
import BlifDecorativeIcon from '../BlifIcons/BlifDecorativeIcon';
import BlifCheckboxInput from '../Inputs/BlifCheckboxInput';
import BlifBox from '../Box/BlifBox';
import BlifSpacer from '../BlifSpacer/BlifSpacer';
import BlifTextInput from '../Inputs/BlifTextInput';
import BlifButton from '../Buttons/BlifButton';
import {Icon} from '@telus-uds/ds-allium';
import {Search} from '@telus-uds/palette-allium/build/web/icons';
import BlifSearch from '../BlifSearch/BlifSearch';
//import IvsSingleRadioInput from '../../IvsInput/IvsSingleRadioInput'; //TODO

// clearSelection is a toogle flag to clear the current selection
const BlifDataTable = ({
    heading,
    selection,
    data,
    onSelectionChange,
    dataOnSelectionChange,
    onPageChange,
    onPageSizeChange,
    onSortChange,
    translate,
    clearSelection,
    selectionConditionFn,
    maxSelectionCnt,
    search,
}) => {
    const [displayData, setDisplayData] = useState();
    const [selectAll, setSelectAll] = useState(false);
    const [selected, setSelected] = useState(new Set());

    // search button in table
    const [searchButtonVal, setSearchButtonVal] = useState('');

    useEffect(() => {
        if (data.data) {
            calculateAndSetDisplayData(
                data.data,
                data.schema.headers,
                setDisplayData,
            );
        } else {
            setDisplayData(undefined);
        }
        setSelected(new Set());
        setSelectAll(false);
    }, [data, translate]);

    const translateFn =
        translate ||
        ((msgKey) => {
            const defaultTextMap = {
                'ivs.title.common.no.records': 'No data found ...',
                'ivs.title.common.items.per.page': 'Items per page',
            };
            return defaultTextMap[msgKey];
        });

    let pagination = data.schema.pagination;
    let sort = data.schema.sort;
    useEffect(() => {
        onSelectionChange && onSelectionChange([...selected]);
        dataOnSelectionChange &&
            data.data &&
            dataOnSelectionChange(data.data.filter((d, i) => selected.has(i)));
    }, [selected]);

    useEffect(() => {
        setSelected(new Set());
        setSelectAll(false);
    }, [clearSelection]);

    const numberOfColumns =
        selection === 'multi' || selection === 'single'
            ? data.schema.headers.length + 1
            : data.schema.headers.length;

    const toggleSelected = (idx) => {
        let newSet;
        if (selection === 'multi') newSet = new Set(selected);
        else newSet = new Set();
        if (selected.has(idx)) {
            newSet.delete(idx);
            setSelectAll(false);
        } else if (!maxSelectionCnt || maxSelectionCnt > newSet.size) {
            newSet.add(idx);
            if (data.data.length === newSet.size) setSelectAll(true);
        }
        setSelected(newSet);
    };

    const toggleSelectAll = () => {
        if (!data.data || data.data.length === 0) return;
        setSelectAll((v) => {
            setSelected(
                new Set(
                    v
                        ? undefined
                        : data.data.slice(0, maxSelectionCnt).map((v, i) => i),
                ),
            );
            return !v;
        });
    };

    // search button onClick handler in Table
    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     alert(searchButtonVal);
    // };

    return (
        <React.Fragment>
            <div
                className="blifDataTable"
                style={{width: data.schema.width, ...tableStyle}}>
                {(pagination && (
                    <BlifBox
                        viewTokens={{justifyContent: 'space-between'}}
                        inline>
                        <BlifBox>
                            {pagination && (
                                <NumberOfItemsOnPageSelection
                                    pageSize={
                                        getLocalStoragePageSize() ||
                                        pagination.pageSize
                                    }
                                    onPageSizeChange={onPageSizeChange}
                                    translateFn={translateFn}
                                />
                            )}
                        </BlifBox>
                        {search && (
                            <>
                                <BlifBox inline>
                                    {/* <div className="search-label">Search:</div> */}
                                    {/* <BlifTextInput
                                        value={searchButton}
                                        onChange={(val) => setSearchButton(val)}
                                    /> */}
                                    <BlifSpacer space={1} />
                                    {/* <BlifButton
                                        tokens={{
                                            backgroundColor: 'white',
                                            minWidth: 1,
                                        }}
                                        variant={{priority: 'low'}}
                                        onClick={clickHandler}>
                                        <Icon icon={Search} />
                                    </BlifButton> */}
                                    <BlifSearch
                                        value={searchButtonVal}
                                        onChange={(val) =>
                                            setSearchButtonVal(val)
                                        }
                                        onSubmit={() => {
                                            alert(searchButtonVal);
                                        }}
                                    />
                                </BlifBox>
                            </>
                        )}
                    </BlifBox>
                )) || <BlifSpacer space={6} />}
                <BlifSpacer space={2} />
                <table className="blifDataTableTable" style={tableTableStyle}>
                    <thead>
                        {heading && (
                            <tr style={trStyle}>
                                <th
                                    style={{...thStyle}}
                                    colSpan={
                                        data.schema.headers.length +
                                        (selection ? 1 : 0)
                                    }>
                                    <BlifTypography
                                        variant={{bold: true, inverse: true}}>
                                        {translate(heading)}
                                    </BlifTypography>
                                </th>
                            </tr>
                        )}
                        <tr style={trStyle}>
                            {((selectionConditionFn && selection === 'multi') ||
                                selection === 'single') && (
                                <th style={{...thStyle}}>
                                    <BlifTypography
                                        variant={{bold: true, inverse: true}}>
                                        {translateFn('ivs.table.header.select')}
                                    </BlifTypography>
                                </th>
                            )}
                            {data.schema.headers.map((header, index) => {
                                const headerName =
                                    (translateFn && translateFn(header.name)) ||
                                    header.name;
                                if (header.sortable) {
                                    let classes = 'sort-by';
                                    let thisColumnSorted = false;
                                    if (
                                        sort &&
                                        header.dataProperty === sort.sortBy &&
                                        sort.sortOrder
                                    ) {
                                        classes =
                                            classes + ' ' + sort.sortOrder;
                                        thisColumnSorted = true;
                                    }
                                    return (
                                        <th
                                            style={{
                                                ...thStyle,
                                                width: header.width,
                                            }}
                                            key={index}>
                                            {/* <a className={classes} href='#' onClick={() => onSortChange(header.dataProperty, thisColumnSorted?toggleSortOrder(sort.sortOrder):'asc')}><BlifTypography variant={{ bold: true, inverse: true }}>{headerName}</BlifTypography></a> */}
                                            <Link
                                                to="#"
                                                onClick={() =>
                                                    onSortChange(
                                                        header.dataProperty,
                                                        thisColumnSorted
                                                            ? toggleSortOrder(
                                                                  sort.sortOrder,
                                                              )
                                                            : 'asc',
                                                    )
                                                }>
                                                <BlifStackView>
                                                    <span
                                                        style={{
                                                            textDecoration:
                                                                'underline',
                                                            textDecorationColor:
                                                                'white',
                                                        }}>
                                                        <BlifTypography
                                                            variant={{
                                                                bold: true,
                                                                inverse: true,
                                                            }}>
                                                            {headerName}
                                                        </BlifTypography>
                                                    </span>
                                                    {/* {console.log(
                                                        'sort = ',
                                                        sort,
                                                        'data = ',
                                                        data,
                                                    )} */}
                                                    {sort &&
                                                        header.dataProperty ===
                                                            sort.sortBy &&
                                                        sort.sortOrder ===
                                                            'asc' && (
                                                            <BlifDecorativeIcon
                                                                icon="CaretUp"
                                                                accessibilityLabel={translateFn(
                                                                    'ivs.accessibility.common.descending.sort',
                                                                )}
                                                                variant={{
                                                                    size: 'micro',
                                                                }}
                                                                tokens={{
                                                                    color: BlifPalette
                                                                        .color
                                                                        .white,
                                                                    translateY: 5,
                                                                    translateX: 5,
                                                                }}></BlifDecorativeIcon>
                                                        )}
                                                    {sort &&
                                                        header.dataProperty ===
                                                            sort.sortBy &&
                                                        sort.sortOrder ===
                                                            'desc' && (
                                                            <BlifDecorativeIcon
                                                                icon="CaretDown"
                                                                accessibilityLabel={translateFn(
                                                                    'ivs.accessibility.common.ascending.sort',
                                                                )}
                                                                variant={{
                                                                    size: 'micro',
                                                                }}
                                                                tokens={{
                                                                    color: BlifPalette
                                                                        .color
                                                                        .white,
                                                                    translateY: 5,
                                                                    translateX: 5,
                                                                }}></BlifDecorativeIcon>
                                                        )}
                                                </BlifStackView>
                                            </Link>
                                        </th>
                                    );
                                } else {
                                    return (
                                        <th
                                            style={{
                                                ...thStyle,
                                                width: header.width,
                                            }}
                                            key={index}>
                                            <BlifTypography
                                                variant={{
                                                    bold: true,
                                                    inverse: true,
                                                }}>
                                                {headerName}
                                            </BlifTypography>
                                        </th>
                                    );
                                }
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.data &&
                            displayData &&
                            data.data.length === displayData.length &&
                            data.data.map((row, idx) => {
                                return (
                                    <tr
                                        className={
                                            selected.has(idx)
                                                ? 'selected'
                                                : 'notSelected'
                                        }
                                        style={
                                            idx % 2 === 1
                                                ? {...trStyle, ...oddRowStyle}
                                                : trStyle
                                        }
                                        key={idx}>
                                        {selectionConditionFn &&
                                            !selectionConditionFn(row) && (
                                                <td />
                                            )}
                                        {(selectionConditionFn
                                            ? selectionConditionFn(row)
                                            : true) &&
                                            selection === 'single' && (
                                                <td>
                                                    {/* <td onClick={() => toggleSelected(idx)}> <input type="radio" onChange={()=>{}} checked={selected.has(idx)}/> */}
                                                    {/* <IvsSingleRadioInput
                                                        label=""
                                                        id={String(idx)}
                                                        checked={selected.has(
                                                            idx,
                                                        )}
                                                        onChange={() =>
                                                            toggleSelected(idx)
                                                        }
                                                        searchField
                                                    /> */}
                                                </td>
                                            )}
                                        {(selectionConditionFn
                                            ? selectionConditionFn(row)
                                            : true) &&
                                            selection === 'multi' && (
                                                <td>
                                                    {/* <td onClick={() => toggleSelected(idx)}> <input type="checkbox" onChange={()=>{}} checked={selected.has(idx)}/> */}
                                                    {/* <BlifCheckboxInput
                                                        label=""
                                                        id={String(idx)}
                                                        checked={selected.has(
                                                            idx,
                                                        )}
                                                        onChange={() =>
                                                            toggleSelected(idx)
                                                        }
                                                        searchField
                                                    /> */}
                                                </td>
                                            )}
                                        {data.schema.headers.map((p, i) => {
                                            let displayVal =
                                                displayData[idx][i];
                                            if (p.link) {
                                                return (
                                                    <td key={i}>
                                                        {/* <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true"> */}
                                                        <BlifTypography>
                                                            <Link
                                                                to={generatePath(
                                                                    p.link,
                                                                    row,
                                                                )}
                                                                onClick={() =>
                                                                    p.onClick &&
                                                                    p.onClick(
                                                                        row,
                                                                    )
                                                                }>
                                                                {displayVal}
                                                            </Link>
                                                        </BlifTypography>
                                                        {/* </IvsAuthPrivilege> */}
                                                    </td>
                                                );
                                            } else if (p.onClick) {
                                                return (
                                                    <td key={i}>
                                                        {/* <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true"> */}
                                                        <BlifTypography>
                                                            <Link
                                                                to="#"
                                                                onClick={() =>
                                                                    p.onClick(
                                                                        row,
                                                                    )
                                                                }>
                                                                {displayVal}
                                                            </Link>
                                                        </BlifTypography>
                                                        {/* </IvsAuthPrivilege> */}
                                                    </td>
                                                );
                                            } else {
                                                return (
                                                    <td key={i}>
                                                        {/* <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true"> */}
                                                        <BlifTypography>
                                                            {displayVal}
                                                        </BlifTypography>
                                                        {/* </IvsAuthPrivilege> */}
                                                    </td>
                                                );
                                            }
                                        })}
                                    </tr>
                                );
                            })}
                        {isNullOrUndefined(data.data) && (
                            <tr>
                                <td
                                    colSpan={numberOfColumns}
                                    style={{textAlign: 'center'}}>
                                    <BlifSpinner show label="Loading Data" />
                                </td>
                            </tr>
                        )}
                        {data.data && data.data.length === 0 && (
                            <tr>
                                <td colSpan={numberOfColumns}>
                                    {translateFn('ivs.title.common.no.records')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <BlifBox
                    viewTokens={{
                        justifyContent: 'flex-end',
                    }}
                    inline>
                    {pagination && getPaginationLinks(pagination, onPageChange)}
                </BlifBox>
            </div>
        </React.Fragment>
    );
};

const getPaginationLinks = (pagination, onPageChange) => {
    let pages;
    if (pagination.pageCount > 15) {
        let link1 = [];
        let link2 = [];
        let link3 = [];
        let currentPageIncldued;
        if (pagination.currentPage < 6) {
            link1 = Array.from(
                Array(pagination.currentPage + 3),
                (x, i) => i + 1,
            );
            currentPageIncldued = true;
        } else {
            link1 = [1, 2, 3];
        }
        if (pagination.currentPage > pagination.pageCount - 6) {
            link3 = Array.from(
                Array(pagination.pageCount - (pagination.currentPage - 3)),
                (x, i) => pagination.currentPage - 2 + i,
            );
            currentPageIncldued = true;
        } else {
            link3 = [
                pagination.pageCount - 2,
                pagination.pageCount - 1,
                pagination.pageCount,
            ];
        }
        if (!currentPageIncldued) {
            link2 = Array.from(
                Array(7),
                (x, i) => pagination.currentPage - 3 + i,
            );
        }
        pages = [...link1, 0, ...link2, 0, ...link3];
    } else {
        pages = Array.from(Array(pagination.pageCount), (x, i) => i + 1);
    }

    return (
        <BlifBox vertical={2} inline between={2}>
            <a
                href="#"
                onClick={() =>
                    pagination.currentPage > 1 &&
                    onPageChange(pagination.currentPage - 1)
                }>
                &laquo;
            </a>
            {pages.map((x, i) => {
                if (Number(x) === 0) return <i key={i}>. . . </i>;
                else
                    return (
                        <a
                            key={i}
                            href="#"
                            onClick={() =>
                                Number(pagination.currentPage) !== Number(x) &&
                                onPageChange(x)
                            }
                            className={
                                Number(pagination.currentPage) === Number(x)
                                    ? 'active'
                                    : ''
                            }>
                            {x}
                        </a>
                    );
            })}
            <a
                href="#"
                onClick={() =>
                    pagination.currentPage < pagination.pageCount &&
                    onPageChange(pagination.currentPage + 1)
                }>
                &raquo;
            </a>
        </BlifBox>
    );
};

const NumberOfItemsOnPageSelection = ({
    pageSize,
    onPageSizeChange,
    translateFn,
}) => {
    const [size] = useState(pageSize);
    const pageCounts = [1, 5, 10, 15, 20, 25, 30];
    if (!pageCounts.includes(Number(size))) {
        pageCounts.push(Number(size));
        pageCounts.sort((a, b) => a - b);
    }
    return (
        <BlifBox inline between={1} vertical={2}>
            <BlifTypography>
                {translateFn('ivs.title.common.items.per.page')}
            </BlifTypography>
            <select
                name="count"
                defaultValue={pageSize}
                onChange={(e) => {
                    const newPageSize = e.target.value;
                    setLocalStoragePageSize(newPageSize);
                    onPageSizeChange(newPageSize);
                }}>
                {pageCounts.map((cnt, index) => (
                    <option value={cnt} key={index}>
                        {cnt}
                    </option>
                ))}
            </select>
        </BlifBox>
    );
};

const toggleSortOrder = (sortOrder) => {
    return sortOrder && sortOrder === 'asc' ? 'desc' : 'asc';
};

const calculateAndSetDisplayData = async (data, headers, setter) => {
    let newDisplayData = [];
    for (let index = 0; index < data.length; index++) {
        const row = data[index];
        const newRow = [];
        for (let index2 = 0; index2 < headers.length; index2++) {
            const p = headers[index2];
            let displayVal = p.dataProperty
                .split('.')
                .reduce((accum, token) => accum[token], row);
            if (p.displayValFn) {
                if (p.displayValFnAsync) {
                    try {
                        displayVal = await p.displayValFn(displayVal, row);
                    } catch (err) {
                        displayVal = 'Error: ' + err;
                    }
                } else {
                    displayVal = p.displayValFn(displayVal, row);
                }
            }
            newRow.push(displayVal);
        }
        newDisplayData.push(newRow);
    }
    setter(newDisplayData);
};

const tableStyle = {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
};
const itemsPerPageStyle = {
    float: 'left',
};
const tableTableStyle = {
    margin: '0 0 .8em 0',
    width: '100%',
    overflow: 'hidden',
    background: BlifPalette.color.greenPanache,
    color: BlifPalette.color.purpleTelus,
    borderRadius: ' 10px',
};
const trStyle = {
    backgroundColor: BlifPalette.color.white,
};
const oddRowStyle = {
    backgroundColor: BlifPalette.color.greyAthens,
};
const thStyle = {
    border: '1px solid #FFF',
    backgroundColor: BlifPalette.color.purpleTelus,
    color: BlifPalette.color.white,
    fontSize: '1em',
    textAlign: 'left',
    margin: '.5em .8em',
    padding: '.8em',
};

export default BlifDataTable;
