import React, { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getRoomById } from "../../app/services/room";
import gameMasters from "../../app/utils/gameMasters";
import { verdugoTheme } from "./themes/verdugoTheme";
import { magoTheme } from "./themes/magoTheme";
import { hadaTheme } from "./themes/hadaTheme";

const Theme = ({ children }) => {
  const { roomId } = useContext(PlayerContext);
  const [gameMode, setGameMode] = useState(null);
  const [activeTheme, setActiveTheme] = useState(verdugoTheme); // Tema predeterminado

useEffect(() => {
  if (roomId) {
    showGameMode(roomId);
  }
}, [roomId]);

const showGameMode = async (roomId) => {
  try {
    const roomData = await getRoomById(roomId);
    console.log("Room data:", roomData);

    const gamemode = roomData.gamemode;
    setGameMode(gamemode);

    const selectedTheme = gameMasters.find(master => master.id === gamemode);
    if (selectedTheme) {
      setActiveTheme(
        selectedTheme.id === 1 ? verdugoTheme :
        selectedTheme.id === 2 ? magoTheme :
        selectedTheme.id === 3 ? hadaTheme :
        verdugoTheme
      );
    } else {
      console.warn(`No se encontró un tema para el gameMode ${gamemode}`);
    }
    console.log("Modo de juego:", gamemode);
  } catch (error) {
    console.error("Error al obtener el modo de juego:", error.message);
  }
};


  // Renderiza el children dentro del ThemeProvider con el tema activo seleccionado
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

export default Theme;
