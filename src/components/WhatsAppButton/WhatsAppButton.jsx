import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const mensaje = encodeURIComponent(
    "Hola Erika 👋. Estuve viendo la web de CodeOnline y me gustaría recibir información sobre sus sistemas y servicios."
  );

  return (
    <a
      href={`https://wa.me/5493865267789?text=${mensaje}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
      <span>Consultanos</span>
    </a>
  );
}

export default WhatsAppButton;