import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 2rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
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
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 120px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-of-type(2) {
    background-color: #28a745;

    &:hover {
      background-color: #218838;
    }
  }
`;

export const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #555;
`;
