
import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { signin } from "../actions";

function MainForm(props) {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('pass')
    const usernameUpdate = (val) => {setusername(
        () => {return val.target.value}
    )};
    const passwordUpdate = (e) => {setPassword(() => {return e.target.value})}
    return (
        <>
        <form>
            <input type="text" placeholder='Your Name' value={username} onChange={usernameUpdate}/>
            <input type="text" placeholder='Your Password' value={password} onchange={(e) => {setPassword(() => {return e.target.value})}}/>
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
