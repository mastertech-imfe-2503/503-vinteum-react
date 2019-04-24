import React from 'react';
import './App.css';
import Title from '../Title/Title';
import FormPlayers from '../FormPlayers/FormPlayers';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <FormPlayers />
      </div>
    );
  }
}

export default App;
