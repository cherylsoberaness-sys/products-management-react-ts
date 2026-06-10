import { useEffect, useState } from "react"
import type { Product } from "@features/products/entities/Product"
import { getProducts } from '@features/products/services/products-repo'




export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [notification, setNotification] = useState<string | null>(null);
    
    useEffect(() => {
        const loadProducts = async (): Promise<void> => {
            
            try {
                const products = await getProducts();
                setProducts(products);
                
            } catch (error) {
                const notification = error instanceof Error ? error.message : 'No fue posible cargar los productos' 
                setNotification(notification);
            }

        }
        loadProducts();
    }, [])

    return {
        products,
        notification
    }
}