import React, {useMemo} from 'react';
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
    
    const avatarSign = useMemo(() => {
        const firstLetter = props.name.charAt(0);
        switch (firstLetter) {
            case 'ß':
                return 'ß';
            default:
                return firstLetter.toUpperCase();
        }
    }, [props.name]);

    return (
        <Avatar aria-label="recipe" className={classes.avatar}>
            {avatarSign}
        </Avatar>
    );
}
