import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI imports
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

// used icons
import {
    Menu as MenuIcon,
    MoreVert as MoreVertIcon,
    Refresh as RefreshIcon,
    ViewQuilt as ViewQuiltIcon,
} from '@material-ui/icons';

// pre-defined style
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButtonLeft: {
        marginRight: theme.spacing(2)
    },
    menuButtonMiddle: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    menuButtonRight: {
        marginLeft: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
        whiteSpace: 'nowrap'
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="regular">
                    <IconButton
                        edge="start"
                        className={classes.menuButtonLeft}
                        color="inherit"
                        aria-label="menu">
                            <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="none">
                            <ViewQuiltIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="none">
                            <RefreshIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="more options">
                            <MoreVertIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}