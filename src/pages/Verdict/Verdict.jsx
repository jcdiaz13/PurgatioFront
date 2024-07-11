import React, { useState } from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: transform 400ms, filter 400ms; /* Añadido transition */
  background-color: ${({ color }) => {
    switch (color) {
      case 'red':
        return '#007e9e';
      case 'blue':
        return '#0062ff';
      case 'green':
        return '#18cd5e';
      default:
        return '';
    }
  }};



  &:not(:hover) {
    filter: blur(10px);
  }
  &:not(:hover) {
    filter: blur(10px);
  }
&:active(:hover){
  background-color: ;
}
&:hover {
  background-color: red !important;
    transform: scale(2.2);
      gap: 10px;
}
`;

const Tip = styled.p`
  font-size: 1em;
  font-weight: 700;
`;

const SecondText = styled.p`
  font-size: 0.7em;
`;

const Verdict = () => {
  return (
    <CardsContainer>
      <Card color="red">
        <Tip>user1</Tip>
        <SecondText>me cago encima</SecondText>
      </Card>
      <Card color="blue">
        <Tip>Hover Me</Tip>
        <SecondText>Lorem Ipsum</SecondText>
      </Card>
      <Card color="green">
        <Tip>Hover Me</Tip>
        <SecondText>Lorem Ipsum</SecondText>
      </Card>
    </CardsContainer>
  );
};

export default Verdict;
