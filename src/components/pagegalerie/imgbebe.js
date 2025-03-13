import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagebebe ()   {
    const bebes = DataImg.filter(bebe =>
        bebe.title === 'baby'
    );
  // récupère les images du tableau crée ci dessus
    const Listbebe = bebes.map(bebe =>
      <li key={bebe.id} >
        <img src={bebe.source} width="150px" height="150px" alt=""></img>
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Bébé</h1> 
      <ul className='presentatPhotoLayout'>{Listbebe}</ul>
  </Container>
    )
 }

 export default Imagebebe