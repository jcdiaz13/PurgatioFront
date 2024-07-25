import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -3;
  background: url("https://img.itch.zone/aW1hZ2UvMTIxNjU4LzU2MDM4MS5wbmc=/315x250%23c/yrkGs9.png") no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;

export const SubContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items:center;
text-align:center;
width: 85%;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #fff;

`;


export const OptionButton = styled.button`
  background-color: lightblue;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: deepskyblue;
  }
`;

export const PlayerCard = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 150px;
  margin: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  box-sizing: border-box; /* Incluye padding en el tamaño total del elemento */

  &:focus {
    transform: translateY(4px);
    box-shadow: 1px 1px 10px white;
    background-color: white;
  }

  &:hover {
    box-shadow: 1px 1px 10px white;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover; /* Asegura que la imagen se ajuste bien al contenedor */
  }

  p {
    margin-top: 0px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: transparent;
  }
`;

export const PlayerName = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: red;
`;


export const PlayerContainer = styled.div`
display: flex;
flex-wrap: wrap;
width:300px;
height:500px;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center
`

export const Button = styled.button`
  font-family: Pixellari;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  z-index: 1;
  user-select: none;
  cursor: pointer;
  letter-spacing: 1px;
  white-space: unset;
  padding: 8px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  width: 80px;
  margin-top: 10px;

  &:before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
    z-index: -1;
    background-color: black !important;
    box-shadow: 0 -2px rgb(255 255 255 / 50%) inset,
      0 2px rgb(255 255 255 / 80%) inset, -2px 0 rgb(255 255 255 / 80%) inset,
      2px 0 rgb(255 255 255 / 50%) inset;
  }

  &:after {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  }

  &:hover:before {
    color: black;
    ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
        background-color: #ffd700 !important;
      `}
    ${({ theme }) =>
    theme.name === "mago" &&
    css`
        background-color: #228b22 !important;
      `}
    ${({ theme }) =>
    theme.name === "hada" &&
    css`
        background-color: #228b22 !important;
      `}
    box-shadow: 0 -2px rgb(0 0 0 / 50%) inset, 0 2px rgb(255 255 255 / 20%) inset, -2px 0 rgb(255 255 255 / 20%) inset, 2px 0 rgb(0 0 0 / 50%) inset;
  }

  &:hover:after {
    color: black;
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
  }

  &:active {
    transform: translateY(4px);
  }

  &:active:after {
    color: black;
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`;