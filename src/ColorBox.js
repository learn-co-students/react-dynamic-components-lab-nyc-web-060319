import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        {/* your conditional code here! */}
      </div>
    )
  }

  // render() {
  //   const newOpacity = this.props.opacity - 0.1;
  //
  //   if (this.props.opacity >= 0.2) {
  //     return (
  //       <div>
  //         <ColorBox opacity={newOpacity} />
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }
}
