import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  background-color: #fff;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px; /* Añadido para limitar el ancho máximo */
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 0.8rem; /* Ajustado el padding para que sea más proporcionado */
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%; /* Ajustado para que ocupe todo el ancho disponible */
`;

export const ButtonContainer = styled.div`
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
  border-radius: 4px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 130px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonTrash = styled(Button)`
  background-color: #ff0000;

  &:hover {
    background-color: #b81414;
  }
`;
