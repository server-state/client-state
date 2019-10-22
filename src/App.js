import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import Header from './components/header';
import Dashboard from "./components/dashboard";


const config = [
    {
        title: "Dashboard",
        rows: [
            [
                {
                    name: "Raw Element 1",
                    component: 'raw',
                    path: 'raw',
                    fullWidth: true
                },
                {
                    name: "Raw Element 2",
                    component: 'raw',
                    path: 'raw2'
                },
                {
                    name: "Law Element 1",
                    component: 'raw',
                    path: 'raw',
                    fullWidth: true
                },
                {
                    name: "Law Element 2",
                    component: 'raw',
                    path: 'raw2'
                }
            ],
            [
                {
                    name: "aw Element 1",
                    component: 'raw',
                    path: 'raw',
                    fullWidth: true
                },
                {
                    name: "aw Element 2",
                    component: 'raw',
                    path: 'raw2'
                },
                {
                    name: "Äaw Element 1",
                    component: 'raw',
                    path: 'raw',
                    fullWidth: true
                },
                {
                    name: "ßaw Element 2",
                    component: 'raw',
                    path: 'raw2ß'
                }
            ]
        ]
    }
];

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header title={config[0].title} />
                <Dashboard config={config[0]}/>
            </ThemeProvider>
        );
    }
}
