import type { ProductFilter } from "@core/types/products-filter";
import { Layout } from "../../core/components/layout/layout";
import { getMenuOptions } from "../../core/components/menu/menu-options";
import { ProductsList } from "./components/product-list/product-list";
import { useProducts } from "./components/product-list/use-products";
import { ProductsFilter } from "./components/filters/product-filters";
import { useSearchParams } from "react-router-dom";
import type { Product } from "./entities/Product";
import { normalize } from "@core/helpers/utils";




const ProductsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const filter: ProductFilter = {
        name: searchParams.get('name') ?? '',
        isOnSale: searchParams.get('isOnSale') === 'true'
    }
    const { products, notification } =  useProducts();
        let filteredProducts: Product[] = products
    
        if (filter.name) {
            filteredProducts = filteredProducts.filter((product: Product) => 
            normalize(product.name).includes(normalize(filter.name)) )
        }
        if (filter.isOnSale) {
            filteredProducts = filteredProducts.filter((product: Product) => product.isOnSale)
        }
       
    return (
    <Layout appTitle="Frieren's Library Management" subTitle="" menuOptions={getMenuOptions()}>
        <ProductsFilter/>
        <ProductsList products={filteredProducts} />
        <p>{notification}</p>
    </Layout>
)
}            

export default ProductsPage;