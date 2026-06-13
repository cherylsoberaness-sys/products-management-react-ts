import { getToken } from '@core/helpers/storage';
import type { Product, ProductCreateDTO } from '@features/products/entities/Product';




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

export const createProduct = async (product: ProductCreateDTO) => {
    const token = getToken();
    const url = 'http://localhost:8000/api/products'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`          
        },
        body: JSON.stringify(product)
    })

    if(!response.ok){
        throw new Error('No fue posible cargar el producto');
    }

    return await response.json();

}

export const upload = async (image: File | null) => {
    const token = getToken();
    if(!image) return
    const formdata = new FormData();
    formdata.append('file', image);

    const url = 'http://localhost:8000/upload';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formdata
    })

    if(!response.ok) {
        throw new Error('No fue posible cargar la imagen')
    }

    const imagePath = await response.json();
    
    return imagePath
}

export const deleteProduct = async (id: string) => {
    const token = getToken();
    const url = `http://localhost:8000/api/products/${id}`
    const response = await fetch(url, {
        method: 'Delete',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const messsage = await response.json();
    if(!response.ok) {
        return messsage.messsage
    }
}