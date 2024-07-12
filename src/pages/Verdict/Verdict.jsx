import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Book, Cover, Container, ModalWrapper, ModalContent, CloseButton, OptionButton } from './Verdict.styles.js';
import turtle from "../../app/assets/gifs/tortuga.gif";
import pinkguy from "../../app/assets/gifs/pinkfinn.gif";
import camaleon from "../../app/assets/gifs/camaleon.gif";
import glassguy from "../../app/assets/gifs/glassguy.gif";
import bunny from "../../app/assets/gifs/bunny.gif";
import pig from "../../app/assets/gifs/pig.gif";
import styled from 'styled-components';

const OptionContainer = styled.div`
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

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

const Verdict = () => {
  const navigate = useNavigate(); // Usa useNavigate
  const [modalOpen, setModalOpen] = useState(false);
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bookCovers, setBookCovers] = useState(Array(8).fill(null));
  const [bookTitles, setBookTitles] = useState(Array(8).fill(""));
  const [bookDescriptions, setBookDescriptions] = useState(Array(8).fill(""));

  const booksContent = [
    { coverText: 'Pecado 1' },
    { coverText: 'Pecado 2' },
    { coverText: 'Pecado 3' },
    { coverText: 'Pecado 4' },
    { coverText: 'Pecado 5' },
    { coverText: 'Pecado 6' },
    { coverText: 'Pecado 7' },
    { coverText: 'Pecado 8' }
  ];

  const options = [
    { id: 1, image: turtle, text: 'Tortuga' },
    { id: 2, image: pig, text: 'Cerdo' },
    { id: 3, image: pinkguy, text: 'Pink Guy' },
    { id: 4, image: bunny, text: 'Conejo' },
    { id: 5, image: glassguy, text: 'Glass Guy' },
    { id: 6, image: camaleon, text: 'Camaleón' },
  ];

  const handleBookClick = (index) => {
    setSelectedBook(index);
    setModalOpen(true);
    setBookDescriptions(prev => {
      const newDescriptions = [...prev];
      newDescriptions[index] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      return newDescriptions;
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setOptionsModalOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const confirmSelection = () => {
    if (selectedBook !== null && selectedOption) {
      const updatedCovers = [...bookCovers];
      const updatedTitles = [...bookTitles];
      const isOptionUsed = updatedCovers.includes(selectedOption.image);

      if (!isOptionUsed || updatedCovers[selectedBook] === selectedOption.image) {
        updatedCovers[selectedBook] = selectedOption.image;
        updatedTitles[selectedBook] = selectedOption.text;
        setBookCovers(updatedCovers);
        setBookTitles(updatedTitles);
        closeModal();
      } else {
        alert("Este avatar ya está seleccionado para otro libro.");
        setOptionsModalOpen(true);
      }
    }
  };

  const goToNextPage = () => {
    navigate('/'); // Cambia '/ruta-siguiente' a tu ruta deseada
  };

  const renderBooks = () => {
    return booksContent.map((book, index) => (
      <Book key={index} onClick={() => handleBookClick(index)}>
        <Cover>
          {bookCovers[index] ? (
            <>
              <img src={bookCovers[index]} alt={bookTitles[index]} />
              <p>{bookTitles[index]}</p>
            </>
          ) : (
            <p>{book.coverText}</p>
          )}
        </Cover>
      </Book>
    ));
  };

  const renderOptions = () => {
    return options.map((option) => (
      <OptionContainer
        key={option.id}
        onClick={() => handleOptionSelect(option)}
        tabIndex={0}
      >
        <img
          src={option.image}
          alt={option.text}
          style={{ width: '50px', height: '50px' }}
        />
        <p>{option.text}</p>
      </OptionContainer>
    ));
  };

  return (
    <Container>
      {renderBooks()}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedBook !== null ? booksContent[selectedBook].coverText : ''}</h2>
            <p>{bookDescriptions[selectedBook]}</p>
            <OptionButton onClick={() => setOptionsModalOpen(true)}>Seleccionar Opción</OptionButton>
          </ModalContent>
        </ModalWrapper>
      )}
      {optionsModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>Selecciona una opción:</h2>
            {renderOptions()}
            <OptionButton onClick={confirmSelection}>Confirmar</OptionButton>
          </ModalContent>
        </ModalWrapper>
      )}
      <OptionButton onClick={goToNextPage}>Ir a la Siguiente Página</OptionButton>
    </Container>
  );
};

export default Verdict;
