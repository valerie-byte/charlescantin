import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagefamille ()   {
    const familles = DataImg.filter(famille =>
        famille.title === 'famille'
    );
  // récupère les images du tableau crée ci dessus
    const Listfamille = familles.map(famille =>
      <li key={famille.id} >
        <img src={famille.source} width="150px" height="150px" alt=""></img>
  
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Famille</h1> 
      <ul className='presentatPhotoLayout'>{Listfamille}</ul>
  </Container>
    )
 }

 export default Imagefamille