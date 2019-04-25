import React from 'react';
import './Player.css';
import Stats from '../Stats/Stats';
import Cards from '../Cards/Cards';
import Controls from '../Controls/Controls';

class Player extends React.Component{
  render(){
    return (
      <div className="Player">
        <Stats playerStats={this.props.playerData.stats} />
        <Cards/>
        <Controls/>
      </div>
    );
  }
}

export default Player;
