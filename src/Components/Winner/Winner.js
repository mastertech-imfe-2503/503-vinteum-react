import React from 'react';
import './Winner.css';

class Winner extends React.Component{
  render(){
    return (
      <div className="Winner">
        {this.props.winner}
      </div>
    );
  }
}

export default Winner;
