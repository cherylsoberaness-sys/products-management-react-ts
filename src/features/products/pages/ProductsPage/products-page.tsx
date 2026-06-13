import type { ProductFilter } from "@core/types/products-filter";
import { Layout } from "@core/components/layout/layout";
import { getMenuOptions } from "@core/components/menu/menu-options";
import { ProductsList } from "@features/products/components/product-list/product-list";
import { useProducts } from "@features/products/components/product-list/use-products";
import { ProductsFilter } from "@features/products/components/filters/product-filters";
import { Navigate, useSearchParams } from "react-router-dom";
import type { Product } from "@features/products/entities/Product";
import { normalize } from "@core/helpers/utils";


const ProductsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const { products, notification, loading } =  useProducts();

    const filter: ProductFilter = {
        name: searchParams.get('name') ?? '',
        isOnSale: searchParams.get('isOnSale') === 'true'
    }

    if (loading) {
        return <p>Cargando...</p>;
    }
    
    if(products.length === 0) {
        return <Navigate to="/products/new" replace/>
    }


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