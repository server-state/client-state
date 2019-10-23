import React from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from './theme';
import Header from './components/header';
import Dashboard from "./components/dashboard";


const config = [
    {
        title: "Dashboard",
        contents: [
            {
                name: "Raw Element 1",
                component: 'raw',
                path: 'raw',
                width: 12
            },
            {
                name: "Raw Element 2",
                component: 'raw',
                path: 'raw2',
                width: 6
            },
            {
                name: "Law Element 1",
                component: 'raw',
                path: 'raw',
                width: 6,
            },
            {
                name: "Law Element 2",
                component: 'raw',
                path: 'raw2',
                width: 4
            },
            {
                name: "ßaw Element 2",
                component: 'raw',
                path: 'raw2ß',
                width: 8
            }
        ]
    }
];

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header title={config[0].title}/>
                <Dashboard config={config[0]}/>
            </ThemeProvider>
        );
    }
}
