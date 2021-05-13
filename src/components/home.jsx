import React from 'react'
import '../css/home.css'
import heroimage from '../images/anandimage.jpg';
import ashramboys from '../images/anandashram.jpg'

export default function home() {
    return (
            
      <div id='container'>
        <nav><a href='/'>Anand Ashram</a> freemium</nav>
        <div id="main">
          <img src={heroimage} alt="" />
          <h1>Anand Ashram</h1>
          <p id='first'>Learn Yoga anytime anywhere</p>
          <p id='second'>Thousands of tutorials</p>
          <button className='joinus'>Join now</button>
        </div>
        <div className="images">
          <h1>Come and experience the bliss of yoga</h1>
          <img src={ashramboys} alt="" />
        </div>
        <a href="/tutorial/">
        <button className="joinus">All Tutorials</button>
        
        </a>
        <p style={{color:'whitesmoke'}}>  Turbo Technologies</p>
      </div>
    )
}
