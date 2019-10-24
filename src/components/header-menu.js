import React from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

const SecondaryTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[1],
        color: 'rgba(0, 0, 0, 0.87)'
    }
}))(Tooltip);

// given options
const options = [
    'Settings',
    'Reload',
    'About'
];

const ITEM_HEIGHT = 48;

export default function HeaderMenu(props) {
    // simple react state for open/close behaviour
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // internal handle events
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const onClick = event => {
        handleClose();
        props.onMenuSelected(event.target.textContent);
    }

    return (
        <div>
            <SecondaryTooltip title="Menu">
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
            </SecondaryTooltip>
            <Menu
                id="header-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200
                    }
                }}
            >
                {options.map(option => (
                    <MenuItem key={option} onClick={onClick}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}