import styled from 'styled-components';

export const LobbyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const CirclesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  border: 1px solid black;
  border-radius: 10px;
  width: 60%;
  h1 {
    margin-bottom: 20px;
  }
`;

export const Circle = styled.div`
  width: 250px;
  height: 250px;
  border: solid 1px black;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
