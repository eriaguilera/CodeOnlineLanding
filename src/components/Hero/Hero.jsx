import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          🚀 Software Profesional para Empresas
        </span>

        <h1>
          Digitalizamos empresas con software moderno, rápido y fácil de usar.
        </h1>

        <p>
          En CodeOnline desarrollamos sistemas de gestión, páginas web y
          soluciones digitales que optimizan procesos, aumentan la
          productividad y acompañan el crecimiento de tu negocio.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            Solicitar Presupuesto
          </a>

          <a href="#servicios" className="btn-secondary">
            Ver Sistemas
          </a>
        </div>

      </div>

      <div className="hero-image">

        <div className="dashboard-card">

          <h3>CodeOnline</h3>

          <div className="dashboard-item">
            <span>🛒</span>
            <p>Sistema de Ventas</p>
            <strong>Disponible</strong>
          </div>

          <div className="dashboard-item">
            <span>📅</span>
            <p>Sistema de Turnos</p>
            <strong>Disponible</strong>
          </div>

          <div className="dashboard-item">
            <span>🌐</span>
            <p>Desarrollo Web</p>
            <strong>Disponible</strong>
          </div>

          <div className="dashboard-item">
            <span>🚀</span>
            <p>CRM Empresarial</p>
            <strong>Próximamente</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;