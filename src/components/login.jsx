import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core";
import '../css/app.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const usernameUpdate = (e) => {setUsername(() => {return e.target.value})}
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})}
    return (
        <div className='container-center'>
            <label htmlFor="mainform"><h1>Login</h1></label>
            <main style={{display:'flex',  flexDirection:"column"}} id='mainform'>
                <TextField label='Username' variant="standard" style={{margin:'1rem'}} value={username} onChange={usernameUpdate}/>
                <TextField label='Password' type="password" value={password} 
                onChange={passwordUpdate} style={{margin:'1rem'}}/>
                <Button variant='contained' color='primary'>Login</Button>
                <p 
                style={{padding:'1rem', textAlign:'center'}}>
                    Don't have an account <a href="/register">Create one now</a>
                </p>
            </main>  
        </div>
    )
}
