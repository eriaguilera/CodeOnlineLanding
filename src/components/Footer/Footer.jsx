import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h2>CodeOnline</h2>
          <p>
            Transformamos ideas en soluciones digitales para empresas,
            comercios y profesionales.
          </p>
        </div>

        <div className="footer-links">
          <h4>Secciones</h4>
          <a href="#inicio">Inicio</a>
          <a href="#sistemas">Sistemas</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Argentina</p>
          <p>codeonline.com.ar</p>
          <p>Próximamente</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CodeOnline. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;