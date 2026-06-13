import { useEffect, useState } from "react"
import type { Product } from "@features/products/entities/Product"
import { getProduct } from '@features/products/services/products-repo'



export const useDetails = (productId: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    
    useEffect(() => {
        const loadProduct = async (): Promise<void> => {
            
            try {
                const product = await getProduct(productId);
                setProduct(product);
            } catch {
                setNotFound(true);
            }
        }
        loadProduct();
    }, [productId])

    return {
        product,
        notFound
    }
}