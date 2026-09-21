// Número de WhatsApp de "Actualízate. Cariología".
// TODO: sustituir por el número real en formato internacional sin espacios
// ni símbolos, por ejemplo: "584121234567".
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, buenas. Me gustaría recibir información sobre los cursos de Actualízate. Cariología. ¿Podrían ayudarme, por favor?";

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Usuario de Instagram donde se comparte el contenido de divulgación
// científica (publicaciones, Reels y transmisiones en vivo).
// TODO: sustituir por el usuario real, por ejemplo: "actualizate.cariologia".
export const INSTAGRAM_USERNAME = "";

export function getInstagramLink() {
  return INSTAGRAM_USERNAME
    ? `https://instagram.com/${INSTAGRAM_USERNAME}`
    : "#";
}
