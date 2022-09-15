import Box from '@tds/core-box';
import Checkbox from '@tds/core-checkbox';
import {colorGreyAthens, colorTelusPurple, colorWhite} from '@tds/core-colours';
import {CaretDown, CaretUp} from '@tds/core-interactive-icon';
import Text from '@tds/core-text';
import React, {useEffect, useState} from 'react';
import {generatePath} from 'react-router';
import {Link} from 'react-router-dom';
import IvsAuthPrivilege from '../IvsPage/IvsAuthPrivilege';
import {
    getLocalStoragePageSize,
    isNullOrUndefined,
    setLocalStoragePageSize,
} from '../../Util/Util';
import './IvsDataTable.css';
import IvsSpinner from '../Spinner/IvsSpinner';

// clearSelection is a toogle flag to clear the current selection
const IvsDataTable = ({
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
}) => {
    const [displayData, setDisplayData] = useState();
    const [selectAll, setSelectAll] = useState(false);
    const [selected, setSelected] = useState(new Set());

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

    return (
        <React.Fragment>
            <div
                className="ivsDataTable"
                style={{width: data.schema.width, ...tableStyle}}>
                <Box style={{height: '40px'}}>
                    {pagination && (
                        <NumberOfItemsOnPageSelection
                            pageSize={
                                getLocalStoragePageSize() || pagination.pageSize
                            }
                            onPageSizeChange={onPageSizeChange}
                            translateFn={translateFn}
                        />
                    )}
                    {pagination && getPaginationLinks(pagination, onPageChange)}
                </Box>
                <table className="ivsDataTableTable" style={tableTableStyle}>
                    <thead>
                        {heading && (
                            <tr style={trStyle}>
                                <th
                                    style={{...thStyle}}
                                    colSpan={
                                        data.schema.headers.length +
                                        (selection ? 1 : 0)
                                    }>
                                    <Text invert bold>
                                        {translate(heading)}
                                    </Text>
                                </th>
                            </tr>
                        )}
                        <tr style={trStyle}>
                            {((selectionConditionFn && selection === 'multi') ||
                                selection === 'single') && (
                                <th style={{...thStyle}}>
                                    <Text invert bold>
                                        {translateFn('ivs.table.header.select')}
                                    </Text>
                                </th>
                            )}
                            {!selectionConditionFn && selection === 'multi' && (
                                <th style={{...thStyle, width: '8%'}}>
                                    <Checkbox
                                        checked={selectAll}
                                        onChange={toggleSelectAll}
                                        name="selectAll"
                                        value={translate(heading) || ''}
                                        label=""
                                    />
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
                                            {/* <a className={classes} href='#' onClick={() => onSortChange(header.dataProperty, thisColumnSorted?toggleSortOrder(sort.sortOrder):'asc')}><Text invert bold>{headerName}</Text></a> */}
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
                                                <span
                                                    style={{
                                                        textDecoration:
                                                            'underline',
                                                        textDecorationColor:
                                                            'white',
                                                    }}>
                                                    <Text invert bold>
                                                        {headerName}
                                                    </Text>
                                                </span>
                                                {sort &&
                                                    header.dataProperty ===
                                                        sort.sortBy &&
                                                    sort.sortOrder ===
                                                        'asc' && (
                                                        <CaretUp
                                                            style={{
                                                                float: 'right',
                                                            }}
                                                            variant="inverted"></CaretUp>
                                                    )}
                                                {sort &&
                                                    header.dataProperty ===
                                                        sort.sortBy &&
                                                    sort.sortOrder ===
                                                        'desc' && (
                                                        <CaretDown
                                                            style={{
                                                                float: 'right',
                                                            }}
                                                            variant="inverted"></CaretDown>
                                                    )}
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
                                            <Text invert bold>
                                                {headerName}
                                            </Text>
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
                                                <td
                                                    onClick={() =>
                                                        toggleSelected(idx)
                                                    }>
                                                    <input
                                                        type="radio"
                                                        // onChange={() => {}}
                                                        checked={selected.has(
                                                            idx,
                                                        )}
                                                    />
                                                </td>
                                            )}
                                        {(selectionConditionFn
                                            ? selectionConditionFn(row)
                                            : true) &&
                                            selection === 'multi' && (
                                                <td
                                                    onClick={() =>
                                                        toggleSelected(idx)
                                                    }>
                                                    <input
                                                        type="checkbox"
                                                        // onChange={() => {}}
                                                        checked={selected.has(
                                                            idx,
                                                        )}
                                                    />
                                                </td>
                                            )}
                                        {data.schema.headers.map((p, i) => {
                                            let displayVal =
                                                displayData[idx][i];
                                            if (p.link) {
                                                return (
                                                    <td key={i}>
                                                        <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true">
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
                                                        </IvsAuthPrivilege>
                                                    </td>
                                                );
                                            } else if (p.onClick) {
                                                return (
                                                    <td key={i}>
                                                        <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true">
                                                            <Link
                                                                to="#"
                                                                onClick={() =>
                                                                    p.onClick(
                                                                        row,
                                                                    )
                                                                }>
                                                                {displayVal}
                                                            </Link>
                                                        </IvsAuthPrivilege>
                                                    </td>
                                                );
                                            } else {
                                                return (
                                                    <td key={i}>
                                                        <IvsAuthPrivilege
                                                            privilegeName={
                                                                p.privilegeName
                                                            }
                                                            disable="true">
                                                            {displayVal}
                                                        </IvsAuthPrivilege>
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
                                    <IvsSpinner show label="Loading Data" />
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
        <Box className="ivsDataTablePagination" vertical={2}>
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
        </Box>
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
        <Box style={{...itemsPerPageStyle}} inline between={1} vertical={2}>
            <Text>{translateFn('ivs.title.common.items.per.page')}</Text>
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
        </Box>
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
    background: '#F4F9F2',
    color: '#4B286D',
    borderRadius: ' 10px',
    border: '1px solid #167F92',
};
const trStyle = {
    backgroundColor: colorWhite,
};
const oddRowStyle = {
    backgroundColor: colorGreyAthens,
};
const thStyle = {
    border: '1px solid #FFF',
    backgroundColor: colorTelusPurple,
    color: '#FFF',
    fontSize: '1em',
    textAlign: 'left',
    margin: '.5em .8em',
    padding: '.8em',
};

export default IvsDataTable;
