import styled from "styled-components";

export const Container = styled.div`
/* background-image: url("https://th.bing.com/th/id/OIG4.5YRZWM_rkyu6IHSB6pTR?w=1024&h=1024&rs=1&pid=ImgDetMain" ) !important; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh !important ;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  /* background-color: rgba(255, 255, 255, 0.9); */
  opacity: ${({ ispopupopen }) => (ispopupopen ? 0.2 : 1)};
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
  background-color: brown;  
  margin: 0;
  font-size: small;
  padding: 0.6rem;
  cursor: pointer;
  
`;

export const Judge = styled.div`
  position: relative;
  * {
    top: 18%;
    /* transform: translate(-50%, -50%); */
    background-color: white;
    border: 1px solid grey;
    border-radius: 13px;
    padding: 0.3rem;
    position: absolute;
  }
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
