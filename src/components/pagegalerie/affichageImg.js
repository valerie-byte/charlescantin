// pour afficher les images
import '../../styles/pagegalerie.css'
import { Container } from 'react-bootstrap';
import { DataImg } from './Imgdata'



   
//  on récupère toutes les images
 function Placeimageall ()   {
  const Listimage = DataImg.map(all =>
    <li key={all.id} >
      <img src={all.source} width="150px" height="150px" alt=""></img>
    </li>)

return (
  <Container className="presentatPhoto">
    <h1 className='titleGalerie'>Toutes les photos</h1> 
      <ul className='presentatPhotoLayout'>{Listimage}</ul>
  </Container>)
}
function AffichageImg () {
     
    return (
        <Container>        
   
  
            <Placeimageall></Placeimageall>
               
      
           </Container>
    )
  
  }
export default AffichageImg