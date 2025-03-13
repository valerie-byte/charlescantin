import * as React from 'react'
import '../../styles/header.css'
import menu from '../../images/icon_menuburger.png'
import { useState } from 'react'
import { Container } from 'react-bootstrap';



function MenuBurger () {
  const [isOpen, setisopen] = useState(false)
  const handleOpen = () => {
    setisopen(!isOpen)
     }

function ListeMenuBurger () {
  return (
    <ul className="listemenuBurger">
      <li className="navbar-item">
        <a href="accueil" className="navbar-option">Accueil</a>
      </li>
      <li className="navbar-item">
        <a href="galerie" className="navbar-option">Galerie</a>
      </li>
      <li className="navbar-item">
        <a href="tarif" className="navbar-option">Tarif et prestations</a>
      </li>
      <li className="navbar-item">
        <a href="contact" className="navbar-option">Contact</a>
      </li>
    </ul>
  )
}
return (
  <Container>
    {/* bouton et image menu burger */}
        <button className="" onClick={handleOpen}> 
            <img className="menuBurger" src={menu} alt="menu"/>
         {isOpen ? <ListeMenuBurger></ListeMenuBurger>: ""}
         </button>  
        
  </Container>
)
}


export default MenuBurger