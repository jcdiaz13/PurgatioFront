import styled from 'styled-components';
import pergamino from '../../app/assets/img/pergamino.png'
import question from '../../app/assets/gifs/question.gif'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: -3;
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg') no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;
export const Cover = styled.div`
  position: relative;
 backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    z-index: 1; 
  }

  p {
    position: relative; 
    z-index: 2; 
    color: white; 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  }
`;

export const Book = styled.div`
  position: relative;
  width: 130px;
  height: 150px;
  background-image: url(${question});
   background-position: center;
  background-size: cover; 
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin: 10px;
  cursor: pointer;
  &:hover ${Cover} {
    transition: transform 0.5s;
    transform: scale(1.1); 
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);  
`;

export const ModalContent = styled.div`
  position: relative; 
  color: white; 
  align-items: center; 
  justify-content: center;
  text-align: center;
  h3{
    font-size: 1.2rem;
  }
  p{
    font-size: 1.2rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: red;
`;
export const MiniTitle = styled.h3`
color:white;
`;
export const OptionButton = styled.button`
margin-top: 10px;
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
  width: 190px;


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
export const AvatarPopup = styled.div`
 position: absolute;
  width: 100%;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;   
  z-index: 4;
  backdrop-filter:blur(4px);
`;
export const AvatarOption = styled.div`
 width: 150px;
  height: 150px;
  margin: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  &:focus {
  transform: translateY(4px);
  box-shadow: 1px 1px 10px white;
  background-color : white;
}
  &:hover {
    box-shadow: 1px 1px 10px white;  
  }

    img {
    width: 120px;
    height: 120px;
  }
  p{
    margin-top: 0px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: transparent;
  }
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
export const OptionContainer = styled.div`
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img{
    width: 75%;
  }

  &:hover img,
  &:focus img {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  &:hover,
  &:focus {
    outline: 2px solid deepskyblue;
  }
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;
