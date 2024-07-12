import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1000;  
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  z-index: 999;
`;
export const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-family: Pixellari;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  z-index: 1;
  user-select: none;
  cursor: pointer;
  letter-spacing: 1px;
  white-space: unset;
 padding: 10px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0,.8,.26,.99);
  width: 91px;


&:before {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  transition: .7s cubic-bezier(0,.8,.26,.99);
  z-index: -1;
  background-color: black!important;
  box-shadow:0 -2px rgb(255 255 255 / 50%) inset, 0 2px rgb(255 255 255 / 80%) inset, -2px 0 rgb(255 255 255 / 80%) inset, 2px 0 rgb(255 255 255 / 50%) inset;
}

&:after {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
  transition: .7s cubic-bezier(0,.8,.26,.99);

}

&:hover:before {
  color: black;
  background-color:#7CFC00 !important;
  box-shadow: 0 -2px rgb(0 0 0 / 50%) inset, 0 2px rgb(255 255 255 / 20%) inset, -2px 0 rgb(255 255 255 / 20%) inset, 2px 0 rgb(0 0 0 / 50%) inset;
}

&:hover:after {  
  color: black;
  box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
}

&:active {  
  transform: translateY(4px);
}

&:active:after {
  color: black;
  background-color:#7CFC00 !important;
  box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
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
 width: 250px;
  height: 250px;
  border-radius: 50%; 
  margin: auto;
  cursor: pointer;
   img{
    border: solid 4px black;
    box-shadow: 1px 1px 30px black;
    width: 250px;
    height: 250px;
    object-fit: cover;
    z-index: -1;
   }
`;

export const Name = styled.h2` 
font-family: Pixellari;
font-size: 25px;
margin: auto;
width: 150px;
box-sizing: border-box;
text-align: center;
margin-bottom: 10px;
text-shadow: 2px 2px grey;
`;
export const Description=styled.p`
text-align: center;
margin-bottom: 10px;
`