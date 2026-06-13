import './delete-modal.css'

interface Props { 
    onDelete: () => void;
    onClose: () => void;
}

export const DeleteModal: React.FC<Props> = ({onDelete, onClose}) => {

        return (
        <div className="modal-overlay">
            <div className="delete-modal">
                <h2>¿Estás seguro?</h2>
                <button id="delete" onClick={onDelete}>Borrar</button>
                <button id="delete" onClick={onClose}>cerrar</button>
            </div>
        </div>
    )
    
}