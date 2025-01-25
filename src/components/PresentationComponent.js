import imagePresentation from '../images/img_page_accueil.jpg'
function PresentationComponent () {
    return (
        <div>
        <img src={imagePresentation} alt='présentation'></img>
        <h1>Charles Cantin</h1>
        </div>
    )
};

export default PresentationComponent;