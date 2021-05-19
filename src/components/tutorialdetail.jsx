import React from 'react';
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
        <>
            <div className='container-center'>
                {error ? <h1>{msg}</h1> : ''}
            </div>
            <div>
                <h1>{tutorial.title}</h1>
                <p>{tutorial.content}</p>
            </div>

            </>
    )
}
