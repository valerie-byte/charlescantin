import Header from "../header";
import '../../styles/pagegalerie.css'
import FilterdCategoryTable from './FilterdCategoryTable'
import ProductCategoryImg from "./ProductCategoryImg"

function PageGalerie () {
    return(
        <div id="presentatPhoto">
            <Header></Header>
            <FilterdCategoryTable></FilterdCategoryTable>
            <ProductCategoryImg></ProductCategoryImg>
        </div>


    )
}

export default PageGalerie;