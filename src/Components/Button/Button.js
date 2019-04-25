import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <button onClick={this.props.handleClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
