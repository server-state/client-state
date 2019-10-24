import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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


export default function HeaderRefresh(props) {
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