import React from 'react';
import ContentRow from './content-row';
import Grid from "@material-ui/core/Grid";

export default class Dashboard extends React.Component {
    render() {
        return <Grid container direction='column'>
            {this.props.config.map((row, i) =>
                <Grid item>
                    <ContentRow row={row} key={i}/>
                </Grid>
            )}
        </Grid>;
    }
}
