import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pergamino from '../../app/assets/img/pergaminolado.png'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://i.gifer.com/3Q8c.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-family:Pixellari ;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 3;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: Title;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
 color: white;
  z-index: 2;
  opacity: ${({ ispopupopen }) => (ispopupopen ? 0.2 : 1)};
  transition: opacity 0.3s ease;

  h2 {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }  
`;

export const Pergamino = styled.div`
background-image: url(${pergamino});
width: 200px;
height: 40px;
background-size: cover;
background-repeat: no-repeat;
margin-top: 10px;
`;

export const Input = styled.input`
 margin-top: 12px;
 margin-left: 20px;
font-family: Pixellari;
background: transparent;
  border: none;  
 background-color: null;
  font-size: 1rem; 
  width: 160px;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
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
  background-color:#FFB300 !important;
  box-shadow: 0 -2px rgb(0 0 0 / 50%) inset, 0 2px rgb(255 255 255 / 20%) inset, -2px 0 rgb(255 255 255 / 20%) inset, 2px 0 rgb(0 0 0 / 50%) inset;
}

&:hover:after {  
  color: black;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
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

export const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(7px);
  cursor: pointer;
  overflow: hidden; /* Añadido para que la imagen no se desborde */
  border: solid 2px white;
 img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
   /* Hace que la imagen también sea redonda */
  }
 
`;
export const AvatarPopup = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  width: 330px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;   
  z-index: 3;
`;

export const AvatarOption = styled.div`
 width: 140px;
  height: 140px;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  &:hover {
    box-shadow: 1px 1px 10px white;  }
  &:active {
  transform: translateY(4px)contrast(80%);
  -webkit-backdrop-filter: blur(2px) contrast(80%);
  box-shadow: 1px 1px 10px white; 
}

    img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen se recorte adecuadamente dentro del contenedor */
  }
`;