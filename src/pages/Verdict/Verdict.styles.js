import styled from "styled-components";
import isPropValid from '@emotion/is-prop-valid';
import question from "../../app/assets/gifs/questionVerdict.gif";
import { css } from "styled-components";
import lava from "../../app/assets/gifs/lava.gif";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  z-index: -3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
      background-image: url(${lava});
    `}
  ${({ theme }) =>
    theme.name === "mago" &&
    css`
      background-image: url("https://i.pinimg.com/originals/1b/45/63/1b456377a9dce67a7dc3630260aa7572.gif");
    `}
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 90%;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 300px;
`;

export const Button = styled.button`
  margin-top: 15px;
  bottom:0;
  margin-bottom:50px;
  font-family: Pixellari;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
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

export const Cover = styled.div`
  position: relative;
  backdrop-filter:blur(3px);
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 2;
    color: white;
    text-shadow: 1px 1px 10px #000;
  }
`;

export const Book = styled.div`
  //position: relative;
  width: 110px;
  height: 110px;
  background-image: url(${question});
  background-position: center;
  background-size: cover;
  box-shadow: 1px 1px 12px #000;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //color: #000;
  margin: 10px;
  cursor: pointer;
  &:hover ${Cover} {
    transition: transform 0.5s;
    transform: scale(1.1);
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px) contrast(80%);
  -webkit-backdrop-filter: blur(3px) contrast(80%);
  z-index: 2;
`;

export const ModalContent = styled.div`
  width: 80%;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  word-wrap: break-word; /* Permite el corte de palabras largas */
  white-space: normal; /* Permite que el texto ocupe múltiples líneas */
  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: red;
`;
export const MiniTitle = styled.h3`
  color: white;
`;
export const OptionButton = styled.button`
  font-family: Pixellari;
  font-size: 0.9rem;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  z-index: 1;
  user-select: none;
  margin-top: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  white-space: unset;
  padding: 10px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  width: 132px;

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
    background-color: #ffb300 !important;
    box-shadow: 0 -2px rgb(0 0 0 / 50%) inset,
      0 2px rgb(255 255 255 / 20%) inset, -2px 0 rgb(255 255 255 / 20%) inset,
      2px 0 rgb(0 0 0 / 50%) inset;
  }

  &:hover:after {
    color: black;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
  }

  &:active {
    transform: translateY(4px);
  }

  &:active:after {
    color: black;
    background-color: #ffb300 !important;
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`;
export const AvatarOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 150px;
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

// Estilo para el contenedor padre
export const AvatarPopup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 340px;
  align-items: center;
  /* height: 100vh; Asegura que el contenedor ocupe toda la altura de la pantalla */
  /* width: 100vw; Asegura que el contenedor ocupe toda la anchura de la pantalla */
  overflow: auto; /* Permite el desplazamiento si hay desbordamiento */
  box-sizing: border-box;
`;
export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px) contrast(80%);
  -webkit-backdrop-filter: blur(2px) contrast(80%);
  z-index: 3;
`;
export const OptionContainer = styled.div`
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 75%;
  }

  &:hover img,
  &:focus img {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  &:hover,
  &:focus {
    outline: 2px solid deepskyblue;
  }
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`;



export const Styledh3 = styled.h3`
    color:white;
    text-shadow: 2px 2px 7px #000;
    font-weight: bold;
    font-size: 1.3rem;
    color: white;
  
`;

export const WaitingPlayers = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'isOpen'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-family: Pixellari;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  color: black;
  background-repeat: no-repeat;
  width: 80%;
  max-width: 400px;
  height: 50px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s;

  h3 {
    font-size: 0.9rem;
    margin-left: 16px;
    margin-right: 2.2px;
    color: white;
  }
`;