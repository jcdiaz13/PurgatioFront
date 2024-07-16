import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Cover, Container, ModalWrapper, ModalContent, CloseButton, OptionButton, OptionContainer } from './Verdict.styles.js';
import turtle from "../../app/assets/gifs/tortuga.gif";
import pinkguy from "../../app/assets/gifs/pinkfinn.gif";
import camaleon from "../../app/assets/gifs/camaleon.gif";
import glassguy from "../../app/assets/gifs/glassguy.gif";
import bunny from "../../app/assets/gifs/bunny.gif";
import pig from "../../app/assets/gifs/pig.gif";

const booksContent = Array.from({ length: 8 }, (_, i) => ({ coverText: `Pecado ${i + 1}` }));

const options = [
  { id: 1, image: turtle, text: 'Tortuga' },
  { id: 2, image: pig, text: 'Cerdo' },
  { id: 3, image: pinkguy, text: 'Pink Guy' },
  { id: 4, image: bunny, text: 'Conejo' },
  { id: 5, image: glassguy, text: 'Glass Guy' },
  { id: 6, image: camaleon, text: 'Camaleón' },
];

const Verdict = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bookCovers, setBookCovers] = useState(Array(8).fill(null));
  const [bookTitles, setBookTitles] = useState(Array(8).fill(""));
  const [bookDescriptions] = useState(Array(8).fill("Lorem ipsum dolor sit amet."));

  const handleBookClick = (index) => {
    setSelectedBook(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOptionsModalOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const confirmSelection = () => {
    if (selectedBook === null || !selectedOption) return;

    const isOptionUsed = bookCovers.includes(selectedOption.image);
    const isCurrentSelection = bookCovers[selectedBook] === selectedOption.image;

    if (!isOptionUsed || isCurrentSelection) {
      setBookCovers((prev) => {
        const updatedCovers = [...prev];
        updatedCovers[selectedBook] = selectedOption.image;
        return updatedCovers;
      });
      setBookTitles((prev) => {
        const updatedTitles = [...prev];
        updatedTitles[selectedBook] = selectedOption.text;
        return updatedTitles;
      });
      closeModal();
    } else {
      alert("Este avatar ya está seleccionado para otro libro.");
      setOptionsModalOpen(true);
    }
  };

  const goToNextPage = () => {
    navigate('/');
  };

  const renderBooks = () => (
    booksContent.map((book, index) => (
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
    ))
  );

  const renderOptions = () => (
    options.map(({ id, image, text }) => (
      <OptionContainer
        key={id}
        onClick={() => handleOptionSelect({ id, image, text })}
        tabIndex={0}
        role="button"
        onKeyPress={(e) => e.key === 'Enter' && handleOptionSelect({ id, image, text })}
      >
        <img src={image} alt={text} style={{ width: '50px', height: '50px' }} />
        <p>{text}</p>
      </OptionContainer>
    ))
  );

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
