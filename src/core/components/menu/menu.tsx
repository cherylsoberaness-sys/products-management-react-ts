import { NavLink } from "react-router-dom";
import type { MenuOption } from "../../types/menu-option-types";
import LogoutButton from '@features/auth/components/logout/logout-button'
import { getToken } from "@core/helpers/storage";


type Props = { 
    readonly options?: MenuOption[];
    readonly showLogout?: boolean;
}


export const Menu: React.FC<Props> = ({ options }) => {
    const token = getToken();
    return  (
        <nav>
            {options?.map((option) => (
                <NavLink key={option.path} to={option.path!}>
                    {option.label}
                </NavLink>
            ))}
            {token && <LogoutButton />}
        </nav>
    )
}