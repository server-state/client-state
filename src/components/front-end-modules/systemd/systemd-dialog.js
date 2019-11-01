import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles, Button,
    Dialog, DialogContent, DialogActions
} from '@material-ui/core';


import SystemdTable from './systemd-table';
import SystemdDialogTitle from './systemd-dialog-title';


// Main Dialog
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    content: {
        padding: 0
    }
}));

function SystemdDialog(props) {
    const classes = useStyles();

    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog
            className={classes.root}
            scroll="paper"

            onClose={handleClose}
            open={props.open}
        >
            {/* Dialog Title with detailed unit name and status */}
            <SystemdDialogTitle name={props.unitName} status={props.unitStatus} />
        
            {/* Generated table from unit infos */}
            <DialogContent className={classes.content} dividers={true}>
                <SystemdTable data={props.unitInfos} />
            </DialogContent>

            {/* Close Action Button */}
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>        
    );
}

SystemdDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    unitName: PropTypes.string.isRequired,
    unitStatus: PropTypes.string.isRequired,
    unitInfos: PropTypes.object
};

export default SystemdDialog;