import React from 'react';
import {Grommet, Text} from 'grommet';
import "./styles.scss";
import Dashboard from './components/dashboard';

const config = [
  [
    {
      component: 'raw',
      path: 'raw'
    }
  ],
  [
    {
      component: 'raw',
      path: 'raw2'
    }
  ]
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
      <Dashboard config={config}></Dashboard>
    </Grommet>
  );
}

export default App;
