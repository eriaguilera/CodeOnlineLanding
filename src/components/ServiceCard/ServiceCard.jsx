import "./ServiceCard.css";
import { Link } from "react-router-dom";

function ServiceCard({
  icono,
  titulo,
  descripcion,
  ruta,
  textoBoton = "Conocer sistema →",
  enlaceExterno = "",
  proximamente = false,
}) {
  return (
    <div className="service-card">
      {proximamente && (
        <span className="service-badge">
          Próximamente
        </span>
      )}

      <div className="service-icon-container">
        <div className="service-icon">
          {icono}
        </div>
      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      {proximamente ? (
        <button
          type="button"
          className="btn-primary btn-disabled"
          disabled
        >
          Próximamente
        </button>
      ) : enlaceExterno ? (
        <a
          href={enlaceExterno}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          {textoBoton}
        </a>
      ) : (
        <Link to={ruta} className="btn-primary">
          {textoBoton}
        </Link>
      )}
    </div>
  );
}

export default ServiceCard;