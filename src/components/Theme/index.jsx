import { ThemeProvider } from "styled-components";
import { verdugoTheme } from "./themes/verdugoTheme";
import { magoTheme } from "./themes/magoTheme";
import { hadaTheme } from "./themes/hadaTheme";
import { useState, useContext } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const { roomId, setRoomId } = useContext(PlayerContext);

  //Habrá que hacer una petición a la base de datos getRoomById, para recuperar el gameMode de esa room luego en función de ese gameMode daremos valor a una variable llamada activeTheme que contendrá el tema correspondiente a la dificultad seleccionada.

  const [gameMode, setGameMode] = useState();

  return <ThemeProvider theme={verdugoTheme}>{children}</ThemeProvider>;
};

export default Theme;
