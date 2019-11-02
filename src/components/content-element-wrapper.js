import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography, Divider, Link, IconButton, LinearProgress,
    Card, CardHeader, CardContent
} from '@material-ui/core';
import {
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

import elementComponents from '../config/component-registry';
import { module, fullURL } from '../lib/api';
import ElementAvatar from './element-avatar';


class ContentElementWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { data: null, error: null, component: null };

        if (!elementComponents[this.props.element.component]) {
            this.state.error = 'CBM not found!';
        } else {
            this.state.component = elementComponents[this.props.element.component];

            module(props.element.path).then((res) => {
                this.setState({ data: res.data });
            }).catch((e) => {
                this.setState({ error: 'Data could not be loaded!' });
                console.warn(e);
            });
        }
    }

    renderModuleContent() {
        // if everything goes right, give FEM data and render it
        if (this.state.data) {
            return (
                <this.state.component.component data={this.state.data} minWidth={100}/>
            );

        // if an error occurred, render the Error message
        } else if (this.state.error) {
            return (
                <>
                    <Typography variant={'h5'} color={'error'}>
                        Error
                    </Typography>
                    <Typography variant={'body1'} color={'error'}>
                        {this.state.error}
                    </Typography>
                </>
            );
        // else render a Linear Indeterminate
        } else {
            return (<LinearProgress />);
        }
    }

    render() {
        const name = this.props.element.name;
        const path = this.props.element.path;

        return (
            <Card style={{'height': '100%'}}>
                <CardHeader
                    avatar={
                        <ElementAvatar name={name} />
                    }
                    action={
                        <IconButton aria-label="expand">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.element.name}
                    subheader={
                        <Link href={fullURL(path)} color={'inherit'}>
                            {path}
                        </Link>
                    } />

                <Divider light variant="middle" />
                <CardContent>
                    {this.renderModuleContent()}
                </CardContent>
            </Card>
        );
    }
}

ContentElementWrapper.propTypes = {
    element: PropTypes.object.isRequired
};

export default ContentElementWrapper;
