import React from 'react';
import {Box, Button, Grommet, Heading} from 'grommet';
import "./styles.scss";
import Dashboard from './components/dashboard';
import {Refresh, SettingsOption} from "grommet-icons";
import PreferencesPopup from "./components/preferences";

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

let theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

theme = {
    "name": "server-state",
    "rounding": 4,
    "spacing": 24,
    "global": {
        "colors": {
            "brand": "#b3b3b3",
            "accent-1": "#008575",
            "accent-2": "#008575",
            "accent-3": "#008575",
            "accent-4": "#008575",
            "neutral-1": "#e6e6e6",
            "neutral-2": "#b3b3b3",
            "neutral-3": "#808080",
            "neutral-4": "#000"
        },
        "font": {
            "family": "Libre Franklin",
            size: '14px',
            height: '20px',
        }
    }
};

function App() {
    const [preferencesOpen, setPreferencesOpen] = React.useState();
    return (
        <Grommet theme={theme}>
            <Box>
                <Box align="center" justify="between" direction="row" flex={false} elevation='medium'
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
