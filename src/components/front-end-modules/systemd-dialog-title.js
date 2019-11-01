import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, Typography, DialogTitle, Chip } from '@material-ui/core';

import { getThemeType } from './systemd-mapper';


// Simple status chipthat displays 
// the text color based on the given theme
const SystemdChip = withStyles(theme => ({
    root: {
        borderColor: props => theme.palette[props.themeType].main,
        color: props => theme.palette[props.themeType].main
    }
}))(({ classes, themeType, ...other }) => (
    <Chip classes={{ root: classes.root }} {...other} />
));


// Custom Dialog title with unit name and current status
const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        //alignItems: 'center'
        // justifyContent: 'space-between'
    },
    name: {
        paddingRight: theme.spacing(2),
    }
}));

function SystemdDialogTitle(props) {
    const { name, status, ...other } = props;
    const classes = useStyles();

    return (
        <DialogTitle disableTypography className={classes.root} {...other}>
            <Typography className={classes.name} variant="h6">
                {name}
            </Typography>
            <SystemdChip 
                themeType={getThemeType(status)} variant="outlined"
                label={status} 
            />
        </DialogTitle>
    );
}

SystemdDialogTitle.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default SystemdDialogTitle;