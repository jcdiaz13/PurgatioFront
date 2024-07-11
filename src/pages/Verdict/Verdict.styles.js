import styled from 'styled-components';

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
  font-family: Pixellari;
`;


export const AvatarContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: white 2px solid;
  box-shadow: 4px 4px 60px #FFD500;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
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
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border: black 3px solid;
  box-shadow: 2px 2px 20px black;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 2px 10px #FFD500;
  }

  &:active {
    box-shadow: 2px 2px 10px #FFD500;
    transform: translateY(4px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;

  &.red {
    background-color: #f43f5e;
  }

  &.blue {
    background-color: #3b82f6;
  }

  &.green {
    background-color: #22c55e;
  }

  p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  p.second-text {
    font-size: 0.7em;
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const Cards = styled.div`
  &:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;
