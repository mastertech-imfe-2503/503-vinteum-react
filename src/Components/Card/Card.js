import React from 'react';
import './Card.css';

class Card extends React.Component{
  render(){
    return (
      <div className="Card">
        <img src={this.props.image} alt={this.props.alt}/>
      </div>
    );
  }
}

export default Card;
