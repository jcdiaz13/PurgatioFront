import styled from 'styled-components';
import LogoFront from '../../app/assets/gifs/LOGO.gif'


export const Logo = styled.div`
width: 279px;
height: 77px;
margin-bottom: 30px;
background-image: url(${LogoFront});
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  background-image : url("https://i.gifer.com/3Q8c.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  font-family: Title;  
  text-shadow: black 4px 4px;
 `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin-top: 1rem;
  gap: 10px; /* Añade un espacio entre los botones */
`;

export const Button = styled.button`
 font-family: Pixellari;
  font-size: 14px;
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
  width: 120px;


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
  box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
  transition: .7s cubic-bezier(0,.8,.26,.99);

}

&:hover:before {
  color: black;
  background-color:#FFB300 !important;
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
  background-color:#FFB300 !important;
  box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
}
`;


