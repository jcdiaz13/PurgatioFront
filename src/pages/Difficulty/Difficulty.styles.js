import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  background:url('https://i.gifer.com/3Q8c.gif');
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
  background-position: center;
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
display: flex;
text-align: center;
font-family: Pixellari;
align-items: center;
margin-bottom:0;
padding:10px;
margin: 10px;
color: white;
font-size: 25px;
`;

export const Box = styled.div`
display: flex;
 width: 200px;
  height: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  border: solid 2px white;
  backdrop-filter: blur(4px);
   img{
    width: 200px;
    height: 200px;
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


