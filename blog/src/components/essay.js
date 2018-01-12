import React, { Component } from 'react';

class Essay extends Component {
  render() {
    const { title, desicription } = this.props
    return(
      <div>
        <h3>{title}</h3>
        <p>{desicription}</p>
      </div>
    )
  }
}
export default Essay;
