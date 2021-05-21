import React from 'react';
import { useSelector } from "react-redux";
import { gettutorials } from "../actions/index";
import '../css/app.css'
import { IconButton, Button } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";



export default function Tutorials() {
    gettutorials()
    const tutorials = useSelector(state => state.tutorials.list)
    const errorMessage = useSelector(state => state.tutorials.error.message)
    const error = <> 
    <h1>{errorMessage}</h1>
     <Button variant='contained' color="primary">
         <a href="/tutorial/" style={{color:'white', textDecoration:'none'}}>Try Again</a>
     </Button>
    </>
    

    return (
        <>
           <div style={{display:'flex', width:'100%'}}>
               <input type="text" id="" style={{flexGrow:1}}/>
               <IconButton variant='contained' color='primary'><SearchIcon/></IconButton>
           </div>
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
        </>
    )
}
