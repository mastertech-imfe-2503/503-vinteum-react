import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
        {this.props.cards.map(
          (item, index) => 
            <Card key={index} alt={item.code} image={item.image} />
        )}
      </div>
    );
  }
}

export default Cards;
