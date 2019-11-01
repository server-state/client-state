import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

import SecondaryTooltip from '../secondary-tooltip';


const useStyles = makeStyles(theme => ({
    refreshIcon: {
        transition: rotate => 
            rotate ? 'transform 1s ease' : '',
        transform: rotate =>
            rotate ? 'rotate(360deg)' : ''
    }
}));

function HeaderRefresh(props) {
    const [rotate, setRotate] = React.useState(false);
    const classes = useStyles(rotate);

    const clicked = () => {
        setRotate(true);
        setTimeout(() => setRotate(false), 1000);
        props.onRefresh();
    };

    return (
        <SecondaryTooltip title="Refresh">
            <IconButton
                color="inherit"
                aria-label="none"
                onClick={clicked}
            >
                <RefreshIcon className={classes.refreshIcon} />
            </IconButton>
        </SecondaryTooltip>
    );
}

HeaderRefresh.propTypes = {
    onRefresh: PropTypes.func.isRequired
};

export default HeaderRefresh;