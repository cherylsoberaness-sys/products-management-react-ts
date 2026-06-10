import { ProductItem } from "../product-item/product-item";
import { NavLink } from "react-router-dom";
import type { Product } from '@features/products/entities/Product'
import './product-list.css'

type Props = {
    readonly products: Product[];
}

export const ProductsList: React.FC<Props> = ({ products }) => {


    return (
        <>
            <section>
                <ul className="products-container">
                    {products.map((product) =>
                        <NavLink key={product.id} className="navlink" to={`/products/${product.id}`}>
                            <ProductItem product={product}></ProductItem>
                        </NavLink>
                    )}
                </ul>
            </section>
    
        </> 
    )
}

