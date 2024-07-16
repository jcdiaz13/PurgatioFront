import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  margin: 0;
`;

export const Cover = styled.div`
  position: relative; 
  background-color: lightpink; 
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
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
    transition: transform 0.5s;
    transform: scale(1.1); 
  }
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
  position: relative; /* Añadido para posicionar el CloseButton relativo a ModalContent */
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const OptionButton = styled.button`
  background-color: lightblue;
  border: none;
  color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
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
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  &:hover,
  &:focus {
    outline: 2px solid deepskyblue;
  }
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;
