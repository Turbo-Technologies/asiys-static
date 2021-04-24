import React, { Component } from 'react';
import './css/App.css'
import Menu from "./Menu.jsx";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {menuopen:false, menu:'', displaymain:'block'}
    this.openmenu = this.openmenu.bind(this);
  }

  openmenu(){
    if(this.state.menuopen===false) {
      this.setState({displaymain:'none'})
      this.setState({menu:<Menu></Menu>})
      this.setState({menuopen:true})
    }
    else {
      this.setState({displaymain:'block'})
      this.setState({menu:''})
      this.setState({menuopen:false})
    }
  }

  render() {
    return (
      <div>
        <nav>
          <h2 style={{flexGrow:1}}>Anand Ashram</h2>
          <button className='btn btn-primary' onClick={this.openmenu}>Menu</button>
        </nav>
        {this.state.menu}
        <main style={{display:this.state.displaymain}}>
        <div id='heroimage'>
          <h3>Learn Yoga the best way.</h3>
        </div>
        <div id='section'>
          <div>Hello</div>
          <div>M</div>
        </div>
        </main>
      </div>
    )
  }
}
