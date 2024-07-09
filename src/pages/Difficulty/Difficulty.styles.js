import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  background:url('https://i.pinimg.com/originals/37/6a/39/376a3925f8b6d181006e1f9750870735.gif');
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const Title = styled.h1`
justify-content: center;
font-family: Goddes;
display: flex;
text-align: center;
align-items: center;
margin-bottom:0;
padding:10px;
margin: 10px;
color: #66FFB2;
font-size: 25px;
`;

export const Box = styled.div`
display: flex;
 width: 225px;
  height: 225px;
  margin-bottom: 20px;
  cursor: pointer;
   img{
    border: solid 4px black;
    box-shadow: 1px 1px 30px black;
  border-radius: 5%;
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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);  
  z-index: 999;
`;


