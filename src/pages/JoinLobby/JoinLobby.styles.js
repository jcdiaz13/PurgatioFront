import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://i.gifer.com/3Q8c.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-family:Pixellari ;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);
  z-index: 3;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: Title;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
 color: white;
  z-index: 2;
  opacity: ${({ ispopupopen }) => (ispopupopen ? 0.2 : 1)};
  transition: opacity 0.3s ease;

  h2 {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
`;

export const Input = styled.input`
  padding: 0.5rem;

  margin-top:1rem;
  border: 1px solid black;
  border-radius: 4px;
  width: 180px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 91px;
  text-align: center;
  font-family: Pixellari;
  height: 35px;

  &:hover {
    background-color: #FDC500;
    color: black;
  }
  &:active {
  background-color: #FFD500;
  box-shadow: 0 2px #FFD500;
  transform: translateY(4px);
  color: black;
}
`;

export const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: white 2px solid;
  box-shadow: 4px 4px 60px #FFD500;
  overflow: hidden; /* Añadido para que la imagen no se desborde */


      img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
    border-radius: 5%; /* Hace que la imagen también sea redonda */
  }
`;
export const AvatarPopup = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  width: 330px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;   
  z-index: 3;
`;

export const AvatarOption = styled.div`
  width: 140px;
  height: 140px;
  margin: 0.5rem;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border: black 3px solid;
  box-shadow: 2px 2px 20px black;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  &:hover {
    box-shadow: 2px 2px 10px #FFD500;
  }
  &:active {
  box-shadow: 2px 2px 10px #FFD500;
  transform: translateY(4px);
}

    img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
    border-radius: 5%; /* Hace que la imagen también sea redonda */
  }
`;