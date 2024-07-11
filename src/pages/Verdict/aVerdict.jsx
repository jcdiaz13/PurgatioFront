/* eslint-disable react/jsx-key */
import { useState } from "react";
// import dwarf from "../../app/gifs/gatito.gif";
// import undead from "../../app/gifs/undead.gif";
// import wizard from "../../app/gifs/Wizard.gif";
// import fairy from "../../app/gifs/fairy.gif";
// import elf from "../../app/gifs/elf.gif";
// import executione2 from "../../app/gifs/Executioner.gif";
// import witch from "../../app/gifs/witch.gif";
// import minotaur from "../../app/gifs/Minotaur.gif";

import { Container, AvatarContainer, AvatarPopup, AvatarOption, CardsContainer, Card, Cards } from './Verdict.styles';

// Lista de avatares disponibles
// const avatars = [
//   <img src={dwarf} />,
//   <img src={undead} />,
//   <img src={wizard} />,
//   <img src={fairy} />,
//   <img src={elf} />,
//   <img src={executione2} />,
//   <img src={witch} />,
//   <img src={minotaur} />,
// ];

const Verdict = () => {
  const avatars = ['Avatar 1', 'Avatar 2', 'Avatar 3'];
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };


  return (
    <Container>
      <AvatarContainer>
        <CardsContainer className="cards">
          <Cards>
            <Card className="card red">
              <p className="tip">{selectedAvatar ? selectedAvatar : 'Hover Me'}</p>
              <p className="second-text">Lorem Ipsum</p>
            </Card>
            <AvatarPopup>
              {avatars.map((avatar) => (
                <AvatarOption key={avatar} onClick={() => handleAvatarSelect(avatar)}>
                  {avatar}
                </AvatarOption>
              ))}
            </AvatarPopup>
            <CardsContainer className="cards">
              <Cards>
                <Card className="card red">
                  <p className="tip">{selectedAvatar ? selectedAvatar : 'Hover Me'}</p>
                  <p className="second-text">Lorem Ipsum</p>
                </Card>
                <Card className="card blue">
                  <p className="tip">{selectedAvatar ? selectedAvatar : 'Hover Me'}</p>
                  <p className="second-text">Lorem Ipsum</p>
                </Card>
                <Card className="card green">
                  <p className="tip">{selectedAvatar ? selectedAvatar : 'Hover Me'}</p>
                  <p className="second-text">Lorem Ipsum</p>
                </Card>
              </Cards>
            </CardsContainer>
          </AvatarContainer>
        </Container>

        );
}

        export default Verdict;
