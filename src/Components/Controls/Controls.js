import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <Button handleClick={this.props.drawCard} text="Mais uma!"/>
        <Button handleClick={this.props.handleStop} text="Parar"/>
      </div>
    );
  }
}

export default Controls;
