import { useState } from "react"
import { type ProductFilter } from "@core/types/products-filter";
import { useSearchParams } from "react-router-dom";

const initialFilter: ProductFilter = {
    name: '',
    isOnSale: false 
}

export const ProductsFilter: React.FC = () => {
    const [filter, setFilter] = useState<ProductFilter>(initialFilter);
    const [,setSearchParams] = useSearchParams();

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params: Record<string, string> = {};
        if (filter.name) {
            params.name = filter.name;
        }
        if(filter.isOnSale) {
            params.isOnSale = 'true'
        }

        setSearchParams(params)

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} =  event.target

        setFilter ({
            ...filter,
            [name]: event.target.type === 'checkbox' ? event.target.checked : value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" value={filter.name} onChange={handleChange}></input>
                    Nombre:
                </label>
                <label>
                    <input type="checkbox" name="isOnSale" checked={filter.isOnSale} onChange={handleChange}></input>
                    Promocion:
                </label>
                <button type="submit">Buscar</button>
            </form>
        </>
    )

}