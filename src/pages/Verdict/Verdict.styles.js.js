import styled from 'styled-components';

export const Cover = styled.div`
  position: relative; 
  background-color: lightpink; 
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px; 
    position: absolute; 
    top: 0;
    left: 0;
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
  width: 130px;
  height: 150px;
  background-color: lightblue; 
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin: 10px;
  cursor: pointer;

 &:hover ${Cover} {
    transition: transform 0.5s, scale 0.5s; /* Cambia la transición */
    transform: scale(1.1); /* Escala el Cover al 110% */
  }
`;

export const Container = styled.div`
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
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 5px; 
  right: 0px; 
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const OptionButton = styled.button`
  background-color: lightblue;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: deepskyblue;
  }
`;
export const OptionContainer = styled.div`
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover img,
  &:focus img {
    transform: scale(1.2); /* Escala al hacer hover o focus */
    transition: transform 0.3s;
  }

  &:hover,
  &:focus {
    outline: 2px solid deepskyblue; /* Contorno para indicar el enfoque */
  }
`;