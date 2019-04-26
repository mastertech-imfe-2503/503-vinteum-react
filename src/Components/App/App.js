import React from 'react';
import './App.css';
import Title from '../Title/Title';
import FormPlayers from '../FormPlayers/FormPlayers';
import Player from '../Player/Player';
import Winner from '../Winner/Winner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasStarted: false,
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
      },
      winner: ''
    }
  }

  componentDidMount() {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/")
      .then(response => response.json())
      .then(json => {
        this.setState({ deckId: json.deck_id });
      })
  }

  determineWinner = () => {
    let score1 = Math.abs(this.state.player1.stats.score - 21);
    let score2 = Math.abs(this.state.player2.stats.score - 21);

    if(score1 === score2){
      return "empate";
    }
    else if(score1 < score2){
      return `vencedor: ${this.state.player1.stats.name}`;
    }
    else{
      return `vencedor: ${this.state.player2.stats.name}`;
    }
  }

  updateScore = (score, player) => {
    let newState = this.state;
    newState[player].stats.score = score;

    if (player === "player1" && score >= 21) {
      newState.player1.playing = false;
      newState.player2.playing = true;
    }
    else if (player === "player2" && score >= 21) {
      newState.winner = this.determineWinner();
      newState.player2.playing = false;
    }

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

      newState.hasStarted = true;
      newState.player1.stats.name = players.player1;
      newState.player2.stats.name = players.player2;

      this.setState(newState);
    }
  }

  changePlayer = () => {
    let newState = this.state;

    newState.player1.playing = false;
    newState.player2.playing = true;

    this.setState(newState);
  }

  endGame = () => {
    let newState = this.state;

    newState.player2.playing = false;
    newState.winner = this.determineWinner();

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Title />
        {!this.state.hasStarted 
        ?
         <FormPlayers
         handleClickButton={this.handleClickFormButton}
         playerNames={{
           player1: this.state.player1.stats.name,
           player2: this.state.player2.stats.name
         }}
         handlePlayerNameChange={this.handlePlayerNameChange}
       /> 
       :
       <div>
          <Player
            playerData={this.state.player1}
            deckId={this.state.deckId}
            playerId="player1"
            updateScore={this.updateScore}
            handleStop={this.changePlayer}
          />
          <Player
            playerData={this.state.player2}
            deckId={this.state.deckId}
            playerId="player2"
            updateScore={this.updateScore}
            handleStop={this.endGame}
          />
          <Winner winner={this.state.winner}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
