import Form from 'react-bootstrap/Form'
import '../../styles/pagegalerie.css'

// composant qui liste les différentes catégories
export default function FilterdCategoryTable () {
    return(
        <div>
            <label for="response">
            <h1 className='titleGalerie'>Liste des catégories</h1>
            </label>
                <select name="response">
                    <option value="grossesse">grossesse</option>
                    <option value="grossesse">mariage</option>
                    <option value="grossesse">famille</option>   <option value="grossesse">grossesse</option>
                    <option value="grossesse">batême</option>
                    <option value="grossesse">couple</option>
                </select>
            
            
        {/* <Form id = "listCategory">
            <Form.Check label=" grossesse"/>
            <Form.Check label=" mariage"/>
            <Form.Check label=" famille"/>
            <Form.Check label=" batême"/>
            <Form.Check label=" couple"/>
        </Form> */}
        </div>

        
    )
}