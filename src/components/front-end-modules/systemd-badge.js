import { withStyles, Badge } from '@material-ui/core';

const SystemdBadge = withStyles(theme => ({
    badge: {
        borderRadius: '50%',
        width: props => props.size > 0 ? props.size : 6,
        height: props => props.size > 0 ? props.size : 6,
        backgroundColor: props => props.color
            ? theme.palette[props.color].main
            : theme.palette.disabled.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 2.0s infinite ease-in-out',
            border: props => props.color
                ? `1px solid ${theme.palette[props.color].main}`
                : `1px solid ${theme.palette.disabled.main}`,
            content: props => props.color !== 'disabled' ? '""' : ''
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.0)',
            opacity: 0
        }
    }
}))(Badge);

export default SystemdBadge;