import logo from'../images/logo.png'
import iconfacebook from '../images/header/logo-facebook.svg'
import iconInstagram from '../images/header/logo-instagram.svg'
import '../styles/header.css'

export default function Header () {
    return(
        <header className='headerContainer'>
            <img src={logo} alt='mon logo'/>
            <h1 className='allerta-regular'>Accueil</h1>
            <h1 className='allerta-regular'>Galerie</h1>
            <h1 className='allerta-regular'>Tarif et prestations</h1>
            <h1 className='allerta-regular'>Contact</h1>
            <img src={iconfacebook} alt='logo-facebook'></img>
            <img src={iconInstagram} alt='logo-instagram'></img> 
        </header>
    )
}