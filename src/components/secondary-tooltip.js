import React from 'react';
import { Tooltip, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const ModifiedTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[1],
        color: 'rgba(0, 0, 0, 0.87)'
    }
}))(Tooltip);


export default function SecondaryTooltip(props) {
    return (
        <ModifiedTooltip 
            title={props.title}
            enterDelay={0}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
        >
            {props.children}
        </ModifiedTooltip>
    );
}