import { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getRoomById } from "../../app/services/room";
import gameMasters from "../../app/utils/gameMasters";
import { verdugoTheme } from "./themes/verdugoTheme";
import { magoTheme } from "./themes/magoTheme";
import { hadaTheme } from "./themes/hadaTheme";

const defaultTheme = {
  // Propiedades del tema inicial, como el fondo que deseas mantener
  // Puedes ajustar las propiedades según sea necesario para coincidir con tu diseño inicial
  background: `url('https://media.giphy.com/media/3Q8cFOxTpUs6Tn5b5l/giphy.gif')`,
  // Otras propiedades de estilo inicial
};

const Theme = ({ children }) => {
  const { roomId } = useContext(PlayerContext);
  const [activeTheme, setActiveTheme] = useState(defaultTheme); // Iniciar con el tema predeterminado

  useEffect(() => {
    if (roomId) {
      showGameMode(roomId);
    }
  }, [roomId]);

  const showGameMode = async (roomId) => {
    try {
      const roomData = await getRoomById(roomId);

      const gamemode = roomData.gamemode;

      const selectedTheme = gameMasters.find(
        (master) => master.id === gamemode
      );
      if (selectedTheme) {
        setActiveTheme(() => ({
          ...defaultTheme, // Mantener las propiedades del tema inicial
          // Sobrescribir solo las propiedades necesarias del tema activo
          // Aquí puedes cambiar las propiedades específicas según el `gamemode`
          // Por ejemplo, si el `gamemode` es 1, usar verdugoTheme, etc.
          // Pero mantener el fondo del `defaultTheme`
          ...(selectedTheme.id === 1
            ? verdugoTheme
            : selectedTheme.id === 2
            ? magoTheme
            : selectedTheme.id === 3
            ? hadaTheme
            : verdugoTheme),
        }));
      } else {
        console.warn(`No se encontró un tema para el gameMode ${gamemode}`);
      }
    } catch (error) {
      console.error("Error al obtener el modo de juego:", error.message);
    }
  };

  // Renderiza el children dentro del ThemeProvider con el tema activo seleccionado
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

export default Theme;
