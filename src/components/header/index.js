import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

import HeaderDrawer from './header-drawer';
import HeaderMenu from './header-menu';
import HeaderEdit from './header-edit';
import HeaderRefresh from './header-refresh';


// pre-defined style
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
        whiteSpace: 'nowrap'
    }
});

function Header(props) {
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
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>

                    {/* Header action buttons */}
                    <HeaderEdit onToggleEdit={props.onToggleEdit} />                    
                    <HeaderRefresh onRefresh={props.onRefresh} />
                    <HeaderMenu onMenuSelected={props.onMenuSelected} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    onDrawerSelected: PropTypes.func.isRequired,
    onMenuSelected: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    dashboards: PropTypes.arrayOf(PropTypes.string).isRequired,
    dense: PropTypes.bool
};

export default Header;