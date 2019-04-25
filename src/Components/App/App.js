import React from 'react';
import './App.css';
import Title from '../Title/Title';
import FormPlayers from '../FormPlayers/FormPlayers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStep: 1,
      names: {
        player1: '',
        player2: ''
      }
    }
  }

  handlePlayerNameChange = event => {
    this.setState({
      names: {
        ...this.state.names,
        [event.target.name]: event.target.value
      }
    });
  }

  handleClickFormButton = () => {
    if (this.state.names.player1 && this.state.names.player2) {
      this.setState({
        gameStep: 2
      });
    }
  }

  generatePage = () => {
    if (this.state.gameStep === 1) {
      return (
        <FormPlayers
          handleClickButton={this.handleClickFormButton}
          playerNames={this.state.names}
          handlePlayerNameChange={this.handlePlayerNameChange}
        />
      )
    }
    else if (this.state.gameStep === 2) {
      return <p>Página 2</p>
    }
    else {
      return <p>Página 3</p>
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        { this.generatePage() }
      </div>
    );
  }
}

export default App;
