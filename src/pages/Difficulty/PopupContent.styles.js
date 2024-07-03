import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 color: white;
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
export const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #006633;
  color: white;
  cursor: pointer;
  width: 120px;
  text-align: center;

  &:hover {
    background-color: #66FFB2;
    color: black;
  }

  &:active {
  background-color: #CCFFE5;
  box-shadow: 0 2px white;
  transform: translateY(4px);
}
`;

export const ButtonClose=styled.button`
position: absolute;
  border: none;
  font-size: 0.8rem;
  background-color: #CC0000;
  color: white;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #FF3333;
    color: black;
  }

  &:active {
  background-color: #FF9999;
  box-shadow: 0 2px white;
  transform: translateY(4px);
}
`;

export const Box = styled.div`
display: flex;
 width: 225px;
  height: 225px;
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
   img{
    border: solid 7px black;
  border-radius: 50%;
    width: 225px;
    height: 225px;
    object-fit: cover;
   }
`;

export const Name = styled.h2` 
background-color: black;
font-family: Goddes;
font-size: 25px;
padding: 10px;
box-sizing: border-box;
text-align: center;
border-radius: 50%;
margin-bottom: 15px;
box-shadow: 1px 1px 30px white;
`
export const Description=styled.p`
text-align: center;
margin-bottom: 15px;
`