import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div className="logo-icon">
          &lt;/&gt;
        </div>

        <h2 className="logo-text">
          <span className="code">Code</span>
          <span className="online">Online</span>
        </h2>
      </div>

      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>

        <li>
          <a href="#servicios">Sistemas</a>
        </li>

        <li>
          <a href="#nosotros">Nosotros</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;