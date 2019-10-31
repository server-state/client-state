import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 300
    }
});

function SystemdTable(props) {
    const classes = useStyles();
    // generate table-rows
    let rows = [];
    for (const property in props.data) {
        rows.push(
            <TableRow key={property}>
                <TableCell component="th" scope="row">
                    {property}
                </TableCell>
                <TableCell>
                    {props.data[property].toString() || " " }
                </TableCell>
            </TableRow>
        );
    }

    return (
        <Table
            className={classes.table}
            
            aria-label="property table">
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
    );
}

SystemdTable.propTypes = {
    data: PropTypes.object,
};

export default SystemdTable;