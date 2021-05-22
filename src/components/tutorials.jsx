import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { gettutorials, loadTutorials } from "../actions/index";
import '../css/app.css'
import { IconButton, Button, Card, CardContent, Typography, CardActionArea, CircularProgress } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";


function Main(props) {
    const tutorials = props.tutorials
    return (
        <>
            <div style={{display:'flex', width:'100%'}}>
               <input type="text" id="" style={{flexGrow:1}}/>
               <IconButton variant='contained' color='primary'><SearchIcon/></IconButton>
           </div>
        <div className="container"> 
                {tutorials.map(tut => {
                    return (
                        <Card variant='elevation' style={{padding:'1rem'}}>
                            <CardContent>
                                <Typography variant='h5'>{tut.title}</Typography>
                                <Typography variant='body1'>{tut.summary}</Typography>
                                <CardActionArea>
                                    <Button variant='text'><a href={tut.id} style={{textDecoration:'none'}}>Read More</a></Button>
                                    
                                </CardActionArea>

                            </CardContent>
                        </Card>
                    )
                })}
        </div>
        </>
    )
}


export default function Tutorials() {
    useEffect(() => {
        loadTutorials()
        
    }, [])
    gettutorials()
   
    const load = useSelector(state => state.tutorials.loading)
    const tutorials = useSelector(state => state.tutorials.list)
    const errorMessage = useSelector(state => state.tutorials.error.message)
    const display = () => {
        if (load === true) {
            return(
                <div className="container-center">
                    <CircularProgress/>
                </div>
            )
        }
        else {
            if (tutorials === []) {
                return errorMessage
            }
            else {
                return <Main tutorials={tutorials}/>
            }
        }
        
    }
    return (
        <>
        {load ? <div className="container-center">
                    <CircularProgress/>
                </div> : <Main tutorials={tutorials}/>}

        </>
    )
}
