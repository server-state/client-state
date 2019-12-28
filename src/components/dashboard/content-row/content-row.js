import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box, Grid } from '@material-ui/core';

import ContentElementWrapper from './content-element-wrapper/content-element-wrapper';


const useStyles = makeStyles(() => ({
    element: {
        minWidth: 0
    },
}));

function ContentRow(props) {
    const classes = useStyles();

    return (
        <Box py={1}>
            <Grid
                container
                spacing={2}
                direction={'row'}
                alignItems={'stretch'}
                justify={'center'}
                pad={'small'}
                gap={'small'}
            >
                {props.elements.map((element, index) =>
                    <Grid
                        key={index} className={classes.element}
                        item xs={12} sm={element.width}
                    >
                        <ContentElementWrapper className={classes.element} element={element} />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

ContentRow.propTypes = {
    elements: PropTypes.array.isRequired
};

export default ContentRow;
