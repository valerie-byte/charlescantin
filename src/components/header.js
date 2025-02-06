import logo from'../images/logo.png'
import menu from '../images/icon_menuburger.png'
import iconfacebook from '../images/header/logo-facebook.svg'
import iconInstagram from '../images/header/logo-instagram.svg'
import '../styles/header.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap'

export default function Header () {
    return(        
        <Navbar >
            <Container fluid="sm" className='container' >
              
                <Navbar.Brand href="#">                  
                    <img id="menuBurger" src={menu} alt="menu"    
                    />
                </Navbar.Brand> 
                <Navbar.Brand href="#">
                        <img id="logoMenu" src={logo} alt="mon logo"             
                    />
                </Navbar.Brand>
    
               
                <Navbar.Brand href="#" id="titleMenuAccueil" >Accueil</Navbar.Brand>
                <Navbar.Brand href="#" id="titleMenu" >galerie</Navbar.Brand>
                <Navbar.Brand href="#" id="titleMenu" >tarifs et prestations</Navbar.Brand>
                <Navbar.Brand href="#" id="titleMenu" >contact</Navbar.Brand>
                  
                <Navbar.Brand href="#">
                        <img id="iconMenu" src={iconfacebook} alt="logo-facebook"           
                    />
                </Navbar.Brand> 
                <Navbar.Brand href="#">
                <img id="iconMenu" src={iconInstagram} 
                    alt="icone instagram"
                />
                 </Navbar.Brand>
                     
                
                    
            </Container>
        </Navbar>
        
    )
}