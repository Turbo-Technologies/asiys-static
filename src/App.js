import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1 style={{flexGrow:1}}>Anand Ashram</h1>
          <button>Menu</button>
        </nav>
        <div id='heroimage'>
          <h3>Learn Yoga the best way.</h3>
        </div>
        <div></div>
      </div>
    )
  }
}
