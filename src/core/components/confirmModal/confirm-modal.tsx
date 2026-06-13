import './confirm-modal.css'

interface Props { 
    onConfirm: () => void;
    onClose: () => void;
}

export const ConfirmModal: React.FC<Props> = ({onConfirm, onClose}) => {

        return (
        <div className="modal-overlay">
            <div className="confirm-modal">
                <h2>¿Estás seguro?</h2>
                <button id="confirm" onClick={onConfirm}>Confirmar</button>
                <button id="cancel" onClick={onClose}>Cancelar</button>
            </div>
        </div>
    )
    
}