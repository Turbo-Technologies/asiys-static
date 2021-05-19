import { signin } from "../actions/index";
import React, {useState} from 'react';
import { useSelector } from "react-redux";

function MainForm() {

    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const usernameUpdate = (val) => {setusername(()=> {return val.target.value})}
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})};
    const validate = () => {
        if (password.length < 8) {
            return <h3 style={{backgroundColor:'maroon', width:'100%', color:'white', textAlign:'center'}}>Password should be more than 8 characters long</h3>
        }
        else {
            return ''
        }
        
    }
    const Submission = () => {
        signin(username, email, password)
        
    }
    return (
        <>
        <form style={{height:'50vh', width:"75%", display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
            <h1 style={{ fontFamily:"sans-serif"}}>Create an Account</h1>
            <input type="text" name='username' placeholder='Your Name' value={username} onChange={usernameUpdate} style={{height:'10vh', width:'100%', borderRadius:'2px', textAlign:'center', fontSize:'1.5rem'}}/>
            <input type="password" name='password' placeholder='Your Password' value={password} onChange={passwordUpdate} style={{height:'10vh', width:'100%', borderRadius:'2px', textAlign:'center', fontSize:'1.5rem'}}/>
            <input type="email" name='email' placeholder='Your email' value={email} onChange={(val) => {setEmail(()=> {return val.target.value})}} style={{height:'10vh', width:'100%', borderRadius:'2px', textAlign:'center', fontSize:'1.5rem'}}/>
            <button style={{height:'10vh', width:'100%', fontFamily:'sans-serif', fontSize:'1.5em', background:'blue', color:'white', borderRadius:'10px'}} onClick={Submission}>Submit</button>
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
