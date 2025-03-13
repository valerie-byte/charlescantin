import Header from "../header";
import '../../styles/pagegalerie.css'
import FilterdCategoryTable2 from './FilterdCategoryTable2'
import { Container } from 'react-bootstrap';


function PageGalerie () {
    return(
        <div>
     
        <Header></Header>
        <Container className="">

            <FilterdCategoryTable2></FilterdCategoryTable2>
       
      
        </Container>
        </div>

    )
}

export default PageGalerie;