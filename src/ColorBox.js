import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let box;
    if (this.props.opacity >= 0.2) {
      let opacity = (this.props.opacity - 0.1);
      box = <ColorBox opacity={opacity} />
    } 
    else {
      box = null;
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {box}
      </div>
    )
  }
  
}
