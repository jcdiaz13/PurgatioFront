import styled from 'styled-components';
import LogoFront from '../../app/img/logo 300px.png'


export const Logo = styled.img`
width: 200px;
height: 100px;
background-image: url(${LogoFront});
background-repeat: no-repeat;

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  background-image : url("https://i.gifer.com/3Q8c.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  font-family: Title;  
 `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin-top: 1rem;
  gap: 10px; /* Añade un espacio entre los botones */
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
  transform: translateY(0px);
  color: black;
}
`;


