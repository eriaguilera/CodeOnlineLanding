import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">
          &lt;/&gt;
        </div>

        <h2 className="logo-text">
          <span className="code">Code</span>
          <span className="online">Online</span>
        </h2>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={menuAbierto ? "nav-links abierto" : "nav-links"}>
        <li>
          <a href="#" onClick={cerrarMenu}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#servicios" onClick={cerrarMenu}>
            Sistemas
          </a>
        </li>

        <li>
          <a href="#nosotros" onClick={cerrarMenu}>
            Nosotros
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;