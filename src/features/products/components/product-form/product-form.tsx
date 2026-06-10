import { Layout } from "../../../../core/components/layout/layout";
import { MenuOptions } from "../../../../core/components/menu/menu-options";


const NewProductPage: React.FC = () => {
    return ( 
        <Layout appTitle="Product Management Dashboard" subTitle="Administra tus productos facilmente" menuOptions={MenuOptions}>
            <p>Aqui va el formulario de nuevo producto</p>
        </Layout>
    )
}

export default NewProductPage;