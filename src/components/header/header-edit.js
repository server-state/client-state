import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

import SecondaryTooltip from '../secondary-tooltip';


function HeaderEdit({onToggleEdit}) {
    return (
        <SecondaryTooltip title="Edit">
            <IconButton
                color="inherit"
                aria-label="none"
                onClick={onToggleEdit}
            >
                <ViewQuiltIcon />
            </IconButton>
        </SecondaryTooltip>
    );
}

HeaderEdit.propTypes = {
    /**
     * A callback getting called when editing gets toggled
     */
    onToggleEdit: PropTypes.func.isRequired
};

export default HeaderEdit;
