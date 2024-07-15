import verdugo from "../../app/assets/gifs/reaper.gif";
import mago from "../../app/assets/gifs/ice-cream.gif";
import hada from "../../app/assets/gifs/fairy.gif";

const gameMasters = [
  {
    id: 1,
    img: verdugo,
    name: "VERDUGO",
    description: "Esta es la dificultad más alocada, con pecados e historias más locas y castigos más severos!",
    "punishments": [
      "Comer una rodaja de limón sin hacer gestos.",
      "Enviar un mensaje vergonzoso a alguien en tu lista de contactos (previamente aprobado por los jugadores).",
      "Hacer 30 burpees.",
      "Beber un vaso de una mezcla de diferentes bebidas (sin alcohol, pero con sabores desagradables como leche con zumo de naranja).",
      "Ponerse hielo en la camiseta durante 1 minuto.",
      "Mantener postura en plancha durante 1 minutos.",
      "Cantar una canción con agua en la boca (sin tragar ni escupir).",
      "Hacer una llamada de broma (aprobada por los jugadores).",
      "Dejarse maquillar por otra persona sin ver el resultado hasta el final.",
      "Salir a la calle y gritar '¡Soy el rey/reina del mundo!'."
    ]
  },
  {
    "name": "MAGO",
    "id": 2,
    "description": "Esta es la dificultad estándar, podrás añadir tus pecados e historias y la gente te juzgará y castigará dependiendo de la magnitud de ellos!",
    "img": mago,
    "punishments": [
      "Hacer 20 sentadillas.",
      "Comer una cucharadita de mostaza.",
      "Bailar sin música durante 1 minuto.",
      "Beber un vaso de agua de un solo trago.",
      "Hablar con un acento extraño durante 5 minutos.",
      "Hacer 15 flexiones.",
      "Llevar la ropa al revés durante 10 minutos.",
      "Cantar una canción de amor enfrente de todos.",
      "Pintar un bigote en tu cara con un marcador lavable.",
      "Hablar como un robot por los próximos 3 minutos."
    ]
  }
]

export default gameMasters;