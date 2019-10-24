import React from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from './theme';
import Header from './components/header/';
import Dashboard from "./components/dashboard";


const defaultConfig = [
    {
        title: "Dashboard",
        contents: [
            {
                name: "Raw 1",
                component: 'raw',
                path: 'raw',
                width: 12
            },
            {
                name: "Raw 2",
                component: 'raw',
                path: 'raw2',
                width: 6
            },
            {
                name: "Systemd Raw",
                component: 'raw',
                path: 'systemd',
                width: 6,
            },
            {
                name: "System Info Raw",
                component: 'raw',
                path: 'system-info',
                width: 4
            },
            {
                name: "Disk Usage Raw",
                component: 'raw',
                path: 'disk-usage',
                width: 8
            }
        ]
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: defaultConfig,
            dashboards: ['Dashboard', 'Dashboard2']
        };
    }

    updateConfig(config) {
        this.setState({
            config: Object.assign([], this.state.config, config)
        });

        let dashboards = [];

        for (const dashboard of this.state.config) {
            dashboards.push(dashboard.title);
        }

        this.setState({
            dashboards: dashboards
        });

        console.log(JSON.stringify(this.state, null, 2));
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header 
                    dashboards={this.state.dashboards}
                    title={this.state.config[0].title}
                    dense={false}
                    
                    onDrawerSelected={(element) => alert(element)}
                    onToggleEdit={() => console.log('Toggle edit')}
                    onRefresh={() => console.log('Refresh please')}
                    onMenuSelected={(element) => alert(element)}
                />
                <Dashboard config={this.state.config[0]}/>
            </ThemeProvider>
        );
    }
}
