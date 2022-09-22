import React from 'react';
import {FlexGrid} from '@telus-uds/ds-allium';

// Replaced IvsHeader all instances of FlexGrid with IvsFlexGrid and it worked fine
const BlifFlexGrid = ({
    children,
    gutter = true,
    limitWidth = true,
    outsideGutter = true,
    tag,
    mdReverse,
    smReverse,
    lgReverse,
    xlReverse,
    xsReverse,
}) => {
    return (
        <FlexGrid
            gutter={gutter}
            limitWidth={limitWidth}
            outsideGutter={outsideGutter}
            tag={tag}
            mdReverse={mdReverse}
            smReverse={smReverse}
            lgReverse={lgReverse}
            xlReverse={xlReverse}
            xsReverse={xsReverse}>
            {children}
        </FlexGrid>
    );
};

const BlifFlexGridCol = ({
    children,
    flex,
    horizontalAlign,
    lg,
    lgOffset,
    md,
    mdOffset,
    sm,
    smOffset,
    xl,
    xlOffset,
    xs,
    xsOffset,
}) => {
    return (
        <FlexGrid.Col
            flex={flex}
            horizontalAlign={horizontalAlign}
            lg={lg}
            lgOffset={lgOffset}
            md={md}
            mdOffset={mdOffset}
            sm={sm}
            smOffset={smOffset}
            xl={xl}
            xlOffset={xlOffset}
            xs={xs}
            xsOffset={xsOffset}>
            {children}
        </FlexGrid.Col>
    );
};

const BlifFlexGridRow = ({
    children,
    distribute,
    horizontalAlign,
    verticalAlign,
    mdReverse,
    smReverse,
    lgReverse,
    xlReverse,
    xsReverse,
}) => {
    return (
        <FlexGrid.Row
            distribute={distribute}
            horizontalAlign={horizontalAlign}
            verticalAlign={verticalAlign}
            mdReverse={mdReverse}
            smReverse={smReverse}
            lgReverse={lgReverse}
            xlReverse={xlReverse}
            xsReverse={xsReverse}>
            {children}
        </FlexGrid.Row>
    );
};

BlifFlexGrid.Row = BlifFlexGridRow;
BlifFlexGrid.Col = BlifFlexGridCol;

export default BlifFlexGrid;
