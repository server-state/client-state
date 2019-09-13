import React from 'react';
import {Box, Grommet} from 'grommet';
import "./styles.scss";
import Dashboard from './components/dashboard';

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
];

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

function App() {
    return (
        <Grommet theme={theme}>
            <Box align={'center'}>
                <Dashboard config={config}/>
            </Box>
        </Grommet>
    );
}

export default App;
