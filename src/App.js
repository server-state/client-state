import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import Dashboard from "./components/dashboard";
import {Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const config = [
    [
        {
            component: 'raw',
            path: 'raw'
        },
        {
            component: 'raw',
            path: 'raw2'
        }
    ]
];

function App() {
    return (
        <>
            <AppBar>
                <Toolbar color={'primary'}>
                    <IconButton edge={'start'} color={'inherit'}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={'h6'}>
                        Server State
                    </Typography>

                </Toolbar>
            </AppBar>
            <Dashboard config={config}/>

            <Button variant="contained" color="primary">
                Test
            </Button>
        </>
    );
}

export default App;
