import Header from "../header";
import '../../styles/pagegalerie.css'
import FilterdCategoryTable from './FilterdCategoryTable'
import ProductCategoryImg from "./ProductCategoryImg"
import { Container } from 'react-bootstrap';

function PageGalerie () {
    return(
        <div>
     
        <Header></Header>
        <Container className="presentatPhotoLayout">

            <FilterdCategoryTable></FilterdCategoryTable>
            <ProductCategoryImg></ProductCategoryImg>
            
        </Container>
        </div>

    )
}

export default PageGalerie;