
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Chip, Button, ListSubheader, ListItemSecondaryAction, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        float: 'right',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    container: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
    },
    state: {
        ...theme.Button,
        width: '80px',
        textAlign: 'center',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        border: '1px solid'
    },
    running: {
        color: theme.palette.success.main,
        backgroundColor: 'inherit',
        borderColor: theme.palette.success.main
    },
    warning: {
        color: theme.palette.warning.main,
        backgroundColor: 'inherit',
        borderColor: theme.palette.warning.main
    },
    failed: {
        color: theme.palette.failed.main,
        backgroundColor: 'inherit',
        borderColor: theme.palette.failed.main
    },
    listItemText: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
        whiteSpace: 'nowrap'
    },
    h6: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
        whiteSpace: 'nowrap'
    }
}));

export default function Systemd(props) {
    const classes = useStyles();

    return (
        <div>
            <List className={classes.root} disablePadding={true} dense={true}>
                <ListItem>
                    {/* <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar> */}

                    <ListItemText
                        disableTypography
                        className={classes.listItemText}

                        primary={
                            <div className={classes.container}>
                                <Typography variant="h6" className={classes.h6}>
                                    lightdm.service with a very long name
                                </Typography>
                                <Typography className={[classes.state, classes.running]}>
                                    Running
                                </Typography>
                            </div>
                        }
                    // secondary={
                    //     <Chip size="small" variant="outlined" label="Testest" color="primary" />
                    // }
                    />

                    <ListItemSecondaryAction>

                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    {/* <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar> */}

                    <ListItemText
                        disableTypography
                        className={classes.listItemText}

                        primary={
                            <Typography variant="h6" className={classes.h6}>
                                system.slice
                            </Typography>
                        }
                    // secondary={
                    //     <Chip size="small" variant="outlined" label="Testest" color="primary" />
                    // }
                    />

                    <ListItemSecondaryAction>
                        <Typography className={[classes.state, classes.failed]}>
                            Failed
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    {/* <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar> */}

                    <ListItemText
                        disableTypography
                        className={classes.listItemText}

                        primary={
                            <Typography variant="h6" className={classes.h6}>
                                home.mount
                            </Typography>
                        }
                    // secondary={
                    //     <Chip size="small" variant="outlined" label="Testest" color="primary" />
                    // }
                    />

                    <ListItemSecondaryAction>
                        <Typography className={[classes.state, classes.warning]}>
                            Starting
                        </Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>

            <Button className={classes.button} size="small">
                Show more
            </Button>
        </div>
    );
}