import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    box: {
        // overflow: 'scroll',
        // overflowY: 'hidden'
    },
    typo: {
        minWidth: 0
    }
}));


export default function Raw(props) {
    const classes = useStyles();

    return (
        <Typography variant="body2" className={classes.typo}>
            {JSON.stringify(props.data, null, 2)}
        </Typography>
    );
}