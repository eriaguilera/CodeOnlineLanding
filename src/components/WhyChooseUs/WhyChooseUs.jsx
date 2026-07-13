import "./WhyChooseUs.css";
import ServiceCard from "../ServiceCard/ServiceCard";

import {
  FaRocket,
  FaHandshake,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {

  const whatsapp =
    "https://wa.me/5493865267789?text=" +
    encodeURIComponent(
      "Hola Erika 👋. Estuve viendo la web de CodeOnline y me gustaría conversar sobre un proyecto para mi negocio."
    );

  return (
    <section id="nosotros" className="why-section">

      <h2 className="section-title">
        ¿Por qué elegir CodeOnline?
      </h2>

      <div className="section-line"></div>

      <p className="section-description">
        Más que desarrollar software, construimos soluciones que ayudan
        a crecer a nuestros clientes.
      </p>

      <div className="services-grid">

        <ServiceCard
          icono={<FaRocket />}
          titulo="Desarrollo a medida"
          descripcion="Creamos soluciones adaptadas a las necesidades reales de tu empresa."
          textoBoton="🚀 Empecemos"
          enlaceExterno={whatsapp}
        />

        <ServiceCard
          icono={<FaHandshake />}
          titulo="Acompañamiento"
          descripcion="Te asesoramos antes, durante y después de la implementación."
          textoBoton="🚀 Empecemos"
          enlaceExterno={whatsapp}
        />

        <ServiceCard
          icono={<FaBolt />}
          titulo="Tecnología moderna"
          descripcion="Trabajamos con herramientas actuales para desarrollar sistemas rápidos y escalables."
          textoBoton="🚀 Empecemos"
          enlaceExterno={whatsapp}
        />

        <ServiceCard
          icono={<FaHeadset />}
          titulo="Soporte cercano"
          descripcion="Seguimos acompañándote incluso después de entregar el proyecto."
          textoBoton="🚀 Empecemos"
          enlaceExterno={whatsapp}
        />

      </div>

    </section>
  );
}

export default WhyChooseUs;