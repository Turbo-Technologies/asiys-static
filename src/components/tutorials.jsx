import React from 'react';
import { useSelector } from "react-redux";
import '../css/home.css';
import '../css/tutorials.css';
import { gettutorials } from "../actions/index";



export default function Tutorials() {
    gettutorials()
    const tutorials = useSelector(state => state.tutorials.list)
    

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

