import styled from 'styled-components';

export const Button = styled.button`
  background-color: #333; /* Gris oscuro para el fondo del botón */
  border: none;
  color: #666; /* Gris medio para el color del icono */
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Asegúrate de que esté en posición fija */
  top: 20px;       /* Ajusta esto para la distancia desde la parte superior */
  right: 20px;     /* Ajusta esto para la distancia desde la derecha */
  z-index: 1000;   /* Asegúrate de que el botón esté sobre otros elementos */

  &:hover {
    background-color: #444; /* Gris más oscuro para el estado hover */
  }

  svg {
    width: 15px;
    height: 15px;
    color: #666; /* Gris medio para el icono */
  }
`;

export const StartButton = styled(Button)`
  background-color: #2196F3;
  font-size: 18px;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
`;
