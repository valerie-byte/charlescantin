import Form from 'react-bootstrap/Form'
import '../../styles/pagegalerie.css'

// composant qui liste les différentes catégories
export default function FilterdCategoryTable () {
    function handleFilter() {
// récupérer la (ou les) valeurs sélectionnées
// récupérer le css pour les containers
// avec la valeur afficher le container associé
// rendre invisible les autres containers d'images
    }

    return(
        <div>
           
            <h1 className='titleGalerieChoice'>Liste des catégories</h1>
                <form method="post" onSubmit={handleFilter}>
                <label for="category-choice">choisir une catégorie
                <select  
                className='optionCategory' 
                id ="category-choice" 
                name="responsedefault"
                defaultValue={['grossesse', 'mariage', 'famille', 'bapteme','couple']}
                multipe={true}>
                    <option className='optionCategory' value="grossesse">grossesse</option>
                    <option className='optionCategory' value="mariage">mariage</option>
                    <option className='optionCategory' value="famille">famille</option>   
                    <option className='optionCategory' value="bapteme">baptême</option>
                    <option className='optionCategory' value="couple">couple</option>
                </select>
                </label>
                <button type="reset">Reset</button>
                <button type="submit">soumettre</button>
                </form>
            
  
        </div>

        
    )
}