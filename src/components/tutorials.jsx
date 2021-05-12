import React from 'react';
import { useSelector } from "react-redux";
import '../css/home.css';
import '../css/tutorials.css';
import { gettutorials } from "../actions/index";

function DisplayHome(props) {
    console.log(props)
    const error = props.tutorials.error
    const tutorial = props.tutorials.list
    console.log(tutorial)
    console.log(error)
    if (error.done === false) {
        console.log(props)
   return(
        <div id="container" style={{ height: '100vh' }}>
            {props.tutorials.list.map(tut => {
                return (
                    <div className='tutorial'>
                        {props.tutorials.list.length}
                        {console.log(tut)}
                    <h2>{tut}</h2>
                    <p>{tut.content}</p>
                </div>
                )
                })}
        </div>
        )
    }
    return (
        <div></div>
    )

}


export default function Tutorials() {
    gettutorials()
  
    const tutorials = useSelector(state => state.tutorials)
    const list = tutorials.list
    console.log(tutorials.list)
    console.log(list);
    console.log(tutorials)
    console.log(tutorials['list']);

    return (
        <div>
        <nav><a href='/'>Anand Ashram</a> freemium</nav>
            
        <div id="container" style={{ height: '100vh' }}> 
       {tutorials.error.done }
                {tutorials.list}
        </div>
        </div>
    )
}

