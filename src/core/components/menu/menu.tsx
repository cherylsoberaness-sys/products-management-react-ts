import { NavLink } from "react-router-dom";
import type { MenuOption } from "../../types/menu-option-types";
import LogoutButton from '@features/auth/components/logout/logout-button'
import { getToken } from "@core/helpers/storage";
import "./menu.css"

type Props = { 
    readonly options?: MenuOption[];
}


export const Menu: React.FC<Props> = ({ options }) => {
    const token = getToken();
    return  (
        <nav>
            {options?.map((option) => (
                <NavLink className="nav-header" key={option.path} to={option.path!}>
                    {option.label}
                </NavLink>
            ))}
            {token && <LogoutButton />}
        </nav>
    )
}