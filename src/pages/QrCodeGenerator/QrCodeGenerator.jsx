import { useState } from 'react';
import { Container, Title, Input, QRWrapper } from './QrCodeGenerator.styles';
import QrCode from './QrCode';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('https://pablomonteserin.com/');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Container>
      <Title>Introduzca codigo</Title>
      <Input
        type="text"
        // value={url} // Aquí va la id de la partida
        onChange={handleChange}
        placeholder="Introduce un enlace"
      />
      <QRWrapper>
        <QrCode value={url} />
      </QRWrapper>
    </Container>
  );
};

export default QRCodeGenerator;
