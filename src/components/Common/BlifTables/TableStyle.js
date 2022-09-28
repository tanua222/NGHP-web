import palette from '@telus-uds/palette-allium';

export const customStyles = {
    responsiveWrapper: {
        style: {
            height: '100%',
        },
    },
    headRow: {
        style: {
            fontSize: palette.size.size16,
            lineHeight: palette.size.size20,
            fontWeight: 'normal',
            background: palette.color.greyAthens,
        },
    },
    rows: {
        style: {
            fontSize: palette.size.size16,
            '&:hover': {
                background: palette.color.greyAlabaster,
            },
        },
    },
};

export const customStylesCompact = {
    headRow: {
        style: {
            minHeight: '44px',
            fontSize: '15px',
            lineHeight: '17px',
            fontWeight: 'normal',
            background: palette.color.greyAthens,
        },
    },
    rows: {
        style: {
            fontSize: '15px',
            lineHeight: '17px',
            '&:hover': {
                background: palette.color.greyAlabaster,
            },
        },
    },
};
