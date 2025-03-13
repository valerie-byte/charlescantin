import React from "react";
import { DataImg } from './Imgdata'
import { Container } from 'react-bootstrap';
import '../../styles/pagegalerie.css'

function Imagemariage ()   {
    const mariages = DataImg.filter(mariage =>
      mariage.title === 'mariage'
    );
  // récupère les images du tableau crée ci dessus
    const Listmariage = mariages.map(mariage =>
      <li key={mariage.id} >
        <img src={mariage.source} width="150px" height="150px" alt=""></img>
        
      </li>)
 
    return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Mariage</h1> 
      <ul className='presentatPhotoLayout'>{Listmariage}</ul>
  </Container>
    )
 }

 export default Imagemariage