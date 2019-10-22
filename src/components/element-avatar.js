import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary
    }
}));

export default function ElementAvatar(props) {
    const classes = useStyles();

    return (
        <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name.charAt(0).toUpperCase()}
        </Avatar>
    );
}