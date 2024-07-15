import styled, { css } from 'styled-components';
import pergamino from '../../app/assets/img/pergamino.png';
import lava from '../../app/assets/gifs/lava.gif'


export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-attachment: fixed;
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
  background-image: url("https://i.pinimg.com/originals/c8/4f/22/c84f223d53773a3ce0f5dc2818d7db25.gif");
`}
${({ theme }) =>
    theme.name === "hada" &&
    css`
  background-repeat: no-repeat;
  background-size: cover;
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

;
`
//PopUp
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 500px;
  max-width: 800px;
  padding-top:5px;
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
  width: 170px; /* Ajustado para que ocupe todo el ancho disponible */
  border: none;
  resize: none;
    outline: none;
    background-image: url(${pergamino});
    background-position: center;
`;

export const ButtonContainer = styled.div`
position: absolute;
top: 500px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  gap: 10px; /* Añade un espacio entre los botones */
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  background-color: transparent;

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
