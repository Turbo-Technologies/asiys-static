import React from 'react';
import { useSelector } from "react-redux";
import { gettutorials } from "../actions/index";
import Navabar from './navbar';
import '../css/app.css'
import { Button } from 'bootstrap';



export default function Tutorials() {
    gettutorials()
    const tutorials = useSelector(state => state.tutorials.list)
    const errorMessage = useSelector(state => state.tutorials.error.message)
    const error = <> <h1>{errorMessage}</h1> <a href="/tutorial/" className='btn'>Try Again</a> </>
    

    return (
        <div>
            
        <div className="container-center"> 
                {error}
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

