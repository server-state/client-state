import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles, makeStyles, Typography, Button,
    Dialog, DialogTitle as MuiDialogTitle, DialogActions,
    Table, TableHead, TableBody, TableRow, TableCell
} from '@material-ui/core';


// Custom DialogTitle
const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    name: {

    },
    status: {
        paddingLeft: theme.spacing(2)
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { name, status, classes, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography className={classes.name} variant="h6">{name}</Typography>
            <Typography className={classes.status} variant="subtitle1">{status}</Typography>
        </MuiDialogTitle>
    );
});


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 300
    }
}));

function SystemdDialog(props) {
    const classes = useStyles();

    const handleClose = () => {
        props.onClose();
    };

    let rows = [];
    for (const property in props.unitInfos) {
        rows.push(
            <TableRow key={property}>
                <TableCell component="th" scope="row">{property}</TableCell>
                <TableCell>{props.unitInfos[property]}</TableCell>
            </TableRow>
        );
    }

    return (
        <Dialog
            className={classes.root}
            onClose={handleClose}
            open={props.open}
        >
            {/* Dialog Title with detailed unit name and status */}
            <DialogTitle name={props.unitName} status={props.unitStatus} />
        
            {/* Generated table from unit infos */}
            <Table className={classes.table} aria-label="property table">
                <TableHead>
                    <TableRow>
                        <TableCell>Property</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows}
                </TableBody>
            </Table>

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