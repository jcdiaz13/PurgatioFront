import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Textarea,
  ButtonContainer,
  Button,
} from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import Theme from '../../components/Theme';
import { getSinsRandom } from "../../app/services/player"; // Importa la función getSinsRandom desde tu API

const Punishments = () => {
  const [randomSin, setRandomSin] = useState(""); // Estado para almacenar el pecado aleatorio
  const [isTextareaModified, setIsTextareaModified] = useState(false); // Estado para controlar si el textarea ha sido modificado
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener el pecado aleatorio desde la API
    const fetchRandomSin = async () => {
      try {
        const response = await getSinsRandom(); // Llama a la función getSinsRandom para obtener el pecado
        setRandomSin(response.data); // Establece el pecado obtenido en el estado local
      } catch (error) {
        console.error('Error al obtener el pecado:', error);
        // Maneja el error según tu lógica de aplicación
      }
    };

    fetchRandomSin(); // Llama a la función para obtener el pecado aleatorio al montar el componente
  }, []);

  const handlePunishmentChange = (e) => {
    setIsTextareaModified(true); // Marca como modificado al cambiar el texto
  };

  const handleGoToSins = () => {
    navigate("/sins");
  };

  const handleNext = () => {
    if (!isTextareaModified) {
      alert("Por favor, modifique el texto antes de continuar.");
      return;
    }
    navigate("/");
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <h1>Castigos</h1>
          <p>{randomSin}</p> {/* Mostrar el pecado obtenido desde la API */}
          <Textarea onChange={handlePunishmentChange} />
          <ButtonContainer>
            <Button onClick={handleGoToSins}>
              {" "}
              <FaArrowLeft />
            </Button>
            <Link to="/verdict">
              <Button>Enviar</Button>
            </Link>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;
