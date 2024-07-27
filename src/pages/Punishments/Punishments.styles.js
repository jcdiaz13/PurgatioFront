import styled from "styled-components";
import { css } from "styled-components";
import lava from "../../app/assets/gifs/lava.gif";
import pergamino from "../../app/assets/img/pergamino.png";

export const Container = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
  margin-left: 0%;
  margin-right: 0%;
  padding-top: 85px;
`;



export const Textarea = styled.textarea`
  margin-bottom: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  height: 222px;
  width: 215px; /* Ajustado para que ocupe todo el ancho disponible */
  text-align: center;
  border: none;
  resize: none;
  outline: none;
  background: transparent;
  background-position: center;
  overflow: hidden;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: 15px;
  border: 1px solid #743c09;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: bolder;
  background-color: transparent;
  color: #743c09;
  cursor: pointer;
  width: 80px;
  text-align: center;
  margin-top: 2px;

  &:hover {
    background-color: white;
  }
`;

export const ButtonTrash = styled(Button)`
  background-color: #ff0000;

  &:hover {
    background-color: #b81414;
  }
`;
// Contenedor del pergamino
export const ScrollContainer = styled.div`
  //position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

// Botón para abrir y cerrar el pergamino
export const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: black;
  font-family: Pixellari;
  color: white;
  cursor: pointer;
  text-align: center;
`;

// Pergamino (scroll)
export const Scroll = styled.div`
  width: 330px;
  height: ${(props) =>
    props.isOpen ? "480px" : "50px"}; /* Altura inicial y dinámica */
  overflow: hidden;
  background-image: url(${pergamino}); /* Ruta correcta */
  padding: 10px;
  border: none;
  transition: height 0.5s ease-in-out; /* Transición para la altura */
  display: flex;
  //align-items: center;
  justify-content: center;
`;

// Texto dentro del pergamino
export const ScrollText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  opacity: 0;
  transition: opacity 0.5s ease-out; /* Transición suave de opacidad */

  &.fade-in {
    opacity: 1;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const Sin = styled.p`
margin-top: 10px;
  font-size: 1rem;
  color: black;
  max-width: 215px;
  word-wrap: break-word; /* Permite el corte de palabras largas */
  overflow: hidden;
  white-space: normal; /* Permite que el texto ocupe múltiples líneas */
`;
