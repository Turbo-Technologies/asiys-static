import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h2 style={{flexGrow:1}}>Anand Ashram</h2>
          <button className='btn btn-primary'>Menu</button>
        </nav>
        <div id='heroimage'>
          <h3>Learn Yoga the best way.</h3>
        </div>
        <div id='section'>
          <div>Hello</div>
          <div>M</div>
        </div>
      </div>
    )
  }
}
