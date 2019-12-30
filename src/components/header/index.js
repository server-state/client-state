import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';

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

function Header({dashboards, dense, onDrawerSelected, onMenuSelected, onRefresh, onToggleEdit, dashboardTitle}) {
    const classes = useStyles();

    const toolbarVariant = dense ? 'dense' : 'regular';

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant={toolbarVariant}>
                    <HeaderDrawer
                        dashboards={dashboards}
                        selected={dashboardTitle}
                        dense={dense}
                        onDrawerSelected={onDrawerSelected}
                    />

                    {/* Header text */}
                    <Typography variant="h6" className={classes.title}>
                        {dashboardTitle}
                    </Typography>

                    {/* Header action buttons */}
                    <HeaderEdit onToggleEdit={onToggleEdit}/>
                    <HeaderRefresh onRefresh={onRefresh}/>
                    <HeaderMenu onMenuSelected={onMenuSelected}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    /**
     * TODO: Write documentation
     */
    onDrawerSelected: PropTypes.func.isRequired,
    /**
     * TODO: Write Documentation
     */
    onMenuSelected: PropTypes.func.isRequired,
    /**
     * Function that gets called when the global refresh button gets clicked
     */
    onRefresh: PropTypes.func.isRequired,
    /**
     * Function that gets called when the global "Toggle Editing" button gets clicked
     */
    onToggleEdit: PropTypes.func.isRequired,
    /**
     * The dashboard title
     */
    dashboardTitle: PropTypes.string.isRequired,
    /**
     * Available dashboards
     */
    dashboards: PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     * Whether the menu should get displayed in dense form
     */
    dense: PropTypes.bool
};

export default Header;
