import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navabar from './navbar'

import heroimage from '../images/anandimage.jpg';
import Carousel from './Carousel'

export default function home() {
    return (
      <>
        <Carousel/>
        <h2 className='text-center' style={{height:'7vh'}}>Learn Yoga the better way</h2>
        {/* <div className="row bg-dark text-center" style={{color:'white', height:'43vh'}}>
          <div className="col-sm-12 col-lg-4 col-md-12 col-xs-12">
           <h4> Online Classes anytime, anywhere</h4>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-12 col-xs-12">
            <h4>Classes from certified yoga trainers</h4>
          
          </div>
          <div className="col-sm-12 col-lg-4 col-md-12 col-xs-12">
            <h4>Best online and offline classes</h4>
          </div>
        </div> */}
        <img src={heroimage} alt="" style={{ width:'100%'}}/>
      </>      
      
    )
}
