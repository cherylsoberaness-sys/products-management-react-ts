import type { Product } from "@features/products/entities/Product"
import "./product-item.css"


type Props = {
    product: Product;
}

export const ProductItem: React.FC<Props> = ({product}) => {
    return (
        <li className="product-item">
            
            <div className="product-img-container">
                {product.image ? (
                <img src={product.image} alt={product.name} />
                ) : (
                <span>Sin imagen</span>
                )}
            </div>
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>Promotion: {product.isOnSale? 'yes' : 'no'}</p>
                <p>{product.tags? product.tags.map(tag => `#${tag}`).join('') : ''}</p>
            </div>            
        </li>
    )
}

