import React from 'react';
import {Fade, Tooltip} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const ModifiedTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[1],
        color: 'rgba(0, 0, 0, 0.87)'
    }
}))(Tooltip);

/**
 * A custom tooltip
 * @param props
 * @return {*}
 * @constructor
 */
export default function SecondaryTooltip({children, title}) {
    return (
        <ModifiedTooltip
            title={title}
            enterDelay={0}
            TransitionComponent={Fade}
            TransitionProps={{timeout: 600}}
        >
            {children}
        </ModifiedTooltip>
    );
}

SecondaryTooltip.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
