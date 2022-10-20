import React, { useState } from 'react';

export default class Square extends React.Component {
  constructor(props, row, col, parent) {
    super(props)
    this.state = {
      wall: false,
      row: row,
      col: col,
      parent: parent
    }
  }

  get row() {
    return this.state.row
  }

  get col() {
    return this.state.row
  }

  get parent() {
    return this.state.parent
  }

  set_parent(parent) {
    this.parent = parent
  }
  
  render() {
    return (
      <span className="square" style={{backgroundColor: this.state.wall ? 'black': 'white'}} onClick={() => this.setState({wall: !this.state.wall})}>
      </span>
    );
  }
}

