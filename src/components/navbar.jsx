import React, {useState} from 'react'
import '../css/navbar.css'
import Menu from './Menu'

export default function Navabar() {
    const [menuopen, setMenuopen] = useState(false)
    const [menuButton, setMenuButton] = useState('Menu')
    function togglemenu() {
        setMenuopen((prevState) => {return !prevState})
        setMenuButton( () => {
            if (menuopen === false) {
                return 'Exit'
            }
            else {
                return 'Menu'
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
           <button onClick={togglemenu} style={{zIndex:3}}>{menuButton}</button>
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
