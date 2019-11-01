import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import Header from './components/header/';
import Dashboard from "./components/dashboard";


const defaultConfig = [
    {
        title: "Dashboard",
        contents: [
            {
                name: "Systemd services",
                component: 'systemd',
                //path: 'https://192.168.88.251:4434/api/v1/systemd',
                path: 'systemd',
                width: 12
            },
            {
                name: "Raw 1",
                component: 'rawPretty',
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
        const newConfig = Object.assign([], this.state.config, config);

        let newDashboards = [];
        for (const dashboard of newConfig) {
            newDashboards.push(dashboard.title);
        }

        this.setState({
            config: newConfig,
            dashboards: newDashboards
        });

        console.log(JSON.stringify(this.state, null, 2)); // REMOVE IN PRODUCTION BUILD !!!
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
