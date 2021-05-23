import React from 'react'
import { useSelector } from "react-redux";
import '../css/app.css'

export default function Dashboard() {
    const name = useSelector(state => state.user.user.username)
    return (
        <div className='container-center'>
            <h1 style={{textAlign:'center'}}>{'Welcome ' + name}</h1>
        </div>
    )
}
