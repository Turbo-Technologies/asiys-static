
import React, {useState} from 'react';
import { useSelector } from "react-redux";

function MainForm() {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const usernameUpdate = (val) => {setusername(
        () => {return val.target.value}
    )};
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})}
    return (
        <>
        <form>
            <input type="text" placeholder='Your Name' value={username} onChange={usernameUpdate}/>
            <input type="text" placeholder='Your Password' value={password} onchange={passwordUpdate}/>
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
            return <div>You have already registered <a href="/logout/">logout</a> to register again</div>
        }
    }
    return (
        <div>
            {checklogged()}
        </div>
    )
}
