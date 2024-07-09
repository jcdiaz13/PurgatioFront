import styled, { css } from 'styled-components';


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
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3450511a-482f-43cd-ad8c-d2e242fafe46/desf83r-9d3c0738-688d-4c1e-95ae-6a72138ce896.jpg/v1/fit/w_828,h_1070,q_70,strp/blood_and_doom_hellish_background_by_g_hamm_desf83r-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NCIsInBhdGgiOiJcL2ZcLzM0NTA1MTFhLTQ4MmYtNDNjZC1hZDhjLWQyZTI0MmZhZmU0NlwvZGVzZjgzci05ZDNjMDczOC02ODhkLTRjMWUtOTVhZS02YTcyMTM4Y2U4OTYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.F2aUXRuMyaSv3kZyO5iaOETG7k7qTwOE9zt1nhXH-eU");
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
  color: white;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.p`
color: red;
margin: 0;
margin-bottom: 20px;

;
`
//PopUp
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  padding: 2rem;
 /* Cambia el color de fondo del modal */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px radius  #ccc;
`;


export const Textarea = styled.textarea`
  padding: 1.5rem; /* Ajustado el padding para que sea más proporcionado */
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%; /* Ajustado para que ocupe todo el ancho disponible */
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
