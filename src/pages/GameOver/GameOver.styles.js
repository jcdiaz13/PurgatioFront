import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  height: 100vh;
  margin: 0;
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg') no-repeat center center fixed;
  background-size: cover;
`;

export const Cover = styled.div`
  position: relative; 
  background-color: lightpink; 
  width: 300px; /* Aumenta el tamaño de la tarjeta */
  height: 200px; /* Aumenta el tamaño de la tarjeta */
  cursor: pointer;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: 80px;
    position: absolute; 
    top: 10px;
    left: 10px;
    z-index: 1; 
  }

  p {
    position: relative; 
    z-index: 2; 
    color: white; 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  }
`;

export const Book = styled.div`
  position: relative;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
`;

export const BackgroundText = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  color: rgba(255, 0, 0, 0.7);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const OptionButton = styled.button`
  background-color: lightblue;
  border: none;
  padding: 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: deepskyblue;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
