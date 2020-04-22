import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles, IconButton, SwipeableDrawer,
    List, ListItem, ListItemText, Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SecondaryTooltip from '../secondary-tooltip';

import {Link as RouterLink, useRouteMatch} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    menuButtonLeft: {
        marginRight: theme.spacing(2)
    },
    list: {
        width: 250
    }
}));

function HeaderDrawer({dashboards, dense, onDrawerSelected, selected}) {
    const classes = useStyles();
    const {url} = useRouteMatch();

    // disable "swipe to go back" feature on iOS
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // simple react state for open/close behaviour
    const [state, setState] = React.useState(false);
    const getToggleDrawerFunction = newState => event => {
        if (event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(newState);
    };

    // sideList to render with variable elements
    const sideList = (
        <div
            className={classes.list}
            role="presentation"
            onClick={getToggleDrawerFunction(false)}
            onKeyDown={getToggleDrawerFunction(false)}
        >
            <List>
                {dashboards.map(dashboard => (
                    <ListItem
                        key={dashboard}

                        to={`/dashboard/${dashboard}`}
                        button
                        component={RouterLink}
                        selected={url === `/dashboard/${dashboard}`}
                        dense={dense}
                    >
                        <ListItemText primary={dashboard}/>
                    </ListItem>
                ))}
                <ListItem
                    button
                    component={RouterLink}
                    to={'/cbm-manager'}
                    selected={url==='/cmb-manager'}
                    dense={dense}
                    >
                    <ListItemText primary={'CBM Manager'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <SecondaryTooltip title="Dashboards">
                <IconButton
                    edge="start"
                    className={classes.menuButtonLeft}
                    color="inherit"
                    aria-label="menu"
                    onClick={getToggleDrawerFunction(true)}
                >
                    <MenuIcon/>
                </IconButton>
            </SecondaryTooltip>

            <SwipeableDrawer
                open={state}
                onClose={getToggleDrawerFunction(false)}
                onOpen={getToggleDrawerFunction(true)}

                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                {sideList}
            </SwipeableDrawer>
        </div>
    );
}

HeaderDrawer.propTypes = {
    dashboards: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    dense: PropTypes.bool,
    onDrawerSelected: PropTypes.func.isRequired
};

export default HeaderDrawer;
