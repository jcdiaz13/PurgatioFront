import styled, { keyframes } from 'styled-components';

// Definir la animación keyframes
const LoaderAnimation = keyframes`
  100% {
    background-size: 120% 100%;
  }
`;

// Crear el styled component
const Loader = styled.div`
  width: 35px;
  height: 5px;
  -webkit-mask: linear-gradient(90deg, #40404a 70%, #0000 0) left/20% 100%;
  background: linear-gradient(white 0 0) left/0% 100% no-repeat black;
  animation: ${LoaderAnimation} 2.8s infinite steps(6);
`;

export default Loader;
