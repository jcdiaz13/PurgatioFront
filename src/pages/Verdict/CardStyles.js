import styled from 'styled-components';

export const Cards = styled.div`
 display: flex;
  flex-direction: column;
  gap: 15px;/* Centra horizontalmente dentro del contenedor */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente dentro de la tarjeta */
  justify-content: center; /* Centra verticalmente dentro de la tarjeta */
  text-align: center;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
  position: relative; /* Necesario para el efecto de escala */

  &.red {
    background-color: #f43f5e;
  }
  &.red :not(:hover){
    filter: blur(10px); /* Elimina cualquier filtro de desenfoque cuando no está en hover */
    transform: scale(0.9); /* Escala más pequeña cuando no está en hover */
  }

  &.blue {
    background-color: #3b82f6;
  }

  &.green {
    background-color: #22c55e;
  }

  /* &:hover {
    transform: scale(1.1);
    z-index: 2; /* Para asegurar que la carta en hover esté encima de las demás */
  }
  &:not(:active) {
    transform: scale(0.9); /* Escala más pequeña cuando no está en hover */
    filter: blur(10px); /* Elimina cualquier filtro de desenfoque cuando no está en hover */
  } */
`;

export const Tip = styled.p`
  font-size: 1em;
  font-weight: 700;
`;

export const SecondText = styled.p`
  font-size: 0.7em;
`;
