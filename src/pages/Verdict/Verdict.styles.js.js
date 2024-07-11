import styled from 'styled-components';

export const Book = styled.div`
  position: relative;
  border-radius: 10px;
  width: 130px;
  height: 150px;
  background-color: lightblue; /* Cambiado para mostrar un color de fondo */
  box-shadow: 1px 1px 12px #000;
  transform: preserve-3d;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin: 10px;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 330px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: 3;
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

export const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: lightpink; /* Cambiado para mostrar un color de fondo */
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Book}:hover & {
    transform: rotateY(-80deg);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  z-index: 999; /* Z-index alto para que esté encima de todo */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  position: relative; /* Asegura que el posicionamiento absoluto funcione correctamente */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos horizontalmente */
  justify-content: center; /* Centra los elementos verticalmente */

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -20px;
    width: 40px;
    height: 40px;
    /* background-color: #fff; */
    transform: rotate(45deg);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 5px; /* Ajusta la posición del botón según tu diseño */
  right: 0px; /* Ajusta la posición del botón según tu diseño */
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1; /* Asegura que esté por encima del contenido */
`;
