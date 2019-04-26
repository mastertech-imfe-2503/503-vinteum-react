import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

class Cards extends React.Component{
  buildCards = () => {
    let newCards = [];
    for(let index in this.props.cards){
      newCards.push(<Card key={index} alt={this.props.cards[index].code} image={this.props.cards[index].image}/>)
    }
    return newCards;
  }

  render(){
    return (
      <div className="Cards">
        {this.buildCards()}
      </div>
    );
  }
}

export default Cards;
