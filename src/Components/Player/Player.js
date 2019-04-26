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
  }

  componentDidMount(){
    fetch(`https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(json => {
      this.setState({hand: json.cards});
    })
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
