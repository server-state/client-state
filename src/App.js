import React from 'react';
import {Grommet, Text} from 'grommet';
import "./styles.scss";

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
      <header className="App-header">
        <Text>
          Welcome to server-state!
        </Text>
      </header>
    </Grommet>
  );
}

export default App;
