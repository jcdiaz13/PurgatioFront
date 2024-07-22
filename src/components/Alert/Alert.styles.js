import styled from 'styled-components';

// Contenedor del Popup
export const AlertWrapper = styled.div`

  position: fixed; /* Posiciona el alert de manera fija en la pantalla */
  top: 0; /* Coloca el alert en la parte superior de la pantalla */
  left: 50%; /* Centra el alert horizontalmente */
  transform: translateX(-50%); /* Ajusta la posición para que esté centrado respecto a su propio ancho */
  margin-top:20px; /* Espacio alrededor del alert */
  box-shadow: 4px 4px 10px -10px rgba(0, 0, 0, 1); /* Sombra del alert para darle un efecto de profundidad */
  z-index: 1000; /* Asegura que el alert esté sobre otros elementos */
`;

// Estilo del Popup
export const Popup = styled.div`
  display: flex; /* Utiliza Flexbox para el diseño del contenido del popup */
  align-items: center; /* Centra los elementos verticalmente dentro del popup */
  border-radius: 4px; /* Bordes redondeados del popup */
  padding: 10px; /* Espacio interno alrededor del contenido del popup */
  font-weight: 300; /* Peso de fuente ligero para el texto del popup */
  background-color: ${({ type }) =>
    type === 'success' ? '#edfbd8' :
      type === 'alert' ? '#fefce8' :
        type === 'error' ? '#fef2f2' :
          '#eff6ff'}; /* Color de fondo según el tipo */
  border: 1px solid ${({ type }) =>
    type === 'success' ? '#84d65a' :
      type === 'alert' ? '#facc15' :
        type === 'error' ? '#f87171' :
          '#1d4ed8'}; /* Color del borde según el tipo */
  color: ${({ type }) =>
    type === 'success' ? '#2b641e' :
      type === 'alert' ? '#ca8a04' :
        type === 'error' ? '#991b1b' :
          '#1d4ed8'}; /* Color del texto según el tipo */
  margin-bottom: 10px; /* Espacio entre popups si hay más de uno */
`;

// Icono del Popup
export const Icon = styled.div`
  margin-right: 10px; /* Espacio a la derecha del ícono */
  display: flex; 
  align-items: center; 
  
  svg {
    width: 1.25rem; /* Ancho del ícono SVG */
    height: 1.25rem; /* Altura del ícono SVG */
  }
`;

// Mensaje del Popup
export const Message = styled.div`
  flex-grow: 1; /* Permite que el mensaje ocupe todo el espacio disponible */
`;

// Icono de Cierre del Popup
export const CloseIcon = styled.div`
  margin-left: auto; /* Empuja el ícono de cierre hacia el final del contenedor flex */
  cursor: pointer; /* Cambia el cursor a mano para indicar interactividad */
  margin-top: 5px;
  svg {
    width: 1.25rem; /* Ancho del ícono SVG */
    height: 1.25rem; /* Altura del ícono SVG */
  }

  .close-button {
    fill: grey; /* Color del ícono de cierre */
  }
`;