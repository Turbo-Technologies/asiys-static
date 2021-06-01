import { signin,  loadUser } from "../actions/index";
import React, {useState} from 'react';
import { useSelector } from "react-redux";
import {Button, TextField, IconButton, Snackbar, CircularProgress} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'
import Dashboard from './dashboard'

const joi = require('joi')


function MainForm() {
    const [password2, setPassword2] = useState('')
    const [successAlertOpen, setSuccessAlertOpen] = useState(false)
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertopen, setAlertopen] = useState(false)


    const loading = useSelector(state => state.user.loading)
    const errorDone = useSelector(state => state.user.error.done)
    const errorMessage = useSelector(state => state.user.error.message.message)
    const [error, setError] = useState('')
    const password2Update = (e) => {setPassword2(() => {return e.target.value})};
    const usernameUpdate = (val) => {setusername(()=> {return val.target.value})}
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})};
    const emailUpdate = (e) => {setEmail(() => {return e.target.value})};
    const ShowSuccessMessage = () => {setSuccessAlertOpen((prevstate) => {return !prevstate})}
    const validate = () => {
        loadUser()
        const schema = joi.object({
            username:joi.string().required(),
            email:joi.string().email( {tlds: {allow: false} }).required(),
            password: joi.string().min(8).max(100).required(),
            password2: joi.any().valid(joi.ref('password')).required()

        })
        let response = schema.validate(
            {username:username, email:email, password:password, password2:password2}
        )
        if  (response.error) {
            setError(() => {return response.error.details[0].message})
            setAlertopen(true)
        }
        else {
            signin(username, email, password)
            if (errorDone) {
                setError(() => {return errorMessage})
                setAlertopen(true)
            }
        }
    }
    const closeAlert = () => {setAlertopen(false)}
    
    return (
        <>
        <Snackbar open={alertopen} message={error} action={
        <IconButton onClick={closeAlert} color='secondary'>
            <CloseIcon/>
        </IconButton>}/>
        <Snackbar open={successAlertOpen} message={'You have successfully registered'} action= {
                <IconButton onClick={ShowSuccessMessage}> <CloseIcon/></IconButton>}/>
        <form style={{height:'50vh', width:"75%", display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
            <h1 style={{ fontFamily:"sans-serif"}}>Create an Account</h1>
            <TextField type='text' onChange={usernameUpdate} value={username} style={{ margin:"1rem"}} label="Username"/>
            <TextField type="password" onChange={passwordUpdate} variant="standard" style={{ margin:"1rem"}} value={password} label='Password'/>
            <TextField type="password" onChange={password2Update} value={password2} style={{ margin:"1rem"}} label='Password again'/>
            <TextField type="email" value={email} onChange={emailUpdate} style={{ margin:"1rem"}} label="Email"/>
            <Button variant="contained" color="primary" size="large" style={{ margin:"1rem"}} onClick={validate}>
                Create your Account {loading ? <CircularProgress color="secondary"/> : ''}
            </Button>
        <p style={{fontSize:'1rem', margin:"1rem"}}>Already have an account ? <a href="/login/"> log in </a></p>
        </form>
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
