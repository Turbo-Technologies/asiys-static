import React from 'react';
import { useSelector } from "react-redux";
import '../css/home.css';
import '../css/tutorials.css';

function DisplayHome(props) {
    let tutorials = props.tutorials;
    let message ='';
    if (tutorials.error.done === false) {
        console.log(tutorials.error.done);
    message =  (
        <div id="container" style={{ height: '100vh' }}>
            {tutorials.list.map((tut) => {
                return (
                    <div className='tutorial'>
                    <h2>{tut.title}</h2>
                    <p>{tut.content}</p>
                </div>
                )
            })}
        </div>
        )
    };
    return message


}


export default function Tutorials() {
    let tutorials = useSelector(state => state.tutorials)
    console.log(tutorials);

    return (
        <div>
        <nav><a href='/'>Anand Ashram</a> freemium</nav>
            <div>
                <DisplayHome tutorials={tutorials} />

            </div>
        </div>
    )
}

