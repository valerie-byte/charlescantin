import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagebapteme ()   {
    const baptemes = DataImg.filter(bapteme =>
      bapteme.title === 'bapteme'
    );
  // récupère les images du tableau crée ci dessus
    const Listbapteme = baptemes.map(bapteme =>
      <li key={bapteme.id} >
        <img src={bapteme.source} width="150px" height="150px" alt=""></img>
        
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Bapteme</h1> 
      <ul className='presentatPhotoLayout'>{Listbapteme}</ul>
  </Container>
    )
 }

 export default Imagebapteme