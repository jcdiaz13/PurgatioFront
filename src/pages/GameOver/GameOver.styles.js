import styled from "styled-components";
import { css } from "styled-components";
import lava from "../../app/assets/gifs/lava.gif";
import nube from "../../app/assets/gifs/nuve.gif";
import beach from "../../app/assets/gifs/beach1left.gif";


export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
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
      background-image: url(${beach});
    `}
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 90%;
`;
export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
  backdrop-filter: blur(5px) contrast(80%);
  -webkit-backdrop-filter: blur(5px) contrast(80%);
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
  // padding: 7px;
  width: 150px;
  height: 150px;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  // box-sizing: border-box; /* Incluye padding en el tamaño total del elemento */

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
    margin-bottom:0;
  }

  p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #cc1818;
    background-image: url(${nube});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
  }
`;

export const PlayerName = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const Message = styled.p`
  text-shadow: 2px 2px 7px #000;
  // font-weight: bold;
  font-size: 1.2rem;
  margin-top:10px;
  margin-bottom: 10px;
  color: white;
  backdrop-filter: blur(2px);
`;

export const MatchItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    margin: 0;
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 90%;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: auto; /* Permite el desplazamiento si hay desbordamiento */
  box-sizing: border-box;
`;

export const Button = styled.button`
  font-family: Pixellari;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 10px;
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

export const ButtonInfo = styled.button`
  font-family: Pixellari;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 25px;
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

export const AvatarPopup = styled.div`
  margin-top: 20px;
  position: relative;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  height: 95%;
`;

export const MiniInfo = styled.p`
  font-size: 0.95rem;
  color: #c0c0c0;
  span {
    text-decoration: underline;
    font-size: 1.1rem;
  }
`;
export const MiniInfo2 = styled.p`
  margin-top: 25px;
  font-size: 0.95rem;
  color: #c0c0c0;
`;

export const Info = styled.p`
  color: white;
`;
