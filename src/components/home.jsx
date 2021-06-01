import React from 'react'
import '../css/home.css'
import heroimage from '../images/anandashram.jpg'

export default function home() {
    return (
      <>
       <img src={heroimage} alt="" id='hero'/>
       <p className='hero-paragraph'>
         <span className='hero-text'>
         Come, fall in love with nature
         </span>
        </p>
        
        
        
      </>      
      
    )
}
