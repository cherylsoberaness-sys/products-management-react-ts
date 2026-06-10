export type Product = {
    name: string;
    price: number;
    description: string;
    image?: string;
    isOnSale: boolean;
    tags: string[];
    userId?: number;
    updatedAt?: string;
    id: number;
}

export type ProductCreateDTO = Omit<Product, 'id'>;
export type ProductUpdateDTO = Partial<ProductCreateDTO>;