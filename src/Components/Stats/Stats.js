import React from 'react';
import './Stats.css';

class Stats extends React.Component{
  render(){
    return (
      <div className="Stats">
        <p>{this.props.playerName}</p>
        <p>0</p>
      </div>
    );
  }
}

export default Stats;
