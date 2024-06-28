import styled from 'styled-components';

export const ContainerAll = styled.div`
background-color: blue;
`
export const Title=styled.h1`
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
`

export const CirclesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  h1 {
    margin-bottom: 10px;
  }
`;

export const Circle = styled.div`
  width: 225px;
  height: 225px;
  border: solid 1px black;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Box = styled.div`
  width: 225px;
  height: 225px;
  border: solid 1px black;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  img{
    border: solid 1px black;
  border-radius: 50%;
    width: 225px;
    height: 225px;
    object-fit: cover;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  z-index: 1000;
  
`;


