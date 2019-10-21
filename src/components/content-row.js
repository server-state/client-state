import React from 'react';
import ContentElementWrapper from './content-element-wrapper';
import Grid from "@material-ui/core/Grid";

export default class ContentRow extends React.Component {
    render() {
        return <Grid container spacing={2} direction='row' pad='small' gap='small'>
            {this.props.row.map((element, i) =>
                <Grid item>
                    <ContentElementWrapper element={element} key={i}/>
                </Grid>
            )}
        </Grid>;
    }
}
