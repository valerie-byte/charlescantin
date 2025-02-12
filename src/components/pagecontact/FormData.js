import '../../styles/formComponent.css';

function FormData () {
    //code pour les donénes d'entrées du formulaire
    function send(formData) {
        const name=formData.get("name");
        alert(`vous avez envoyé le formulaire M '${name}`);
    }
    return (
        <form action ={send}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="surname">Prénom</label>
            <input type="text" id="surname" name="surname" required></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
            <label htmlFor="phone">Téléphone</label>
            <input type="Tel" id="phone" name="Tel"></input>
            {/* liste de choix */}
            <label htmlFor="subject-select">liste</label>
            <select name="subject" id="subject-select">
                <option value="">Choisir le sujet</option>
                <option value="rendezvous">Demande de rendez-vous</option>
                <option value="prestations">Questions prestations</option>
                <option value="autres">Autres demandes</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea type="Textarea" id="message" name="Tel"></textarea>
            <button id="submit-button" type="submit">Envoyer</button>
        </form>
    )
}

export default FormData;