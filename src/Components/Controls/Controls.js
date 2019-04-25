import React from 'react';
import './Controls.css';
import Button from '../Button/Button';

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <Button text="Mais uma!"/>
        <Button text="Parar"/>
      </div>
    );
  }
}

export default Controls;
