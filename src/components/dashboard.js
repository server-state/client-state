import React from 'react';
import { Box, Grid } from "@material-ui/core";
import ContentRow from './content-row';

export default function Dashboard(props) {
    let rows = [];
    let currentRowWidth = 0;
    let currentRow = [];
    for (let content of props.config.contents) {
        if (currentRowWidth + content.width > 12) {
            // Overflow => Start new row
            rows.push(currentRow);
            currentRowWidth = 0;
            currentRow = [];
        }
        console.log(rows,currentRowWidth,currentRow,content);
        currentRow.push(content);
        currentRowWidth += content.width;
    }
    rows.push(currentRow);

    console.log(rows);

    return (
        <Box flexGrow={1} py={1}>
            <Grid container direction={'column'}>
                {rows.map((elements, index) => {
                    return <ContentRow key={index} elements={elements}/>;
                })}
            </Grid>
        </Box>
    );

}
