import { signin } from "../actions/index";
import React, {useState} from 'react';
import { useSelector } from "react-redux";
import {Button, Input, IconButton} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'

const Submission = (props) => {
    signin(props.username, props.email, props.password)
    const error = useSelector(state => state.user.error.message)
    if (error !== '') {
        return (<div className='alert' id='alert'>
            <p className="text">{error}</p>
            <IconButton><CloseIcon/></IconButton>
        </div>)
    }
    else {
        return 't s'
    }
    
    
}

function MainForm() {
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('no error')
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const password2Update = (e) => {setPassword2(() => {return e.target.value})};
    const usernameUpdate = (val) => {setusername(()=> {return val.target.value})}
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})};
    const emailUpdate = (e) => {setEmail(() => {return e.target.value})};
    const validate = () => {
        setError(() => {return <Submission username={username} password={password} email={email}/>})
        
    }
    
    return (
        <>
        {error}
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
            return <div>You have already registered <a href="/logout/">logout</a> to register again</div>
        }
    }
    return (
        <div style={{display:'flex', height:'100vh', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            {checklogged()}
        </div>
    )
}
