import "./CallToAction.css";
import { FaRocket, FaCheck } from "react-icons/fa";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-card">
        <div className="cta-icon">
          <FaRocket />
        </div>

        <span className="cta-label">DESARROLLO A MEDIDA</span>

        <h2>¿Tenés una idea? Nosotros la hacemos realidad.</h2>

        <p>
          Si no encontrás el sistema que necesitás, desarrollamos una solución
          a medida para tu empresa, comercio o emprendimiento.
        </p>

        <button className="btn-primary">
          Hablemos de tu proyecto →
        </button>

        <div className="cta-benefits">
          <span><FaCheck /> Primera consulta sin costo</span>
          <span><FaCheck /> Asesoramiento personalizado</span>
          <span><FaCheck /> Soluciones a medida</span>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;