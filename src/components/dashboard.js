import React from 'react';
import { Box, Grid } from "@material-ui/core";
import ContentRow from './content-row';

export default function Dashboard(props) {
    return (
        <Box flexGrow={1}>
            <Grid container direction={'column'}>
                {props.config.rows.map((row, index) =>
                    <ContentRow row={row} key={index} />
                )}
            </Grid>
        </Box>
    );

}
