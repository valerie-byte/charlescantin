import { Container } from 'react-bootstrap'
import '../../styles/formComponent.css'
import FormData from './FormData'


function FormComponent () {
    return (
        <Container id="contContact">   
            <h1 id ="titletableformulaire">Formulaire de contact</h1>
            <FormData></FormData>
            
        </Container>
    )
}

export default FormComponent