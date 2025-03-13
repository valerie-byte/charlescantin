import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagegrossesse ()   {
    const grossesses = DataImg.filter(grossesse =>
        grossesse.title === 'grossesse'
    );
  // récupère les images du tableau crée ci dessus
    const Listgrossesse = grossesses.map(grossesse =>
      <li key={grossesse.id} >
        <img src={grossesse.source} width="150px" height="150px" alt=""></img>
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>grossesse</h1> 
      <ul className='presentatPhotoLayout'>{Listgrossesse}</ul>
  </Container>
    )
 }

 export default Imagegrossesse