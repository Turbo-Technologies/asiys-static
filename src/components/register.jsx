import { signin } from "../actions/index";
import React, {useState} from 'react';
import { useSelector } from "react-redux";
import {Button, Input, IconButton, Snackbar} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'
import Dashboard from './dashboard'
import Cookies from 'universal-cookie'



function MainForm() {
    const [password2, setPassword2] = useState('')
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertopen, setAlertopen] = useState(false)
    
    const error = useSelector(state => state.user.error.done)
    const errorMessage = useSelector(state => state.user.error.message)
    const password2Update = (e) => {setPassword2(() => {return e.target.value})};
    const usernameUpdate = (val) => {setusername(()=> {return val.target.value})}
    const loggedin = useSelector(state => state.user.loggedin)
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})};
    const emailUpdate = (e) => {setEmail(() => {return e.target.value})};
    const validate = () => {
        signin(username, email, password)
        if (error === true) {
            setAlertopen(() => {return true})
        }
        if (loggedin === true) {
            const cookie = new Cookies();
            cookie.set('user', {
                username:username,
                email:email,
                password:password
            }, {path:'/'})
        }
    }
    const closeAlert = () => {setAlertopen(false)}
    
    return (
        <>
        <Snackbar open={alertopen} message={errorMessage} action={
        <IconButton onClick={closeAlert} color='secondary'>
            <CloseIcon/>
        </IconButton>}/>
        <form style={{height:'50vh', width:"75%", display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
            <h1 style={{ fontFamily:"sans-serif"}}>Create an Account</h1>
            <Input type='text' onChange={usernameUpdate} value={username} placeholder="Username"/>
            <Input type="password" onChange={passwordUpdate} value={password} placeholder='Password'/>
            <Input type="password" onChange={password2Update} value={password2} placeholder='Password again'/>
            <Input type="email" value={email} onChange={emailUpdate} placeholder="Email"/>
            <Button variant="contained" color="primary" size="large" onClick={validate}>Submit</Button>
        </form>
        <p style={{fontSize:'1rem'}}>Already have an account ? <a href="/login/"> log in </a></p>
        </>
    )
    
}


export default function Register() {
    let loggedin = useSelector(state => state.user.loggedin)

    const checklogged = () => {
        if(loggedin === false) {
            return <MainForm/>
        }
        else {
            return <Dashboard/>
        }
    }
    return (
        <div style={{display:'flex', height:'100vh', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            {checklogged()}
        </div>
    )
}
