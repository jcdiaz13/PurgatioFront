import verdugo from "../../app/assets/gifs/reaper.gif";
import helado from "../../app/assets/gifs/ice-cream.gif";

const gameMasters = [
  {
    id: 1,
    img: verdugo,
    name: "VERDUGO",
    description:
      "Este es el modo de juego original, con sugerencias y temática más tradicionales!",
    punishments: [
      "Comer una rodaja de limón sin hacer gestos.",
      "Enviar un mensaje vergonzoso a alguien en tu lista de contactos (previamente aprobado por los jugadores).",
      "Hacer 30 burpees.",
      "Beber un vaso de una mezcla de diferentes bebidas (sin alcohol, pero con sabores desagradables como leche con zumo de naranja).",
      "Ponerse hielo en la camiseta durante 1 minuto.",
      "Mantener postura en plancha durante 1 minutos.",
      "Cantar una canción con agua en la boca (sin tragar ni escupir).",
      "Hacer una llamada de broma (aprobada por los jugadores).",
      "Dejarse maquillar por otra persona sin ver el resultado hasta el final.",
      "Salir a la calle y gritar '¡Soy el rey/reina del mundo!'.",
    ],
  },
  {
    name: "HELADITO",
    id: 2,
    description:
      "Este es el modo de juego del verano! Con sugerencias y temática para disfrutar del chapuzón!",
    img: helado,
    punishments: [
      "Ir hasta la orilla de la playa y mientras miras el mar gritar ¡SOY POSEIDÓN, el dios de los mares!",
      "Ir de rodillas de donde esta tu toalla hasta el mar y no pares hasta que el agua te llegue por las costillas",
      "Caminar de espaldas desde tu toalla hasta la orilla del mar sin mirar hacia adelante.",
      "Correr desde la orilla hasta el mar y volver arrastrándote sobre tu estómago en la arena.",
      "Te conviertes en un perro durante 2 minutos",
      "Acércate a otra persona y dile si te puede poner de su crema",
    ],
  },
];

export default gameMasters;
