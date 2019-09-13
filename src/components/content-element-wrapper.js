import React from 'react';
import elementComponents from '../config/component-registry';
import {module} from '../lib/api';
import { Box, Heading, Paragraph, Meter } from 'grommet';

export default class ContentElementWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {data: null, error: null, component: null};

        if (!elementComponents[this.props.element.component]) {
            this.state.error = 'Client-side module not found!';
        } else {
            this.state.component = elementComponents[this.props.element.component];

            module(props.element.path).then((res) => {
                console.log(res); // REMOVE IN PRODUCTION BUILD !!!
                this.setState({data: res.data});
            }).catch((e) => {
                this.setState({error: 'Could not be loaded!'});
                console.warn(e);
            });
        }
    }

    render() {
        if (this.state.data) {
            return <Box flex={true} asis='full' pad='medium' overflow='auto' elevation='small'>
                <Heading level={3}>
                    {this.props.element.path}
                </Heading>
                <this.state.component data={this.state.data} />
            </Box>;
        } else if (this.state.error) {
            return <Box background={'status-error'}>
                <Heading level={3}>
                    Error
                </Heading>
                <Paragraph>
                    {this.state.error}
                </Paragraph>
            </Box>;
        } else {
            return <Meter values={[{value: 60}]}/>; // TODO: Add spinner
        }
    }
}
