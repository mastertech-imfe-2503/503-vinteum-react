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
      deckId: null,
      player1: {
        playing: true,
        stats: {
          name: '',
          score: 0
        }
      },
      player2: {
        playing: false,
        stats: {
          name: '',
          score: 0
        }
      }
    }
  }

  componentDidMount(){
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/")
    .then(response => response.json())
    .then(json => {
      this.setState({deckId: json.deck_id});
    })
  }

  updateScore = (score, player) => {
    let newState = this.state;
    newState[player].stats.score = score;
    this.setState(newState);
  }

  sortPlayers = () => {
    let random = Math.random();
    if (random > 0.5) {
      return {
        player1: this.state.player2.stats.name,
        player2: this.state.player1.stats.name
      }
    }
    else {
      return {
        player1: this.state.player1.stats.name,
        player2: this.state.player2.stats.name
      }
    }
  }

  handlePlayerNameChange = event => {
    let newState = this.state;
    newState[event.target.name].stats.name = event.target.value;
    this.setState(newState);
  }

  handleClickFormButton = () => {
    if (this.state.player1.stats.name &&
      this.state.player2.stats.name) {

      let players = this.sortPlayers();
      let newState = this.state;

      newState.gameStep = 2;
      newState.player1.stats.name = players.player1;
      newState.player2.stats.name = players.player2;

      this.setState(newState);
    }
  }

  generatePage = () => {
    if (this.state.gameStep === 1) {
      return (
        <FormPlayers
          handleClickButton={this.handleClickFormButton}
          playerNames={{
            player1: this.state.player1.stats.name,
            player2: this.state.player2.stats.name
          }}
          handlePlayerNameChange={this.handlePlayerNameChange}
        />
      )
    }
    else if (this.state.gameStep === 2) {
      return (
        <div>
          <Player
            playerData={this.state.player1}
            deckId={this.state.deckId}
            playerId="player1"
            updateScore={this.updateScore}
          />
          <Player
            playerData={this.state.player2}
            deckId={this.state.deckId}
            playerId="player2"
            updateScore={this.updateScore}
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
