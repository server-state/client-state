import React from 'react';
import {
    makeStyles,
    List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction,
    Avatar,
    IconButton
} from '@material-ui/core';
import {
    SettingsApplications as SettingsApplicationsIcon,
    ChatOutlined as ChatOutlinedIcon,
    Feedback as FeedbackIcon
} from '@material-ui/icons';

import SystemdBadge from './systemd-badge';


const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: theme.palette.primary.main
    },
    text: {
        marginRight: theme.spacing(2),
        wordBreak: 'break-all'
    }
}));


export default function Systemd(props) {
    const classes = useStyles();
    
    return (
        <List disablePadding>
            <ListItem>
                <ListItemAvatar>
                    <SystemdBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        variant="dot"

                        color={'error'}
                        size={12}
                    >
                        <Avatar className={classes.avatar}>
                            <SettingsApplicationsIcon />
                        </Avatar>
                    </SystemdBadge>
                </ListItemAvatar>

                <ListItemText
                    primary={
                        'lightdm'
                    }

                    secondary={
                        'service'
                    }
                />

                <ListItemSecondaryAction>
                    <IconButton>
                        <FeedbackIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <SystemdBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        variant="dot"

                        color={'success'}
                        size={12}
                    >
                        <Avatar className={classes.avatar}>
                            <SettingsApplicationsIcon />
                        </Avatar>
                    </SystemdBadge>
                </ListItemAvatar>

                <ListItemText
                    className={classes.text}
                    primary={
                        'Service_with_a_very_long_name_lol_tick'
                    }

                    secondary={
                        'service'
                    }
                />

                <ListItemSecondaryAction>
                    <IconButton>
                        <ChatOutlinedIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}