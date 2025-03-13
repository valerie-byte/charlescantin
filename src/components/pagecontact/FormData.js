import '../../styles/formComponent.css';
import { Container } from 'react-bootstrap';

function FormData () {
    //code pour les donénes d'entrées du formulaire
    function send(formData) {
        const name=formData.get("name");
        alert(`vous avez envoyé le formulaire M '${name}`);
    }
    function handleClick() {
        alert('vous avez envoyé le formulaire')
    }
    return (
        <Container >     
        <form  id="contData" action ={send}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="surname">Prénom</label>
            <input type="text" id="surname" name="surname" required></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
            <label htmlFor="phone">Téléphone</label>
            <input type="Tel" id="phone" name="Tel"></input>
            {/* liste de choix */}
           
            <select name="subject-choice" aria-label="subject-choice" id="subject-select">
                <option value="">Choisir le sujet</option>
                <option id="subject-choice-rdz" value="rendezvous">Demande de rendez-vous</option>
                <option id="subject-choice-presta" value="prestations">Questions prestations</option>
                <option id="subject-choice-autre" value="autres">Autres demandes</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea type="Textarea" id="message" name="Tel"></textarea>
            <button id="submit-button" type="submit" onClick={handleClick}>Envoyer</button>
        </form>
        </Container>
    )
}

export default FormData;