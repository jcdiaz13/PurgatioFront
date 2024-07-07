import styled, { css } from 'styled-components';
import mago from "../../app/gifs/Wizard.gif"
import hada from "../../app/gifs/fairy.gif"
import verdugo from "../../app/gifs/Executioner.gif"

export const PlayerContainer = styled.div`
width: 300px;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: auto;
gap: 20px;
`
export const Player = styled.div` 
width: 100px;
height: 100px;
background-color: white;
border: solid 1px black;
  border-radius: 50%;
  font-size: 15px;
  display: flex;
  justify-content: center;
align-items: center;
margin: auto;
p{
display: flex;
justify-content: center;
align-items: center;
margin-left:15px;
} 
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
export const Gif = styled.div`
background-image: url(https://i.pinimg.com/originals/bb/52/20/bb5220dccb70fed4d9bd101efad8476d.gif);
`
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
color:white;
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
  background-repeat: no-repeat;
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

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  z-index: 1000;
  
`;

export const RoomId = styled.div`
  /* font-size: 20px; */
  /* text-align: center; */
  background-color: white;
  `

