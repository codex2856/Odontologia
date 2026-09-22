// Número de WhatsApp de "Actualízate. Cariología".
export const WHATSAPP_NUMBER = "34603662913";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, buenas. Me gustaría recibir información sobre los cursos de Actualízate. Cariología. ¿Podrían ayudarme, por favor?";

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Usuario de Instagram donde se comparte el contenido de divulgación
// científica (publicaciones, Reels y transmisiones en vivo).
export const INSTAGRAM_USERNAME = "maglymontero.cario_research";

export function getInstagramLink() {
  return INSTAGRAM_USERNAME
    ? `https://instagram.com/${INSTAGRAM_USERNAME}`
    : "#";
}
