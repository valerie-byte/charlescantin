// importation des images
import grossesse1 from '../../images/grossesse/grossesse1.jpg'
import grossesse2 from "../../images/grossesse/grossesse2.jpg"
import grossesse3 from "../../images/grossesse/grossesse3.jpg"
import grossesse4 from "../../images/grossesse/grossesse4.jpg"
import mariage1 from "../../images/mariage/mariage1.jpg"
import mariage2 from "../../images/mariage/mariage2.jpg"
import mariage3 from "../../images/mariage/mariage3.jpg"
import mariage4 from "../../images/mariage/mariage4.jpg"
import baby1 from "../../images/baby/baby1.jpg"
import baby2 from "../../images/baby/baby2.jpg"
import baby3 from "../../images/baby/baby3.jpg"
import baby4 from "../../images/baby/baby4.jpg"
import famille1 from "../../images/famille/famille1.jpg"
import famille2 from "../../images/famille/famille2.jpg"
import famille3 from "../../images/famille/famille3.jpg"
import famille4 from "../../images/famille/famille4.jpg"
import bapt1 from "../../images/baptême/bapt1.jpg"
import bapt2 from "../../images/baptême/bapt2.jpg"
import bapt3 from "../../images/baptême/bapt3.jpg"
import bapt4 from "../../images/baptême/bapt4.jpg"
import couple1 from "../../images/couple/couple1.jpg"
import couple2 from "../../images/couple/couple2.jpg"
import couple3 from "../../images/couple/couple3.jpg"
import couple4 from "../../images/couple/couple4.jpg"

// importation fichier mise en page
import '../../styles/pagegalerie.css'

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
function ProductCategoryImg () {
    return(
        <Container className="presentatPhoto">
            <Container className="presentatPhoto">
                <h1 className='titleGalerie'>grossesse</h1>
                <Container id="containerImgGrossesse">
                    <img className="ImgGrossesse" src={grossesse1} alt=""></img>
                    <img className="ImgGrossesse"  src={grossesse2} alt=""></img>
                    <img className="ImgGrossesse"  src={grossesse3} alt=""></img>
                    <img className="ImgGrossesse"  src={grossesse4} alt=""></img>
                </Container>
            </Container>

            <Container className="presentatPhoto">
                <h1 className='titleGalerie'>mariage</h1>
                <Container id="containerImgMariage">
                    <img className="ImgMariage" src={mariage1} alt=""></img>
                    <img className="ImgMariage" src={mariage2} alt=""></img>
                    <img className="ImgMariage" src={mariage3} alt=""></img>
                    <img className="ImgMariage" src={mariage4} alt=""></img>
                </Container>
            </Container>
            <Container className="presentatPhoto">
                <h1 className='titleGalerie'>bébé</h1>
                <Container id="containerImgBaby">
                    <img className="ImgBebe" src={baby1} alt=""></img>
                    <img className="ImgBebe" src={baby2} alt=""></img>
                    <img className="ImgBebe" src={baby3} alt=""></img>
                    <img className="ImgBebe" src={baby4} alt=""></img>
                </Container>
            </Container>
            <Container className="presentatPhoto">
                <h1 className='titleGalerie'>famille</h1>
                <Container id="containerImgFamille">
                    <img className="ImgFamille" src={famille1} alt=""></img>
                    <img className="ImgFamille"src={famille2} alt=""></img>
                    <img className="ImgFamille" src={famille3} alt=""></img>
                    <img className="ImgFamille" src={famille4} alt=""></img>
                </Container>

            </Container>
            <Container className="presentatPhoto">
                <h1 className='titleGalerie'>baptême</h1>
                <Container id="containerImgBapt">
                    <img className="ImgBapteme" src={bapt1} alt=""></img>
                    <img className="ImgBapteme" src={bapt2} alt=""></img>
                    <img className="ImgBapteme" src={bapt3} alt=""></img>
                    <img className="ImgBapteme" src={bapt4} alt="" ></img>
                </Container>
            </Container>
            <Container className="presentatPhoto">
                <h1 className='titleGalerie'> couple</h1>
                <Container id="containerImgCouple">
                    <img className="ImgCouple" src={couple1} alt=""></img>
                    <img className="ImgCouple" src={couple2} alt=""></img>
                    <img className="ImgCouple" src={couple3} alt=""></img>
                    <img className="ImgCouple" src={couple4} alt=""></img>
                </Container> 

            </Container> 
        </Container>
    )
}

export default ProductCategoryImg