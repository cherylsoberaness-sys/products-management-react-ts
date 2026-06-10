import { getToken } from "@core/helpers/storage";
import type { MenuOption } from "../../types/menu-option-types";


export const getMenuOptions = (): MenuOption[] => { 
 const token = getToken();   
 return ([
            {
                path: `${token ? '' : '/login'}`,
                label: `${token ? '' : 'Login'}`
            },
            {
                path: '/products',
                label: 'Products'
            },
            {
                path: '/products/new',
                label: 'New Product'
            }
    
    ])

}