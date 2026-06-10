import { getToken } from '@core/helpers/storage';
import type { Product } from '@features/products/entities/Product';




export const getProducts = async (): Promise<Product[]> => {
    const token = getToken();
    const url = 'http://localhost:8000/api/products';
    const response = await fetch(url, {
        'method': 'GET',
        'headers': {
            'Authorization': `Bearer ${token}`
        }

    })


    if(!response.ok) {
        throw new Error('No fue posible cargar los productos')
    }

    const products = await response.json();
    return products
    
}

export const getProduct = async (productId: string): Promise<Product> => {
    const token = getToken();
    const url = `http://localhost:8000/api/products/${productId}`;
    const response = await fetch(url, {
        'method': 'GET',
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    })

    if(!response.ok) {
        throw new Error('No fue posible cargar el producto');
    }

    const product = await response.json();

    return product
}