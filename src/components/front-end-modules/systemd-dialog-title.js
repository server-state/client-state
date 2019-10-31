import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, DialogTitle } from '@material-ui/core';

import { getThemeType } from './systemd-mapper';


// Simple status typography that displays 
// the text color based on the given theme
const StatusTypography = withStyles(theme => ({
    root: {
        color: props => theme.palette[props.themeType].text
    }
}))(({ classes, themeType, ...other }) => (
    <Typography classes={{ root: classes.root }} {...other} />
));

StatusTypography.propTypes = {
    themeType: PropTypes.string.isRequired
};


// Custom Dialog title with unit name and current status
const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    status: {
        paddingLeft: theme.spacing(2)
    }
});

const SystemdDialogTitle = withStyles(styles)(props => {
    const { name, status, classes, ...other } = props;
    return (
        <DialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{name}</Typography>
            <StatusTypography
                className={classes.status}
                variant="button"
                themeType={getThemeType(status)}
            >
                {status}
            </StatusTypography>
        </DialogTitle>
    );
});

SystemdDialogTitle.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default SystemdDialogTitle;