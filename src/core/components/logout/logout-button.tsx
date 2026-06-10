import { removeToken } from "@core/helpers/storage"
import { useNavigate } from "react-router-dom";


const LogoutButton : React.FC = () => { 
    const navigate = useNavigate();
    const logout = () => {
        
        removeToken();
        
        navigate('/login');
    }

    return <button onClick={logout}>Logout</button>
}

export default LogoutButton;