import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../app/contexts/PlayerContext';
import {
  Book,
  Cover,
  Container,
  ModalWrapper,
  ModalContent,
  CloseButton,
  OptionButton,
  OptionContainer,
  Message,
} from './Verdict.styles.js';
import turtle from "../../app/assets/gifs/tortuga.gif";
import pinkguy from "../../app/assets/gifs/pinkfinn.gif";
import camaleon from "../../app/assets/gifs/camaleon.gif";
import glassguy from "../../app/assets/gifs/glassguy.gif";
import bunny from "../../app/assets/gifs/bunny.gif";
import pig from "../../app/assets/gifs/pig.gif";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Contenido de los libros, simulando pecados
const booksContent = Array.from({ length: 8 }, (_, i) => ({
  coverText: `Pecado ${i + 1}`,
}));

// Opciones de avatares con asociación a pecados
const options = [
  { id: 1, image: turtle, text: 'Tortuga', sin: 0 },
  { id: 2, image: pig, text: 'Cerdo', sin: 1 },
  { id: 3, image: pinkguy, text: 'Pink Guy', sin: 2 },
  { id: 4, image: bunny, text: 'Conejo', sin: 3 },
  { id: 5, image: glassguy, text: 'Glass Guy', sin: 4 },
  { id: 6, image: camaleon, text: 'Camaleón', sin: 5 },
];

const Verdict = () => {
  const navigate = useNavigate();
  const { sins, punishments } = useContext(PlayerContext);

  // Estados para manejar la lógica del componente
  const [modalOpen, setModalOpen] = useState(false);
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bookCovers, setBookCovers] = useState(Array(8).fill(null));
  const [bookTitles, setBookTitles] = useState(Array(8).fill(""));
  const [bookDescriptions] = useState([
    "Pecado de la avaricia",
    "Pecado de la lujuria",
    "Pecado de la ira",
    "Pecado de la pereza",
    "Pecado de la gula",
    "Pecado de la envidia",
    "Pecado de la soberbia",
    "Pecado de la codicia"
  ]);
  const [result, setResult] = useState(null);
  const [lostBooks, setLostBooks] = useState([]);

  // Efecto para determinar el resultado del juego
  useEffect(() => {
    if (sins && punishments) {
      const isMatched = punishments.some(punishment => punishment === sins.sin);
      setResult(isMatched ? 'lose' : 'win');

      // Si se pierde, guarda los libros perdedores
      if (isMatched) {
        const lostBooks = booksContent.filter((_, index) => bookCovers[index] !== null);
        setLostBooks(lostBooks);
      }
    }
  }, [sins, punishments, bookCovers]);

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

    // Verifica si la opción ya está en uso
    if (!isOptionUsed || isCurrentSelection) {
      // Verifica si el pecado asociado lleva a "Game Over"
      if (selectedOption.sin === sins.sin) {
        setLostBooks(prev => [...prev, booksContent[selectedBook]]);
        setResult('lose');
      } else {
        setBookCovers(prev => {
          const updatedCovers = [...prev];
          updatedCovers[selectedBook] = selectedOption.image;
          return updatedCovers;
        });
        setBookTitles(prev => {
          const updatedTitles = [...prev];
          updatedTitles[selectedBook] = selectedOption.text;
          return updatedTitles;
        });
      }
      closeModal();
    } else {
      alert("Esta opción ya está en uso en otro libro.");
      setOptionsModalOpen(true); // Abre el modal de opciones si ya está en uso
    }
  };

  const goToNextPage = () => {
    navigate('/');
  };

  const goToBeforePage = () => {
    navigate('/punishments');
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
        onClick={() => handleOptionSelect({ id, image, text, sin: options[id - 1].sin })}
        tabIndex={0}
        role="button"
        onKeyPress={(e) => e.key === 'Enter' && handleOptionSelect({ id, image, text, sin: options[id - 1].sin })}
      >
        <img src={image} alt={text} style={{ width: '50px', height: '50px' }} />
        <p>{text}</p>
      </OptionContainer>
    ))
  );

  return (
    <Container>
      <OptionButton onClick={goToBeforePage}><FaArrowLeft /></OptionButton>
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

      {/* Muestra el resultado del juego y libros perdidos */}
      {result === 'lose' && (
        <Message>Game Over! Libros perdidos: {lostBooks.map(book => book.coverText).join(', ')}</Message>
      )}
      {result === 'win' && (
        <Message>Veredicto: Ganaste</Message>
      )}

      <OptionButton onClick={goToNextPage}><FaArrowRight /></OptionButton>
    </Container>
  );
};

export default Verdict;
