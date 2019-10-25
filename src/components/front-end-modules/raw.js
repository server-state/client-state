import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    typo: {
        // maxWidth: '100%',
        // minWidth: 0,
        // overflow: 'auto',
        // whiteSpace: 'pre-wrap',
        wordBreak: 'break-all'
    }
}));


export default function Raw(props) {
    const classes = useStyles();

    return (
        <Typography variant="body2" className={classes.typo}>
            {/* <pre className={classes.pre}><code>{JSON.stringify(props.data, null, 2)}</code></pre> */}
            {JSON.stringify(props.data, null, 2)}
        </Typography>
    );
}