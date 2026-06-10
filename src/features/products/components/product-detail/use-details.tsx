import { useEffect, useState } from "react"
import type { Product } from "@features/products/entities/Product"
import { getProduct } from '@features/products/services/products-repo'


export const useDetails = (productId: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    
    useEffect(() => {
        const loadProduct = async (): Promise<void> => {
            try {
                const product = await getProduct(productId);
                setProduct(product);
            } catch (error) {
                const notification = error instanceof Error ? error.message : 'No fue posible cargar los productos';
                setNotification(notification);
            }
        }
        loadProduct();
    }, [productId])

    return {
        product,
        notification
    }
}