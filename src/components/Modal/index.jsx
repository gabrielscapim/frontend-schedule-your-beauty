import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={ styles.modal }>
      <div className={ styles['modal-content'] }>
        {children}
        <div className={ styles['buttons-container'] }>
          <button
            onClick={ onClose }
            type="button"
            className={ `${styles.button} ${styles['cancel-button']}` }
          >
            Cancelar
          </button>
          <button
            onClick={ onConfirm }
            type="button"
            className={ `${styles.button} ${styles['confirm-button']}` }
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {}.isRequired;

export default Modal;
