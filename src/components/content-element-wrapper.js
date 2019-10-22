import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Divider, Link, LinearProgress, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import elementComponents from '../config/component-registry';
import { module, fullURL } from '../lib/api';
import ElementAvatar from './element-avatar';

export default class ContentElementWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { data: null, error: null, component: null };

        //this.state.error = "Help me please!";
        //this.state.data = "Some weird data.";

        if (!elementComponents[this.props.element.component]) {
            this.state.error = 'Client-side module not found!';
        } else {
            this.state.component = elementComponents[this.props.element.component];

            module(props.element.path).then((res) => {
                console.log(res); // REMOVE IN PRODUCTION BUILD !!!
                this.setState({ data: res.data });
            }).catch((e) => {
                this.setState({ error: 'Could not be loaded!' });
                console.warn(e);
            });
        }
    }

    renderModuleContent() {
        // if everything goes right, give FEM data and render it
        if (this.state.data) {
            return (
                <this.state.component data={this.state.data} minWidth={100}/>
            );

            // if an error occured, render the Error message
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
            <Card>
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

                <Divider light="true" variant="middle" />
                <CardContent>
                    {this.renderModuleContent()}
                </CardContent>
            </Card>
        );
    }
}
