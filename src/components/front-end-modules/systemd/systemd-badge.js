import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Badge } from '@material-ui/core';
import { getThemeType } from './systemd-mapper';


// Simple badge which positions over the child element 
// with a ripple-like animation option
const DottedBadge = withStyles(theme => ({
    badge: {
        borderRadius: '50%',
        width: 10,
        height: 10,
        backgroundColor: props => theme.palette[props.themeType].main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            display: props => props.blinking ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 2.0s infinite ease-in-out',
            border: '1px solid',
            borderColor: props => theme.palette[props.themeType].main,
            content: '""'
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}))(({ classes, themeType, blinking, ...other }) => (
    <Badge classes={{ badge: classes.badge }} {...other} />
));

DottedBadge.propTypes = {
    themeType: PropTypes.string.isRequired,
    blinking: PropTypes.bool.isRequired
};


// Systemd badge on the bottom right corner of the avatar
// which interprets the current status of the unit
function SystemdBadge(props) {
    const themeType = getThemeType(props.status);

    return (
        <DottedBadge
            themeType={themeType}
            blinking={themeType === 'error' || themeType === 'warning' || themeType === 'information'}

            overlap="circle"
            variant="dot"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
        >
            {props.children}
        </DottedBadge>
    );
}

SystemdBadge.propTypes = {
    status: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default SystemdBadge;