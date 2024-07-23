// src/components/Alert/Alert.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación
import { AlertWrapper, Popup, Message, CloseIcon } from './Alert.styles'; // Importa tus estilos aquí
import { FaTimes } from 'react-icons/fa'; // Ejemplo de un icono de cierre

const Alert = ({ id, type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000); // Desvanece después de 3 segundos

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <AlertWrapper>
      <Popup type={type}>
        <Message>{message}</Message>
        <CloseIcon onClick={() => onClose(id)}>
          <FaTimes className="close-button" />
        </CloseIcon>
      </Popup>
    </AlertWrapper>
  );
};

// Agrega la validación de propiedades aquí
Alert.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['success', 'alert', 'error', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
