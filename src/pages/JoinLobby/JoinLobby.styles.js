import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
 
  background-image: url("https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif");
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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 600px;
  padding: 2rem;
 color: white;
  z-index: 2;
  opacity: ${({ isPopupOpen }) => (isPopupOpen ? 0.2 : 1)};
  transition: opacity 0.3s ease;

  h2{
    margin-bottom: 0px;
  }
  
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top:1rem;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
  width: 50%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-top: 1rem;
`;

export const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #006633;
  color: white;
  cursor: pointer;
  width: 120px;
  text-align: center;

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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ccc;   
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: black 1px solid;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
