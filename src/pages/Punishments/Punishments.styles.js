import styled from 'styled-components';
import {css} from 'styled-components';

export const Container = styled.div`
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
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d05f52cc-6333-4fe6-90f7-c4f417c8b9ac/dfrch0w-f3b61d02-05e7-422a-9eb7-221bf7f023b6.png/v1/fill/w_1024,h_683,q_80,strp/tower_of_blood_by_weirddarkness_dfrch0w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvZDA1ZjUyY2MtNjMzMy00ZmU2LTkwZjctYzRmNDE3YzhiOWFjXC9kZnJjaDB3LWYzYjYxZDAyLTA1ZTctNDIyYS05ZWI3LTIyMWJmN2YwMjNiNi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zj2RNYPFDDdv6KD5w4nPPyN-zbhJiH40fm-HqEW2ez4");
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
 color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  padding: 0.8rem; /* Ajustado el padding para que sea más proporcionado */
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  width: 100%; /* Ajustado para que ocupe todo el ancho disponible */
  background-color: rgba(0, 0, 0, 0.5);
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
