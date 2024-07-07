import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top:1rem;
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 0rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  color: white;
  z-index: 2; 
  transition: opacity 0.3s ease;
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  input {
    margin: 1rem 0;
    padding: 0.5rem;
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 75%;
  margin-top: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #006633;
  color: white;
  cursor: pointer;
  width: 100px;
  text-align: center;
  height: 40px; /* Altura fija para ambos botones */

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

export const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: white 2px solid;
  box-shadow: 4px 4px 60px #00CC66;
  overflow: hidden; /* Añadido para que la imagen no se desborde */


      img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
    border-radius: 50%; /* Hace que la imagen también sea redonda */
  }
`;

export const AvatarPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 330px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  border-radius: 8px;
  z-index: 3;
`;

export const AvatarOption = styled.div`
  width: 140px;
  height: 140px;
  margin: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border: black 3px solid;
  box-shadow: 2px 2px 40px black;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */

  &:hover {
    background-color: mediumaquamarine;
  }

    img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
    border-radius: 50%; /* Hace que la imagen también sea redonda */
  }
`;
