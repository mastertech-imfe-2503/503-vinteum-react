import React from 'react';
import './FormPlayers.css';
import Button from '../Button/Button';

class FormPlayers extends React.Component {
  render() {
    return (
      <div className="FormPlayers">
        <div className="first-page center-column">
          <p>JOGADORES:</p>
          <div>
            <label htmlFor="p1">1:</label>
            <input name="p1" type="text" maxLength="15" />
          </div>
          <div>
            <label htmlFor="p2">2:</label>
            <input name="p2" type="text" maxLength="15" />
          </div>
          <Button />
        </div>
      </div>
    );
  }
}

export default FormPlayers;
