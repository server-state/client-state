import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        width: '100%',
        overflowX: 'auto'
    },
    node: {
        position: 'relative'
    }
});

function RawPretty(props) {
    const classes = useStyles();

    const prettyJSON = JSON.stringify(props.data, null, 2);

    return (
        <div className={classes.container}>
            <pre className={classes.node}>
                {prettyJSON}
            </pre>
        </div>
    );
}

RawPretty.propTypes = {
    data: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired
};

export default RawPretty;
