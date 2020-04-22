import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';

import theme from './theme';
import Header from './components/header/';
import Dashboard from "./components/dashboard/dashboard";
import FEMCard from "./components/fem-manager/fem-card";

import {
    BrowserRouter as Router,
    Route,
    useParams,
    Switch
} from 'react-router-dom';
import FEMGrid from "./components/fem-manager/fem-grid";

const defaultConfig = [
    {
        title: "Dashboard",
        contents: [
            {
                name: "Linux Raid Static",
                component: "linuxRaid",
                path: 'linux-raid',
                width: 12
            },
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
            },
            {
                name: 'Tablelike',
                component: 'table',
                path: 'table',
                width: 12
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
    }

    render() {
        const {dashboards, config} = this.state;

        function DashboardRoute(props) {
            const params = useParams();
            const dashboard = props.config.find(db => db.title === params.dashboardKey);

            return <div>
                {dashboard ? <Dashboard config={dashboard}/> : 'Not found'}
            </div>
        }

        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Header
                        dashboards={dashboards}
                        dashboardTitle={config[0].title}
                        dense={false}

                        onDrawerSelected={alert}
                        onToggleEdit={() => console.log('Toggle edit')}
                        onRefresh={() => console.log('Refresh please')}
                        onMenuSelected={alert}
                    />
                    {/*<FEMCard></FEMCard>*/}
                    <Switch>
                        <Route path={'/dashboard/:dashboardKey'}>
                            <DashboardRoute config={config} />

                        </Route>
                        <Route path={'/fem-manager'}>
                            <FEMGrid query={'a'} />
                            {/*<FEMCard></FEMCard>*/}
                        </Route>
                        <Route path={'/preferences'}>
                            Preferences will go here
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}
