import styled, { css } from "styled-components";
import pergamino from "../../app/assets/img/pergamino.png";
import lava from "../../app/assets/gifs/lava.gif";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

export const Title = styled.h1`
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
`;
//PopUp
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 500px;
  max-width: 800px;
  padding-top: 5px;
  /* Cambia el color de fondo del modal */
  background-image: url(${pergamino});
  background-image: cover;
  background-repeat: no-repeat;
  background-position: top;
  box-shadow: 30px black;
`;

export const Textarea = styled.textarea`
  padding: 1rem; /* Ajustado el padding para que sea más proporcionado */
  margin-bottom: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  height: 180px;
  text-align: center;
  width: 220px; /* Ajustado para que ocupe todo el ancho disponible */
  border: none;
  resize: none;
  outline: none;
  background-image: url(${pergamino});
  background-position: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  gap: 10px; /* Añade un espacio entre los botones */
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px solid #743c09;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: bolder;
  background-color: #f4aa51;

  color: #743c09;
  cursor: pointer;
  width: 80px;
  text-align: center;

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
