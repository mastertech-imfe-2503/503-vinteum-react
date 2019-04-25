import React from 'react';
import './Stats.css';

class Stats extends React.Component{
  render(){
    return (
      <div className="Stats">
        <p>{this.props.playerStats.name}</p>
        <p>{this.props.playerStats.score}</p>
      </div>
    );
  }
}

export default Stats;
