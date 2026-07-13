import "./Process.css";

import {
  FaLightbulb,
  FaClipboardList,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa";

function Process() {
  return (
    <section className="process">

      <h2 className="section-title">
        De la idea al sistema funcionando
      </h2>

      <div className="section-line"></div>

      <p className="section-description">
        Te acompañamos durante todo el proceso, desde la primera conversación hasta la implementación y el soporte.
      </p>

      <div className="process-grid">

        <div className="step">
          <div className="step-icon">
            <FaLightbulb />
          </div>

          <h3>Nos contás tu idea</h3>

          <p>
            Escuchamos tus necesidades y entendemos cómo funciona tu negocio.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaClipboardList />
          </div>

          <h3>Diseñamos la solución</h3>

          <p>
            Planificamos el sistema ideal para resolver tu problema.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaLaptopCode />
          </div>

          <h3>Desarrollamos</h3>

          <p>
            Construimos tu proyecto utilizando tecnologías modernas.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <FaRocket />
          </div>

          <h3>Implementamos</h3>

          <p>
            Instalamos el sistema y seguimos acompañándote con soporte.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Process;