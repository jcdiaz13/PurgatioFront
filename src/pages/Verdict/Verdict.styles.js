import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0 auto;
    width: 50%;
    text-align: center;
    background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`;

export const Table = styled.div`
  display: flex;
  gap: 10px;
  opacity: ${({ ispopupopen }) => (ispopupopen ? 0.2 : 1)};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border: 1px solid black;
`;

export const Header = styled.p`
  border-radius: 5px;
  border-bottom: 1px solid black;
  /* background-color: aquamarine; */
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Element = styled.p`
  border-radius: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  /* background-color: brown; */
  margin: 0;
  font-size: small;
  padding: 0.6rem;
`;

export const Judge = styled.div`
  position: relative;
  * {
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
