import { useEffect, useRef, useState } from "react";
import {
  Column, Container, Content, Element, Header, Table, Overlay, Popup, Button, ModalBackground, ModalContent, CloseButton, UserButton,
} from "./Verdict.styles";

import GlobalStyles from "../../app/style/createGlobal.styles";
import { FaGavel } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const pecados = [
  {
    title: "Alguien fue sorprendido robando joyas en la oscuridad de la noche.",
    context: "Alguien fue sorprendido robando joyas en la oscuridad de la noche.",
  },
];

const castigos = [
  {
    title: "realizar 100 horas de trabajo comunitario.",
    context: "realizar 100 horas de trabajo comunitario.",
  }
];

const users = [
  { name: 'User1', image: 'place' },
  { name: 'User2', image: '' },
  { name: 'User3', image: '' },
  { name: 'User4', image: '' },
  { name: 'User5', image: '' },
];

const Verdict = () => {
  const [popupText, setPopupText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPecado, setSelectedPecado] = useState("");
  const [selectedCastigo, setSelectedCastigo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkPecadoCastigo = () => {
    if (selectedPecado && selectedCastigo) {
      setPopupText(`Pecado: ${selectedPecado}\nCastigo: ${selectedCastigo}`);
      setIsPopupOpen(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectUsername = (name) => {
    setUsername(name);
    closeModal();
  };

  const renderColumnContent = (type) => (
    (type === 'pecado' ? pecados : castigos).map((info, k) => (
      <Element
        key={k}
        onClick={() => {
          if (type === 'pecado') {
            setSelectedPecado(info.title);
          } else {
            setSelectedCastigo(info.title);
          }
          setPopupText(info.context);
          setIsPopupOpen(true);
        }}
        selected={(type === 'pecado' ? selectedPecado : selectedCastigo) === info.title}
      >
        {info.title}
      </Element>
    ))
  );

  return (

    <Container>
      <GlobalStyles />
      {isPopupOpen && <Overlay />}
      <Table isPopupOpen={isPopupOpen}>
        <Column>
          <Header>Pecado</Header>
          <Content>
            {renderColumnContent('pecado')}
          </Content>
        </Column>
        <Column>
          <Header>Castigo</Header>
          <Content>
            {renderColumnContent('castigo')}
          </Content>
        </Column>
      </Table>
      <Button onClick={linkPecadoCastigo}> <FaGavel /></Button>
      <UserButton onClick={openModal}>User</UserButton>
      {username && <p>Nombre de Usuario: {username}</p>}
      {isPopupOpen && <Popup ref={popupRef}>{popupText}</Popup>}

      <ModalBackground show={isModalOpen}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {/* <CloseButton onClick={closeModal}>&times;</CloseButton> */}
          <Carousel>
            {users.map((user, index) => (
              <div key={index} onClick={() => selectUsername(user.name)}>
                <img src={user.image} alt={user.name} />
                <p className="legend">{user.name}</p>
              </div>
            ))}
          </Carousel>
        </ModalContent>
      </ModalBackground>
    </Container>
  );
};

export default Verdict;
