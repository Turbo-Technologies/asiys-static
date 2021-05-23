import React, {useState} from 'react'
import '../css/navbar.css'
import { useSelector } from 'react-redux'
import {logout} from '../actions/'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Drawer, IconButton, Button, Avatar } from "@material-ui/core";

export default function Navabar() {
    const [menuopen, setMenuopen] = useState(false)
    const [menuButton, setMenuButton] = useState(<MenuIcon/>)
    const loggedin = useSelector(state => state.user.loggedin)
    const name = useSelector(state => state.user.username)
    const loggedintools = (<>
            <p>
                <IconButton><Avatar><img src="" alt={name}/> </Avatar></IconButton>
                <Button href='/dashboard'>Your Account</Button>
            </p>
            <p>
                <IconButton><CloseIcon/></IconButton>
                <Button onClick={logout} variant='text'>Logout</Button>
            </p>
        </>)
    function togglemenu() {
        setMenuopen((prevState) => {return !prevState})
        setMenuButton( () => {
            if (menuopen === false) {
                return <CloseIcon/>
            }
            else {
                return (<MenuIcon/>)
            }
        }    
        )
    }
    
    return (
        <>
       <nav>
           <a href='/'>Anand Ashram</a>
           <div style={{ zIndex:3, position:'sticky'}}>
            <IconButton onClick={togglemenu}>{menuButton}</IconButton>
           </div>
       </nav>
       <Drawer open={menuopen} variant='persistent'>
            <p><IconButton><HomeIcon/></IconButton><Button href='/'>Home</Button></p>
            <p><IconButton><SearchIcon/></IconButton><Button href='/about'>About</Button></p>
            {loggedin ? loggedintools :
            <p><IconButton><AccountCircleIcon/></IconButton><Button href='/register'>Register</Button></p>}
            <p><IconButton><BookIcon/></IconButton><Button href='/tutorial/'>Tutorials</Button></p>
            
       </Drawer>
        
            
        {/* <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form> */}
        </>
    
    )
}
