import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";

import {
  FaShoppingCart,
  FaCalendarAlt,
  FaGlobe,
  FaUsers
} from "react-icons/fa";

function Services() {
  return (
   <section id="servicios" className="services">
        
     <h2 className="section-title">
    Nuestros Sistemas
    </h2>

    <div className="section-line"></div>

    <p className="section-description">
    Soluciones desarrolladas para ayudar a empresas, comercios y
    profesionales a crecer.
    </p>

      <div className="services-grid">

     <ServiceCard
  icono={<FaShoppingCart />}
  titulo="Sistema de Ventas"
  descripcion="Controlá productos, ventas, clientes y stock desde un solo lugar."
  ruta="/ventas"
  textoBoton="Ver demo →"
/>

<ServiceCard
  icono={<FaCalendarAlt />}
  titulo="Sistema de Turnos"
  descripcion="Organizá pacientes, profesionales, calendario y turnos fácilmente."
  ruta="/turnos"
  textoBoton="Ver demo →"
/>

<ServiceCard
  icono={<FaGlobe />}
  titulo="Desarrollo Web"
  descripcion="Creamos páginas modernas para mostrar tu negocio y conseguir clientes."
  ruta="/desarrollo-web"
  textoBoton="Más información →"
/>

<ServiceCard
  icono={<FaUsers />}
  titulo="CodeOnline CRM"
  descripcion="Gestión de clientes, presupuestos, proyectos y tareas."
  ruta="/crm"
  proximamente={true}
/>

      </div>
    </section>
  );
}

export default Services;