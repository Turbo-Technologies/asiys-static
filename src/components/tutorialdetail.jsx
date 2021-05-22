import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { gettutorial, loadTutorials } from "../actions";
import { CircularProgress } from "@material-ui/core";

export default function Tutorialdetail(props) {
    useEffect(() => {
        loadTutorials()
    }, [])
    gettutorial(props.match.params.id)
    const load = useSelector(state => state.tutorials.load)
    const tutorial = useSelector(state => state.tutorials.item)
    console.log(tutorial);
    
    
    return (
        <>
            {load ? <div className="container-center">
                    <CircularProgress/>
                </div> : 'happy'}
        </>
    )
}
