import React, {useState} from 'react'
import '../css/navbar.css'
import Menu from './Menu'
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

export default function Navabar() {
    const [menuopen, setMenuopen] = useState(false)
    const [menuButton, setMenuButton] = useState(<MenuIcon/>)
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
    let showmenu = () => {
        if (menuopen === false) {
            return ''
        }
        else {
            return  <Menu/> 
        }
    }
    return (
        <>
       <nav>
           <a href='/'>Anand Ashram</a>
           <div style={{zIndex:3}}>
            <IconButton onClick={togglemenu}>{menuButton}</IconButton>
           </div>
       </nav>
       {showmenu()}
        
            
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
