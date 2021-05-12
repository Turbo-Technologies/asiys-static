import React from 'react';
import '../css/tutorialdetail.css'
import { useSelector } from "react-redux";
import { gettutorials } from "../actions";

export default function Tutorialdetail(props) {
    gettutorials()
    const tutorials = useSelector(state => state.tutorials)
    const tutorial = tutorials.list[props.match.params.id - 1]
    console.log(tutorials);
    console.log(tutorial)
    
    
    return (
        <div>
            <nav><a href='/'>Anand Ashram</a></nav>
            <div className='container'>
                <div id="main">
                    <h1>{tutorial.title}</h1>
                    <p>{tutorial.content}</p>
                </div>

            </div>
        </div>
    )
}
