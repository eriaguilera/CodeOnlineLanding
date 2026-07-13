import { useState } from "react";
import "./SalesDemo.css";

import {
  FaChartPie,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import Dashboard from "./sales-components/Dashboard";
import Clientes from "./sales-components/Clientes";
import Productos from "./sales-components/Productos";
import Ventas from "./sales-components/Ventas";
import Reportes from "./sales-components/Reportes";
import Configuracion from "./sales-components/Configuracion";   

function SalesDemo() {
  const [seccionActiva, setSeccionActiva] = useState("dashboard");

  const titulos = {
    dashboard: {
      titulo: "Dashboard",
      descripcion: "Resumen general del negocio.",
    },
    clientes: {
      titulo: "Clientes",
      descripcion: "Administrá y consultá tus clientes.",
    },
    productos: {
      titulo: "Productos",
      descripcion: "Gestioná el catálogo y controlá el stock.",
    },
    ventas: {
      titulo: "Ventas",
      descripcion: "Consultá las operaciones realizadas.",
    },
    reportes: {
      titulo: "Reportes",
      descripcion: "Analizá el rendimiento del negocio.",
    },
    configuracion: {
      titulo: "Configuración",
      descripcion: "Personalizá las opciones generales del sistema.",
    },
  };

  const encabezadoActual = titulos[seccionActiva];

  return (
    <div className="sales-demo">
      <aside className="sales-sidebar">
        <div className="sales-brand">
          <div className="sales-logo">&lt;/&gt;</div>

          <div>
            <h2>CodeOnline</h2>
            <span>Sistema de Ventas</span>
          </div>
        </div>

        <nav className="sales-menu">
          <button
            type="button"
            className={seccionActiva === "dashboard" ? "active" : ""}
            onClick={() => setSeccionActiva("dashboard")}
          >
            <FaChartPie />
            Dashboard
          </button>

          <button
            type="button"
            className={seccionActiva === "clientes" ? "active" : ""}
            onClick={() => setSeccionActiva("clientes")}
          >
            <FaUsers />
            Clientes
          </button>

          <button
            type="button"
            className={seccionActiva === "productos" ? "active" : ""}
            onClick={() => setSeccionActiva("productos")}
          >
            <FaBoxOpen />
            Productos
          </button>

          <button
            type="button"
            className={seccionActiva === "ventas" ? "active" : ""}
            onClick={() => setSeccionActiva("ventas")}
          >
            <FaShoppingCart />
            Ventas
          </button>

          <button
            type="button"
            className={seccionActiva === "reportes" ? "active" : ""}
            onClick={() => setSeccionActiva("reportes")}
          >
            <FaChartBar />
            Reportes
          </button>

          <button
            type="button"
            className={seccionActiva === "configuracion" ? "active" : ""}
            onClick={() => setSeccionActiva("configuracion")}
          >
            <FaCog />
            Configuración
          </button>
        </nav>

        <div className="sales-sidebar-footer">
          <span>Versión demo</span>
          <small>v1.0.0 · CodeOnline</small>
        </div>
      </aside>

      <main className="sales-main">
        <div className="demo-alert">
          🎮 Modo demostración · Explorá el sistema con datos de ejemplo.
        </div>

        <header className="sales-topbar">
          <div>
            <h1>{encabezadoActual.titulo}</h1>
            <p>{encabezadoActual.descripcion}</p>
          </div>

          <div className="sales-user">
  <a
        href={`https://wa.me/5493865267789?text=${encodeURIComponent( 
        `Hola Erika 👋.

        Acabo de recorrer la demo del Sistema de Ventas de CodeOnline y me gustó mucho.

        Me gustaría implementarlo en mi negocio.

        ¿Podemos coordinar una reunión para conversar sobre el sistema, los tiempos de implementación y el presupuesto?

        ¡Muchas gracias!`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="demo-whatsapp"
          >
            🚀 Quiero este sistema
          </a>

          <span>🔔</span>
          <strong>Erika Demo</strong>
        </div>
        </header>

        {seccionActiva === "dashboard" && <Dashboard />}

        {seccionActiva === "clientes" && <Clientes />}

        {seccionActiva === "productos" && <Productos />}  

        {seccionActiva === "ventas" && <Ventas />}

        {seccionActiva === "reportes" && <Reportes />}

        {seccionActiva === "configuracion" && <Configuracion />}

      </main>
    </div>
  );
}

export default SalesDemo;