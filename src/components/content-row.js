import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContentElementWrapper from './content-element-wrapper';
import { Box, Grid } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    element: {
        maxWidth: 600,
        minWidth: 0
    }
}));

export default function ContentRow(props) {
    const classes = useStyles();

    return (
        <Box px={1} py={2}>
            <Grid container spacing={2} direction={'row'} justify={'center'} pad={'small'} gap={'small'}>
                {props.row.map((element, index) =>
                    <Grid item xs={12} sm={6} className={classes.element}>
                        <ContentElementWrapper element={element} key={index} />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
