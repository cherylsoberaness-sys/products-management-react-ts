import type { Product } from "@features/products/entities/Product"
import "./product-item.css"


type Props = {
    product: Product;
}

export const ProductItem: React.FC<Props> = ({product}) => {
    return (
        <li className="product-item">
            <div className="product-img-container">
                <img src={product.image} alt=""/>
            </div>
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>Promotion: {product.isOnSale? 'yes' : 'no'}</p>
                <p>{product.tags.map((tag) => `#${tag}, `)}</p>
            </div>            
        </li>
    )
}

