import styled, { css } from "styled-components";
import helado from "../../app/assets/gifs/ice-cream.gif";
import hada from "../../app/assets/gifs/fairy.gif";
import verdugo from "../../app/assets/gifs/reaper.gif";
import lava from "../../app/assets/gifs/lava.gif";

export const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Cambiado para ajustar automáticamente según el espacio */
  gap: 25px; /* Reducido el gap entre los jugadores */
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Reducido el max-width para que los jugadores no estén tan separados */
  margin: 20px auto; /* Ajustado el margen */
`;

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

export const LobbyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  object-fit: cover;
`;

export const CirclesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  h1 {
    margin-bottom: 10px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Circle = styled.div`
  width: 225px;
  height: 225px;
  border: solid 1px black;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Id = styled.p`
  color: white;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  background-attachment: fixed;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${lava});
    `}
  ${({ theme }) =>
    theme.name === "mago" &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("https://i.pinimg.com/originals/1b/45/63/1b456377a9dce67a7dc3630260aa7572.gif");
    `}
  ${({ theme }) =>
    theme.name === "hada" &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("https://i.pinimg.com/originals/1b/45/63/1b456377a9dce67a7dc3630260aa7572.gif");
    `}
`;

export const Box = styled.div`
  display: flex;
  margin-top: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  width: 200px;
  height: 200px;
  border: solid 2px black;
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
      background-image: url(${verdugo});
    `}

  ${({ theme }) =>
    theme.name === "hada" &&
    css`
      background-color: pink;
      border: solid 4px black;
      width: 225px;
      height: 225px;
      border-radius: 50%;
      background-image: url(${hada});
    `}

  ${({ theme }) =>
    theme.name === "mago" &&
    css`
      background-color: blue;
      border: solid 4px black;
      width: 225px;
      height: 225px;
      border-radius: 50%;
      background-image: url(${mago});
    `}

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
        width: 140px;
        height: 140px;
        border: solid 1px black;
        border-radius: 5%;
        background-image: url(${verdugo});
      `}

    ${({ theme }) =>
    theme.name === "hada" &&
    css`
        width: 150px;
        height: 150px;
        border: solid 2px black;
        border-radius: 50%;
        background-color: pink;
        background-image: url(${hada});
      `}

    ${({ theme }) =>
    theme.name === "mago" &&
    css`
        width: 150px;
        height: 150px;
        border: solid 2px black;
        border-radius: 50%;
        background-color: blue;
        background-image: url(${helado});
      `}
  }
`;

export const DeletePlayerButton = styled.button`
  font-weight: bold;
  font-size: 0.8rem;
  font-family: Pixellari;
  background-color: black;
  color: red;
  position: absolute;
  top: -5px;
  `;
