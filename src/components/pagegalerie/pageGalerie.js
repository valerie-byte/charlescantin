import Header from "../header";
import '../../styles/pagegalerie.css'
import FilterdCategoryTable from './FilterdCategoryTable'
import ProductCategoryImg from "./ProductCategoryImg"

function PageGalerie () {
    return(
        <div>
            <Header></Header>
            <div id="presentatPhoto">
                <FilterdCategoryTable></FilterdCategoryTable>
                <ProductCategoryImg></ProductCategoryImg>
            </div>
        </div>


    )
}

export default PageGalerie;