import React, { Component } from 'react';
import './css/App.css';
import ashramboys from './anandashram.jpg';
import heroimage from './anandimage.jpg';

export default class App extends Component {
  

  render() {
    return(

    <div id='container'>
      <nav><h1>Anand Ashram</h1> freemium</nav>
      <div id="main">
        <img src={heroimage} alt=""/>
        <h1>Anand Ashram</h1>
        <p id='first'>Learn Yoga anytime anywhere</p>
        <p id='second'>Thousands of tutorials</p>
        <p id='third'>Absolutely free</p>
        <button className='joinus'>Join now</button>
      </div>
      <div className="images">
        <h1>Come and experience the bliss of yoga</h1>
        <img src={ashramboys} alt=""/>
      </div>

      <p>  Turbo Technologies</p>
    </div>
    )
  }
}
