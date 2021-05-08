import React from 'react';
import '../css/tutorialdetail.css'
import { useSelector } from "react-redux";

export default function Tutorialdetail(props) {
    const tutorials = useSelector(state => state.tutorials)
    
    
    return (
        <div>
            <nav><a href='/'>Anand Ashram</a></nav>
            <div className='container'>
                <div id="main">
                </div>

            </div>
        </div>
    )
}
