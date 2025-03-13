import React from "react";
import { Container } from "react-bootstrap";

// composant image + titre
const Photo = ({title, source}) => (
    <Container id="photoettitre">
      
        <img  src={source} alt='image2'></img> 
         <h3 id='titleImg'>{title}</h3> 
     
    
    </Container>
)

export default Photo