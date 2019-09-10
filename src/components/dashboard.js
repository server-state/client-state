import React from 'react';
import { Box } from 'grommet';
import ContentRow from './content-row';

export default class Dashboard extends React.Component {
    render() {
        return <Box direction='column' pad='small' border='all'>
            {this.props.config.map((row, i) => <ContentRow row={row} key={i} />)}
        </Box>;
    }
}