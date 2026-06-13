import { Layout } from "@core/components/layout/layout";
import { getMenuOptions } from "@core/components/menu/menu-options"
import { ProductForm } from "@features/products/components/product-form/product-form";


const NewProductPage: React.FC = () => {


    return ( 
        <Layout appTitle="Crear nuevo producto" subTitle="" menuOptions={getMenuOptions()}>
            <ProductForm />
        </Layout>
    )
}

export default NewProductPage;