import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ContentElementWrapper from './content-element-wrapper';
import {Box, Grid} from "@material-ui/core";


const useStyles = makeStyles(() => ({
    element: {
        minWidth: 0
    },
}));

export default function ContentRow(props) {
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
                    <Grid item xs={12} sm={element.width} className={classes.element}>
                        <ContentElementWrapper element={element} key={index}/>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
