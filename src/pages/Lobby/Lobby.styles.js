import styled, { css } from 'styled-components';
import mago from "../../app/assets/gifs/Wizard.gif";
import hada from "../../app/assets/gifs/fairy.gif";
import verdugo from "../../app/assets/gifs/Executioner.gif";

export const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 0px;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 100px auto 40px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #006633;
  color: white;
  cursor: pointer;
  width: 130px;
  text-align: center;

  &:hover {
    background-color: #66FFB2;
    color: black;
  }

  &:active {
    background-color: #CCFFE5;
    box-shadow: 0 2px white;
    transform: translateY(4px);
  }
`;

export const Id = styled.p`
  color: white;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-attachment: fixed;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 20px;

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

export const Box = styled.div`
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
      display: flex;
      width: 225px;
      height: 225px;
      border: solid 4px black;
      background-color: red;
      border-radius: 50%;
      margin-bottom: 20px;
      background-image: url(${verdugo});
      background-size: cover;
      justify-content: center;
      align-items: center;
    `}

  ${({ theme }) =>
    theme.name === "hada" &&
    css`
      display: flex;
      width: 225px;
      height: 225px;
      border: solid 4px black;
      background-color: pink;
      border-radius: 50%;
      margin-bottom: 20px;
      background-image: url(${hada});
      background-size: cover;
      justify-content: center;
      align-items: center;
    `}

  ${({ theme }) =>
    theme.name === "mago" &&
    css`
      display: flex;
      width: 225px;
      height: 225px;
      border: solid 4px black;
      background-color: blue;
      border-radius: 50%;
      margin-bottom: 20px;
      background-image: url(${mago});
      background-size: cover;
      justify-content: center;
      align-items: center;
    `}  
`;

export const StyledMetaContainer = styled.div`
  background-color: black;
  padding: 8px;
  text-align: center;
`;
