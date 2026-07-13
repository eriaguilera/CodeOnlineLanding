import "./WebDemo.css";
import { FaBuilding, FaShoppingCart, FaHotel, FaUtensils, FaUserMd } from "react-icons/fa";

function WebDemo() {

  const whatsapp =
    "https://wa.me/5493865267789?text=" +
    encodeURIComponent(
      `Hola Erika 👋.

Estuve viendo la sección de Desarrollo Web de CodeOnline.

Me gustaría crear una página web para mi negocio.

¿Podemos conversar?`
    );

  return (
    <div className="web-demo">

      <header className="web-header">
        <h1>🌐 Desarrollo Web</h1>

        <p>
          Creamos páginas web modernas, rápidas y adaptadas a cada tipo de
          negocio.
        </p>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="web-btn"
        >
          🚀 Quiero mi página web
        </a>

      </header>
      <div className="web-showcase">
      <img
      src="/desarrollo-web.png"
      alt="Ejemplos de páginas web desarrolladas por CodeOnline"
       />
        </div>

      <section className="web-grid">

        <div className="web-card">
          <FaBuilding className="web-icon"/>
          <h3>Empresas</h3>
          <p>Páginas corporativas profesionales.</p>
        </div>

        <div className="web-card">
          <FaShoppingCart className="web-icon"/>
          <h3>Tiendas Online</h3>
          <p>Vendé tus productos las 24 horas.</p>
        </div>

        <div className="web-card">
          <FaHotel className="web-icon"/>
          <h3>Turismo</h3>
          <p>Cabañas, hoteles y complejos turísticos.</p>
        </div>

        <div className="web-card">
          <FaUtensils className="web-icon"/>
          <h3>Gastronomía</h3>
          <p>Restaurantes, bares y cafeterías.</p>
        </div>

        <div className="web-card">
          <FaUserMd className="web-icon"/>
          <h3>Profesionales</h3>
          <p>Médicos, abogados, psicólogos y más.</p>
        </div>

      </section>

    </div>
  );
}

export default WebDemo;