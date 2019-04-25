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
            <input onChange={this.props.handlePlayerNameChange}value={this.props.playerNames.player1} placeholder="Digite o nome" name="player1" type="text" maxLength="15" />
          </div>
          <div>
            <label htmlFor="p2">2:</label>
            <input onChange={this.props.handlePlayerNameChange} value={this.props.playerNames.player2}placeholder="Digite o nome" name="player2" type="text" maxLength="15" />
          </div>
          <Button text="Começar" handleClick={this.props.handleClickButton}/>
        </div>
      </div>
    );
  }
}

export default FormPlayers;
