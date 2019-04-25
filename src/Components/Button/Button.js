import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <button onClick={this.props.handleClick}>Começar</button>
      </div>
    );
  }
}

export default Button;
