import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box, Container, Grid } from "@material-ui/core";

import ContentRow from './content-row/content-row';


const useStyles = makeStyles({
    grid: {
        flexWrap: 'nowrap'
    }
});

function Dashboard(props) {
    const classes = useStyles();

    // Use a memo as this operation is kind of complex and shouldn't get executed unnecessarily
    // Therefore, we only recalculate when the contents have actually changed
    const rows = useMemo(() => {
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
            currentRow.push(content);
            currentRowWidth += content.width;
        }
        rows.push(currentRow);

        return rows;
    }, [props.config.contents]);

    return (
        <Container maxWidth={'md'}>
            <Box flexGrow={1} py={1}>
                <Grid className={classes.grid} container direction={'column'}>
                    {rows.map((elements, index) => {
                        return <ContentRow key={index} elements={elements}/>;
                    })}
                </Grid>
            </Box>
        </Container>
    );
}

Dashboard.propTypes = {
    config: PropTypes.object.isRequired
};

export default Dashboard;
