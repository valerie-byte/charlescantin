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

function ProductCategoryImg () {
    return(
        <div id="ContainerImg">
            <div id="containerGrossesse">
                <h1>grossesse</h1>
                <div id="containerImgGrossesse">
                    <img src={grossesse1}></img>
                    <img src={grossesse2}></img>
                    <img src={grossesse3}></img>
                    <img src={grossesse4}></img>
                </div>
            </div>

            <div id="containerMariage">
                <h1>mariage</h1>
                <div id="containerImgMariage">
                    <img src={mariage1}></img>
                    <img src={mariage2}></img>
                    <img src={mariage3}></img>
                    <img src={mariage4}></img>
                </div>
            </div>
            <div id="containerBaby">
                <h1>bébé</h1>
                <div id="containerImgBaby">
                    <img src={baby1}></img>
                    <img src={baby2}></img>
                    <img src={baby3}></img>
                    <img src={baby4}></img>
                </div>
            </div>
            <div id="containerFamille">
                <h1>famille</h1>
                <div id="containerImgFamille">
                    <img src={famille1}></img>
                    <img src={famille2}></img>
                    <img src={famille3}></img>
                    <img src={famille4}></img>
                </div>

            </div>
            <div id="containerBapt">
                <h1>baptême</h1>
                <div id="containerImgBapt">
                    <img src={bapt1}></img>
                    <img src={bapt2}></img>
                    <img src={bapt3}></img>
                    <img src={bapt4}></img>
                </div>
            </div>
            <div id="containerCouple">
                <h1>couple</h1>
                <div id="containerImgCouple">
                    <img src={couple1}></img>
                    <img src={couple2}></img>
                    <img src={couple3}></img>
                    <img src={couple4}></img>
                </div>

            </div>
        </div>
    )
}

export default ProductCategoryImg