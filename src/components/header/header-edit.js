import React from 'react';
import { IconButton } from '@material-ui/core';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

import SecondaryTooltip from '../secondary-tooltip';


export default function HeaderEdit(props) {
    return (
        <SecondaryTooltip title="Edit">
            <IconButton
                color="inherit"
                aria-label="none"
                onClick={props.onToggleEdit}
            >
                <ViewQuiltIcon />
            </IconButton>
        </SecondaryTooltip>
    );
}