import React, { useContext, useEffect, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Button } from "./MusicButton.styles";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import arcade from "../../app/assets/sounds/arcademelody.mp3"; // Asegúrate de que la ruta es correcta

const MusicButton = () => {
  const { musicStarted, setMusicStarted } = useContext(PlayerContext);
  const audioRef = useRef(null); // Mantén la referencia del objeto Audio (Null para evitar problemas de undefined)

  useEffect(() => {
    // Si el objeto de Audio no existe, lo crea.
    if (!audioRef.current) {
      audioRef.current = new Audio(arcade); //Esta es la melodía que hemos importado.
      audioRef.current.loop = true; // Repite la melodía en caso de que termine.
    }

    const audio = audioRef.current;

    if (musicStarted) {
      audio
        .play()
        .catch((err) => console.error("Error de reproducción: ", err));
    } else {
      audio.pause();
    }

    // Cleanup function
    return () => {
      audio.pause();
    };
  }, [musicStarted]);

  const toggleMusic = () => {
    setMusicStarted((prevState) => !prevState);
    {
      /* Pausamos o reanudamos la música aquí */
    }
  };

  return (
    <Button onClick={toggleMusic}>
      {" "}
      {musicStarted ? <FaVolumeUp /> : <FaVolumeMute />}{" "}
      {/* Iconos de Unmute/Mute */}
    </Button>
  );
};

export default MusicButton;
