import React from 'react';
import './Player.css';
import Stats from '../Stats/Stats';
import Cards from '../Cards/Cards';
import Controls from '../Controls/Controls';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      hand: []
    }

    this.valueMap = {
      "ACE": 1,
      "QUEEN": 10,
      "JACK": 10,
      "KING": 10
    }
  }

  componentDidMount(){
    fetch(`https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(json => {
      this.setState({hand: json.cards});
      this.calculateScore();
    })
  }

  calculateScore = () => {
    let score = 0;
    for(let card of this.state.hand){
      score += (this.valueMap[card.value] || parseInt(card.value));
    }
    this.props.updateScore(score, this.props.playerId);
  }

  render(){
    return (
      <div className="Player">
        <Stats playerStats={this.props.playerData.stats} />
        <Cards cards={this.state.hand}/>
        <Controls/>
      </div>
    );
  }
}

export default Player;
