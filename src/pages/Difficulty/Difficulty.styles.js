import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  background:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBdN3q0IRAb88OTyJA4eIxUX-l1xLZgTt8A&s');
  width: 100%;
  height: 100vh;
  align-items: center;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const Title = styled.h1`
justify-content: center;
display: flex;
text-align: center;
align-items: center;
margin-bottom:0;
padding:10px;
margin: 10px;
background-color: red;
`;

export const Box = styled.div`
display: flex;
 width: 225px;
  height: 225px;
  border: solid 1px black;
  border-radius: 50%;
  margin-bottom: 20px;
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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);  
  z-index: 999;
`;


