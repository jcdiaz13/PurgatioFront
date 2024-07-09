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
  padding:10px;
  margin: 0.5rem;
  border-radius: 1px;
  font-size: 1rem;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 120px;
  height: 40px;
  text-align: center;
  font-family: Pixellari;

  &:hover {
    background-color: #FF8C00;
    color: black;
  }
  &:active {
  background-color: #FF8C00;
  transform: translateY(4px);
  color: black;
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
  background-position: center;
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://i.pinimg.com/564x/8d/c8/ea/8dc8ea23e5e65320278f40aef945ecb0.jpg");
`}
${({ theme }) =>
    theme.name === "mago" &&
    css`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.alphacoders.com/124/thumb-1920-1248273.png");
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
 margin-top: 20px;
  ${({ theme }) =>
    theme.name === "verdugo" &&
    css`
     display: flex;
  width: 225px;
  height: 225px;
  border: solid 4px black;
  background-color: red;
  border-radius: 50%;
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

