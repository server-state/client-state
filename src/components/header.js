import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI imports
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

// used icons
import {
    Refresh as RefreshIcon,
    ViewQuilt as ViewQuiltIcon,
} from '@material-ui/icons';

import HeaderDrawer from './header-drawer';
import HeaderMenu from './header-menu';

// pre-defined style
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
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
                <Toolbar variant={props.dense ? 'dense' : 'regular'}>
                    <HeaderDrawer
                        dashboards={props.dashboards}
                        selected={props.title}
                        dense={props.dense}

                        onDrawerSelected={props.onDrawerSelected}
                    />
                    
                    {/* Header text */}
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        {props.title}
                    </Typography>

                    {/* Header action buttons */}
                    <IconButton
                        color="inherit"
                        aria-label="none"
                        onClick={props.onToggleEdit}
                    >
                            <ViewQuiltIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="none"
                        onClick={props.onRefresh}
                    >
                            <RefreshIcon />
                    </IconButton>
                    
                    <HeaderMenu
                        onMenuSelected={props.onMenuSelected}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}