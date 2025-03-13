import React from 'react'
import logo from'../images/logo.png'

import iconfacebook from '../images/header/logo-facebook.svg'
import iconInstagram from '../images/header/logo-instagram.svg'
import '../styles/header.css'
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'
import MenuBurger from './pageaccueil/MenuBurger'



export default function Header () {

    return(        
        <Navbar >
            <Container className='containerHeader' >
                            
                <MenuBurger></MenuBurger>                
        
                <Navbar.Brand>
                    <img id="logoMenu" src={logo} alt="mon logo"             
                    />
                </Navbar.Brand>
    
               
                <Navbar.Brand href="accueil" className="titleMenu" >Accueil</Navbar.Brand>
                <Navbar.Brand href="galerie" className="titleMenu" >galerie</Navbar.Brand>
                <Navbar.Brand href="tarif" className="titleMenu" >tarifs et prestations</Navbar.Brand>
                <Navbar.Brand href="contact" className="titleMenu" >contact</Navbar.Brand>
                  
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