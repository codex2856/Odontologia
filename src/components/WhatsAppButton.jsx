import { getWhatsAppLink } from "../config/contact";

export default function WhatsAppButton({
  message,
  className = "",
  children = "Consultar por WhatsApp",
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      className={`btn btn-whatsapp ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (se abre en una nueva pestaña)`}
    >
      {children}
    </a>
  );
}
