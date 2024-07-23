// src/components/GameOver/GameOver.styles.js
import styled from "styled-components";
import question from "../../app/assets/gifs/question.gif";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -3;
  background: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg") no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;

export const BackgroundText = styled.h1`
  color: white;
  font-size: 3rem;
  position: absolute;
  top: 20px;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 80%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  
  @media (max-width: 600px) {
    width: 90%;
    max-width: none;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const PlayerName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
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
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 2;
    color: white;
    text-shadow: 1px 1px 8px black;
  }
`;

export const OptionButton = styled.button`
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
  padding: 8px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  width: 80px;

  &:before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
    z-index: -1;
    background-color: black !important;
    box-shadow: 0 -2px rgb(255 255 255 / 50%) inset,
                0 2px rgb(255 255 255 / 80%) inset,
                -2px 0 rgb(255 255 255 / 80%) inset,
                2px 0 rgb(255 255 255 / 50%) inset;
  }

  &:after {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  }

  &:hover:before {
    color: black;
    background-color: #ffb300 !important;
    box-shadow: 0 -2px rgb(0 0 0 / 50%) inset,
                0 2px rgb(255 255 255 / 20%) inset,
                -2px 0 rgb(255 255 255 / 20%) inset,
                2px 0 rgb(0 0 0 / 50%) inset;
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
    background-color: #ffb300 !important;
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`;
export const Book = styled.div`
  width: 130px;
  height: 150px;
  background-image: url(${question});
  background-position: center;
  background-size: cover;
  box-shadow: 1px 1px 12px #000;
  margin: 10px;
  cursor: pointer;
  &:hover ${Cover} {
    transition: transform 0.5s;
    transform: scale(1.1);
  }
`;



export const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export const Message = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;
