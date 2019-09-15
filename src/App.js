import React from 'react';
import {Box, Button, Grommet, Heading} from 'grommet';
import "./styles.scss";
import Dashboard from './components/dashboard';
import {Refresh, SettingsOption} from "grommet-icons";
import PreferencesPopup from "./components/preferences";

import theme from './config/server-state-alt.theme';

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
    ],
    [
        {
            component: 'lineChart',
            path: 'xy'
        },
        {
            component: 'treeMap',
            path: 'hierarchical'
        }
    ]
];

function App() {
    const [preferencesOpen, setPreferencesOpen] = React.useState();
    return (
        <Grommet theme={theme}>
            <Box>
                <Box align="center" justify="between" direction="row" flex={false} elevation='small'
                     pad="small">
                    <PreferencesPopup open={preferencesOpen} onClose={() => setPreferencesOpen(false)}/>
                    <Heading margin={'medium'} size={'small'}>
                        Server State
                    </Heading>
                    <Box align="center" justify="center" pad="small" direction="row" gap="small">
                        <Button label="Preferences" onClick={() => setPreferencesOpen(true)} icon={<SettingsOption/>}/>
                        <Button label="Refresh" icon={<Refresh/>}/>
                    </Box>
                </Box>
                <Box align={'center'}>
                    <Dashboard config={config}/>
                </Box>
            </Box>
        </Grommet>
    );
}

export default App;
