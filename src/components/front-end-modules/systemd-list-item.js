import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles, Avatar, IconButton,
    ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction
} from '@material-ui/core';
import {
    CropFree as CropFreeIcon,
    Info as InfoIcon
} from '@material-ui/icons';

import SystemdBadge from './systemd-badge';
import SystemdDialog from './systemd-dialog';
import { getStatus } from './systemd-mapper';


const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: theme.palette.primary.main
    }
}));

function SystemdListItem(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [name, type] = props.unitName.split('.');
    const status = getStatus(
        props.unitInfos['loadState'],
        props.unitInfos['unitFileState'],
        props.unitInfos['activeState']
    );

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ListItem>
            {/* ListItem Avatar with status badge */}
            <ListItemAvatar>
                <SystemdBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    variant="dot"

                    color={'warning'}
                    size={10}
                >
                    <Avatar className={classes.avatar}>
                        <CropFreeIcon />
                    </Avatar>
                </SystemdBadge>
            </ListItemAvatar>

            {/* ListItem text as unit name and type */}
            <ListItemText
                primary={name}
                secondary={type}
            />

            {/* ListItem Action as open custom Dialog with all information */}
            <ListItemSecondaryAction>
                <IconButton onClick={handleOpen}>
                    <InfoIcon />
                </IconButton>

                <SystemdDialog 
                    open={open}
                    onClose={handleClose}
                    
                    unitName={props.unitName}
                    unitStatus={status}
                    unitInfos={props.unitInfos}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

SystemdListItem.propTypes = {
    unitName: PropTypes.string.isRequired,
    unitInfos: PropTypes.object
};

export default SystemdListItem;