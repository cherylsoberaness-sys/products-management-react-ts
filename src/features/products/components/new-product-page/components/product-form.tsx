import type { ProductCreateDTO } from "@features/products/entities/Product";
import { useState } from "react";
import { createProduct, upload } from '@features/products/services/products-repo';
import './product-form.css'
import { useNavigate } from "react-router-dom";



const initialProduct: ProductCreateDTO = {
    name: '',
    price: 0,
    description: '',
    image: '',
    isOnSale: false,
    tags: [],
}

export const ProductForm: React.FC = () => {
    const [ product, setProduct ] = useState(initialProduct);
    const [ image, setImage ] = useState<File | null>(null);
    const [tagsInput, setTagsInput] = useState<string>('');
    const navigate = useNavigate();


    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const imagePath = image ? await upload(image): null;

        

        const newProduct = {
            ...product,
            image: imagePath?.path ?? '',
            tags: tagsInput.split(',').map(tag => tag.trim())
        }
        
        const productCreated = await createProduct(newProduct);
        navigate(`/products/${productCreated.id}`);

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
        let newValue: boolean | number | string;

        if( type === 'checkbox') {
            newValue = (event.target as HTMLInputElement).checked;
        } else if (type === 'number') {
            newValue = Number(value);
        } else {
            newValue = value
        }


        setProduct({
            ...product,
            [name]: newValue
        })
    }

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>

    ) => {
        const file = event.target.files ? event.target.files[0] : undefined
        
        if(!file) return

        setImage(file)
    }

    const canSubmit = 
    product.name && 
    product.price > 0 && 
    product.description &&
    tagsInput

    return (
        <form className="product-form" onSubmit={handleSubmit} >
            <label>
                Nombre:
                <input type="text" name="name" value={product.name} onChange={handleChange} required/>                
            </label>            
            <label>
                Precio:
                <input type="number" name="price" value={product.price} onChange={handleChange} required/>
            </label>
            <label>
                Descripción:
                <textarea name="description" value={product.description} onChange={handleChange} rows={4} required></textarea>
            </label>
            <div className="image">
                <label>
                    Subir imagen:
                    <input type="file" name="image" onChange={handleChangeImage}/>
                </label>
            </div>
            <label>
                ¿En oferta?:
                <input type="Checkbox" name="isOnSale" checked={product.isOnSale} onChange={handleChange}/>
            </label>

            <label>
                Tags:
                <input type="text" name="tags" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} required/>
            </label>

            <button type="submit" disabled={!canSubmit}>Submit</button>
        </form>
    )
}