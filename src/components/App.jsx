
import React from 'react';
import Tutorials from './tutorials.jsx';
import {Switch, Route} from 'react-router-dom';
import home from './home';
import about from './about';
import Tutorialdetail from "./tutorialdetail";
import Register from './register.jsx'
import Dashboard from './dashboard'
import Navabar from './navbar'
import '../css/app.css'
import Error from './erorr'
import Login from './login'

export default function App() {
  return (
    <main>
      <Navabar/>
      <Switch>
        <Route path='/' component={home} exact/>
         
        <Route path='/about' component={about} exact/>
        <Route path='/tutorial/' component={Tutorials} exact/>
        <Route path='/tutorial/:id/' component={Tutorialdetail}/> 

        <Route path='/dashboard/' component={Dashboard}/> 
        <Route path='/register/' component={Register} exact/>

        <Route path='/login/' component={Login}/>
          <Route component={Error}/>
        
        
        
      </Switch>
    </main>
  )
}
