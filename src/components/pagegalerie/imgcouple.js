import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagecouple ()   {
    const couples = DataImg.filter(couple =>
        couple.title === 'couple'
    );
  // récupère les images du tableau crée ci dessus
    const Listcouple = couples.map(couple =>
      <li key={couple.id} >
        <img src={couple.source} width="150px" height="150px" alt=""></img>
        
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Couple</h1> 
      <ul className='presentatPhotoLayout'>{Listcouple}</ul>
  </Container>
    )
 }

 export default Imagecouple