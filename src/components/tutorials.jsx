import React, {useState} from 'react';
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
        <div id="container">
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
    const tutorials = useSelector(state => state.tutorials.list)
    const error = useSelector(state => state.tutorials.error.message)
    

    return (
        <div>
        <nav><a href='/'>Anand Ashram</a> freemium</nav>
            
        <div id="container"> 
       
                {tutorials.map(tut => {
                    return (<div className="tutorial">
                        <h1>{tut.title}</h1>
                        <p>{tut.summary}</p>
                        <a href={'/tutorial/'+ tut.id}>
                            <button className="joinus">Read More</button>
                        </a>
                    </div>)
                })}
        </div>
        </div>
    )
}

