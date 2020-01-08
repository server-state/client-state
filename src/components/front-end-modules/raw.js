import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(({
    typo: {
        wordBreak: 'break-all'
    }
}));


export default function Raw(props) {
    const classes = useStyles();
    const prettyJSON = JSON.stringify(props.data, null, 2);

    return (
        <Typography variant="body2" className={classes.typo}>
            {prettyJSON}
        </Typography>
    );
}
