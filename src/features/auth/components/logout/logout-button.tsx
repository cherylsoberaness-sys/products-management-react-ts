import { removeToken } from "@core/helpers/storage"
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "@core/components/confirmModal/confirm-modal";
import { useState } from "react";
import './logout-button.css'

const LogoutButton : React.FC = () => {
    const [showModal, setShowModal] = useState(false); 
    const navigate = useNavigate();
    
    const handleStartLogout = () => {
        setShowModal(true);
    }
    
    const logout = () => {
        
        removeToken();
        
        navigate('/login');
    }


    return (
        <>
            <button className="logout" onClick={handleStartLogout}>Logout</button>
            {showModal && <ConfirmModal onConfirm={logout} onClose={() => {setShowModal(false)}}/>}
        </>
        
    )
}

export default LogoutButton;