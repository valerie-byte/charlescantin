import logo from'../images/logo.png'
import menu from '../images/icon_menuburger.png'
import iconfacebook from '../images/header/logo-facebook.svg'
import iconInstagram from '../images/header/logo-instagram.svg'
import '../styles/header.css'
import { Container } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap'

export default function Header () {
    // let titleActive = "Accueil"
    return(        
        <Navbar >
            <Container className='containerHeader' >
              
                <Navbar.Brand href="#">                  
                    <img className="menuBurger" src={menu} alt="menu"    
                    />
                </Navbar.Brand> 
                <Navbar.Brand href="#">
                        <img id="logoMenu" src={logo} alt="mon logo"             
                    />
                </Navbar.Brand>
    
               
                <Navbar.Brand href="#" id="titleMenuAccueil" >Accueil</Navbar.Brand>
                <Navbar.Brand href="#" className="titleMenu" >galerie</Navbar.Brand>
                <Navbar.Brand href="#" className="titleMenu" >tarifs et prestations</Navbar.Brand>
                <Navbar.Brand href="#" className="titleMenu" >contact</Navbar.Brand>
                  
                <Navbar.Brand href="#">
                        <img className="iconMenu" src={iconfacebook} alt="logo-facebook"           
                    />
                </Navbar.Brand> 
                <Navbar.Brand href="#">
                <img className="iconMenu" src={iconInstagram} 
                    alt="icone instagram"
                />
                 </Navbar.Brand>
                     
                
                    
            </Container>
        </Navbar>
        
    )
}