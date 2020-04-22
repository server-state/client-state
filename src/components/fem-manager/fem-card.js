import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {ChatBubble, Code, GetApp, Web} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import * as registry from '../../lib/fem-registry-client';

export default function FEMCard() {
    registry.search();

    return (
        <Card style={{width: 360}}>
            <CardMedia
                image={'ABC'} style={{height: '100px', background: 'gray'}}
            ></CardMedia>
            <CardContent>
                <Typography variant={'h5'}>Test</Typography>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A libero modi nemo perspiciatis quisquam! Aliquid, facilis similique! Assumenda eos, explicabo fugiat labore modi nulla odit quos veritatis. Accusamus, enim, nostrum.</p>
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Web />
                        </ListItemIcon>
                        <ListItemText primary={'Website'} secondary={'https://fjwoejf'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ChatBubble />
                        </ListItemIcon>
                        <ListItemText primary={'Support'} secondary={'jifjfe@jofewjf.de'} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Code />
                        </ListItemIcon>
                        <ListItemText primary={'Source Code'} secondary={'https://github.com/ajoi/fejw'} />
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <Button startIcon={<GetApp />}>
                    Install</Button>
            </CardActions>
        </Card>
    )
}
