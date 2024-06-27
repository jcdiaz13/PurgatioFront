import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
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
  width: 500px;
  height: 500px;
  padding: 2rem;
  color: white;
  z-index: 2;
  opacity: ${({ isPopupOpen }) => (isPopupOpen ? 0.2 : 1)};
  transition: opacity 0.3s ease;

  h2 {
    margin-top: 2.5rem;
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
  width: 120px;
  text-align: center;
  height: 40px; /* Altura fija para ambos botones */

  &:hover {
    background-color: #32CD32;
  }

  &:nth-of-type(2) {
    background-color: #28a745;

    &:hover {
      background-color: #218838;
    }
  }
`;

export const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: black 1px solid;
`;

export const AvatarPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 1rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid black;
  z-index: 3;
`;

export const AvatarOption = styled.div`
  width: 80px;
  height: 80px;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border: black 1px solid;
  cursor: pointer;

  &:hover {
    background-color: mediumaquamarine;
  }
`;
