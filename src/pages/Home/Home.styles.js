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
  background-image : url(https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  font-family: Goddes;  
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
