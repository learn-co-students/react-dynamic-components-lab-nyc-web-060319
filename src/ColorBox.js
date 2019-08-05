import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      let newValue = this.props.opacity - .1;
      let isOverTwo = (this.props.opacity >= .2)
      let returnStatement = null
        if (isOverTwo) {
            returnStatement = <div className= "color-box" style={{opacity: this.props.opacity }}>
             <ColorBox opacity={newValue}/>
              </div>
        }
        return returnStatement
  }
}
