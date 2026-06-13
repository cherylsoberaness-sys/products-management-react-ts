import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDetails } from "./use-details";
import { Layout } from "@core/components/layout/layout";
import { getMenuOptions } from "@core/components/menu/menu-options";
import { ConfirmModal } from "@core/components/confirmModal/confirm-modal";
import { deleteProduct } from "@features/products/services/products-repo";
import { useState } from "react";
import "./product-detail.css"


const ProductDetailPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const { id } =  useParams();
    const navigate = useNavigate();
    
    const { product, notFound } = useDetails(id!);

    if (notFound) {
        return <Navigate to="/404" replace />;
    }
    if (!product) {
        return <p>Cargando...</p>;
    }

    const handleStartDelete = () => {
        setShowModal(true)
    }

    const handleDelete = async () => { 

        await deleteProduct(id!);
        navigate('/products');
    }
    
    return (
        <Layout appTitle="Detalles del producto" menuOptions={getMenuOptions()}>
            <div className="product-detail">
                <div className="detail-img-container">
                    {product.image ? 
                        (<img src={product.image} alt={product.name} />) :
                        
                        (<span>Sin imagen</span>)}
                </div>
                <div className="detail-content">
                    <h3>{product.name}</h3>
                    <h2 className="price">${product.price}</h2>
                    <p className="promotion">Oferta: {product.isOnSale? 'si' : 'no'}</p>
                    <p className="description">{product.description}.</p>
                    <p className="tags">{product.tags? product.tags.map(tag => `#${tag}`).join(' '): ''}</p>
                </div>
                <button onClick={handleStartDelete}>Borrar Producto</button>
                {showModal && <ConfirmModal onConfirm={handleDelete} onClose={() => {setShowModal(false)}}/>}
            </div>
        </Layout>
    )


}

export default ProductDetailPage;