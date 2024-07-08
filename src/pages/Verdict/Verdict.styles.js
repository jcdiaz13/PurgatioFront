import styled from 'styled-components';

export const Container = styled.div`
  background-image: url("https://th.bing.com/th/id/OIG4.5YRZWM_rkyu6IHSB6pTR?w=1024&h=1024&rs=1&pid=ImgDetMain");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 3em;
  opacity: ${({ isPopupOpen }) => (isPopupOpen ? 0.2 : 1)};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
  @media (max-width: 480px) {
    justify-content: center;
    padding: 5px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border: 1px solid black;
  background-color: red;
`;

export const Header = styled.p`
  border-radius: 5px;
  border-bottom: 1px solid black;
  background-color: aquamarine;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: purple;
`;

export const Element = styled.p`
  border-radius: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background-color: ${({ selected }) => (selected ? 'darkbrown' : 'brown')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  margin: 0;
  font-size: small;
  padding: 0.6rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
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

export const Popup = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  margin: 0;
  font-size: small;
  padding: 1rem;
  z-index: 3;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalBackground = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  position: fixed;
  background: red;
  width: 80%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 1001;
  border-radius: 50px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background: darkred;
  }
`;

export const UserButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;
