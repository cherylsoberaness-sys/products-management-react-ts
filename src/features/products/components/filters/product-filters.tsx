import { useState } from "react"
import { type ProductFilter } from "@core/types/products-filter";
import { useSearchParams } from "react-router-dom";
import "./product-filter.css"
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
            <form className="filter" onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={filter.name} onChange={handleChange}></input>
                </label>
                <label>
                    Promocion:
                    <input type="checkbox" name="isOnSale" checked={filter.isOnSale} onChange={handleChange}></input>
                </label>
                <button className="Search" type="submit">Buscar</button>
            </form>
        </>
    )

}