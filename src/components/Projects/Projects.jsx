import "./Projects.css";

import {
  FaShoppingCart,
  FaCalendarAlt,
  FaUsers,
  FaGlobe,
  FaHome,
  FaGraduationCap
} from "react-icons/fa";

function Projects() {
  return (
    <section className="projects">

      <h2 className="section-title">
        Nuestro Ecosistema
      </h2>

      <div className="section-line"></div>

      <p className="section-description">
        En CodeOnline desarrollamos soluciones conectadas para distintos tipos de negocios.
      </p>

      <div className="projects-grid">

        <div className="project-card">
          <FaShoppingCart className="project-icon" />
          <h3>Sistema de Ventas</h3>
          <span className="status available">Disponible</span>
        </div>

        <div className="project-card">
          <FaCalendarAlt className="project-icon" />
          <h3>Sistema de Turnos</h3>
          <span className="status available">Disponible</span>
        </div>

        <div className="project-card">
          <FaUsers className="project-icon" />
          <h3>CRM CodeOnline</h3>
          <span className="status development">En desarrollo</span>
        </div>

        <div className="project-card">
          <FaGlobe className="project-icon" />
          <h3>Desarrollo Web</h3>
          <span className="status available">Disponible</span>
        </div>

        <div className="project-card">
          <FaHome className="project-icon" />
          <h3>Sistema para Cabañas</h3>
          <span className="status future">Próximamente</span>
        </div>

        <div className="project-card">
          <FaGraduationCap className="project-icon" />
          <h3>Sistema Educativo</h3>
          <span className="status future">Próximamente</span>
        </div>

      </div>

    </section>
  );
}

export default Projects;