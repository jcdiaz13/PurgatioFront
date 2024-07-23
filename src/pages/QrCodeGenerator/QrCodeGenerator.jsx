import { useState } from 'react';
import { Container, Title, Input, QRWrapper } from './QrCodeGenerator.styles';
import QrCode from './QrCode';
// import { getPlayersByRoomId } from '../../app/services/player';
// import { roomId } from '../../app/contexts/PlayerContext';

const QRCodeGenerator = () => {
  // Aquí va la id de la partida actual
  const roomId = '123456'; // Aquí va la id de la partida actual
  const [url] = useState(roomId);

  // const handleChange = (event) => {
  //   setUrl(event.target.value);
  // };

  return (
    <Container>
      <Title>El codigo de sala:</Title>
      {/* <Input
        type="text"
        // value={url} // Aquí va la id de la partida
        onChange={handleChange}
        placeholder={roomId}
      /> */}
      <QRWrapper>
        <QrCode value={url} />
      </QRWrapper>
    </Container>
  );
};

export default QRCodeGenerator;
