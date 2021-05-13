import React from 'react';
import '../css/tutorialdetail.css'
import { useSelector } from "react-redux";
import { gettutorial } from "../actions";

export default function Tutorialdetail(props) {
    console.log(props)
    gettutorial(props.match.params.id)
    const tutorial = useSelector(state => state.tutorials.item)
    const error = useSelector(state => state.tutorials.error.done)
    const msg  = useSelector(state => state.tutorials.error.message)
    console.log(tutorial);
    
    
    return (
        <div>
            <nav><a href='/'>Anand Ashram</a></nav>
            <div className='container'>
                <div id="main">
                    {error ? <h1>{msg}</h1> : ''}
                    <h1>{tutorial.title}</h1>
                    <p>{tutorial.content}</p>
                </div>

            </div>
        </div>
    )
}
