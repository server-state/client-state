import React from 'react';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import SecondaryTooltip from '../secondary-tooltip';


const useStyles = makeStyles(theme => ({
    menuButtonLeft: {
        marginRight: theme.spacing(2)
    },
    list: {
        width: 250
    }
}));

export default function HeaderDrawer(props) {
    const classes = useStyles();

    // disable "swipe to go back" feature on iOS
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // simple react state for open/close behaviour
    const [state, setState] = React.useState(false);
    const toggleDrawer = newState => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(newState);
    };

    // sideList to render with variable elements
    const sideList = (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {props.dashboards.map(dashboard => (
                    <ListItem
                        key={dashboard}

                        button
                        selected={props.selected === dashboard}
                        dense={props.dense}
                        onClick={event => props.onDrawerSelected(event.target.textContent)}
                    >
                        <ListItemText primary={dashboard} />
                    </ListItem>
                ))}
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
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </SecondaryTooltip>

            <SwipeableDrawer
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}

                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                {sideList}
            </SwipeableDrawer>
        </div>
    );
}