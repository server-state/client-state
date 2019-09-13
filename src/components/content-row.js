import React from 'react';
import { Box } from 'grommet';
import ContentElementWrapper from './content-element-wrapper';

export default class ContentRow extends React.Component {
    render() {
        return <Box direction='row' pad='small' gap='small'>
            {this.props.row.map((element, i) => <ContentElementWrapper element={element} key={i} />)}
        </Box>;
    }
}
