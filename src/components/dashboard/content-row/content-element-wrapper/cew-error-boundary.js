import * as React from "react";
import PropTypes from 'prop-types';

export default class CEWErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.props.onError(error);
    }

    render() {
        return this.props.children;
    }
}

CEWErrorBoundary.propTypes = {
    onError: PropTypes.func
};

