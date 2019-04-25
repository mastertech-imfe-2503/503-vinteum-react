import React from 'react';
import './App.css';
import Title from '../Title/Title';
import FormPlayers from '../FormPlayers/FormPlayers';
import Player from '../Player/Player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStep: 1,
      names: {
        player1: '',
        player2: ''
      },
      playing: {
        player1: true,
        player2: false
      }
    }
  }

  sortPlayers = () => {
    let random = Math.random();
    if (random > 0.5) {
      return {
        player1: this.state.names.player2,
        player2: this.state.names.player1
      }
    }
    else {
      return {
        player1: this.state.names.player1,
        player2: this.state.names.player2
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
      let names = this.sortPlayers();
      this.setState({
        gameStep: 2,
        names: names
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
      return (
        <div>
          <Player
            playerName={this.state.names.player1}
            playing={this.state.playing.player1}
          />
          <Player
            playerName={this.state.names.player2}
            playing={this.state.playing.player2}
          />
        </div>
      );
    }
    else {
      return <p>Página 3</p>
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        {this.generatePage()}
      </div>
    );
  }
}

export default App;
