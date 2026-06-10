import { NavLink } from "react-router-dom";
import type { MenuOption } from "../../types/menu-option-types";
import LogoutButton from '@core/components/logout/logout-button'


type Props = { 
    readonly options: MenuOption[];
}


export const Menu: React.FC<Props> = ({ options }) => {
    return  (
        <nav>
            {options.map((option) => (
                <NavLink key={option.path} to={option.path!}>
                    {option.label}
                </NavLink>
            ))}
            <LogoutButton />
        </nav>
    )
}