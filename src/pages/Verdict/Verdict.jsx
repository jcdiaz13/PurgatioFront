import { useState } from 'react';
// import styled from 'styled-components';
import { Book, Cover, Container, ModalWrapper, ModalContent, CloseButton } from './Verdict.styles.js';

const Verdict = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const booksContent = [
    { text: 'Vota', coverText: 'Pecado 1' },
    { text: 'Vota', coverText: 'Pecado 2' },
    { text: 'Vota', coverText: 'Pecado 3' },
    { text: 'Vota', coverText: 'Pecado 4' },
    { text: 'Vota', coverText: 'Pecado 5' },
    { text: 'Vota', coverText: 'Pecado 6' },
    { text: 'Vota', coverText: 'Pecado 7' },
    { text: 'Vota', coverText: 'Pecado 8' }
  ];

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderBooks = () => {
    return booksContent.map((book, index) => (
      <Book key={index}>
        <p onClick={() => handleBookClick(book)}>{book.text}</p>
        <Cover>
          <p>{book.coverText}</p>
        </Cover>
      </Book>
    ));
  };

  return (
    <Container>
      {renderBooks()}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedBook.coverText}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores voluptatem hic, dignissimos voluptatibus, consectetur dolor fugit ullam possimus voluptate laboriosam. Eveniet quaerat corporis adipisci repudiandae odio, ullam quod eum.</p>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  );
};

export default Verdict;
