import React from 'react';
import elementComponents from '../config/component-registry';
import {module} from '../lib/api';
import Card from "@material-ui/core/Card";
import {CircularProgress} from "@material-ui/core";

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
            return <Card>
                <h3>
                    {this.props.element.path}
                </h3>
                <this.state.component data={this.state.data}/>
            </Card>;
        } else if (this.state.error) {
            return (
                <Card>
                    <h3>
                        Error
                    </h3>
                    <p>
                        {this.state.error}
                    </p>
                </Card>
            );
        } else {
            return <CircularProgress />; // TODO: Add spinner
        }
    }
}
