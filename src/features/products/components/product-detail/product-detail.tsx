import { useParams } from "react-router-dom";
import { useDetails } from "./use-details";
import { Layout } from "@core/components/layout/layout";
import { getMenuOptions } from "@core/components/menu/menu-options";
import "./product-detail.css"




const ProductDetailPage: React.FC = () => {
    const { id } =  useParams();
    
    const { product, notification } = useDetails(id!);

    if (notification) {
        return <p>{notification}</p>
    }
    if (!product) {
        return <p>Cargando...</p>;
    }
    
    return (
        <Layout appTitle="Detalles del producto" menuOptions={getMenuOptions()}>
            <div className="product-detail">
                <div className="detail-img-container">
                    {product.image ? 
                        (<img src={product.image} />) : 
                        (<img alt={product.name} />)}
                </div>
                <div className="detail-content">
                    <h3>{product.name}</h3>
                    <h2 className="price">${product.price}</h2>
                    <p className="promotion">Promotion: {product.isOnSale? 'yes' : 'no'}</p>
                    <p className="description">{product.description}.</p>
                    <p className="tags">{product.tags? product.tags.map(tag => `#${tag}`).join(' '): ''}</p>
                </div>

            </div>
        </Layout>
    )


}

export default ProductDetailPage;