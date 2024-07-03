import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.body`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif");
  background-repeat: no-repeat;
  background-size: cover;
<<<<<<< HEAD
  background-attachment: fixed;
=======
  height: 100vh
 
>>>>>>> 67eb6526f16e65fe560c3dd00ca4666210230f2d
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
 color: white;
  z-index: 2;
  opacity: ${({ isPopupOpen }) => (isPopupOpen ? 0.2 : 1)};
  transition: opacity 0.3s ease;

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top:1rem;
  border: 1px solid black;
  border-radius: 4px;
  width: 60%;
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
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: black 1px solid;
`;

export const AvatarPopup = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;   
  z-index: 3;
`;

export const AvatarOption = styled.div`
  width: 120px;
  height: 120px;
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