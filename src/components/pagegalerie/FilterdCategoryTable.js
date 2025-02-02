import Form from 'react-bootstrap/Form'
import '../../styles/pagegalerie.css'

// composant qui liste les différentes catégories
export default function FilterdCategoryTable () {
    return(
        <div>
            <h1>Liste des catégories</h1>
        <Form id = "listCategory">
            <Form.Check label=" grossesse"/>
            <Form.Check label=" mariage"/>
            <Form.Check label=" famille"/>
            <Form.Check label=" batême"/>
            <Form.Check label=" couple"/>
        </Form>
        </div>

        
    )
}