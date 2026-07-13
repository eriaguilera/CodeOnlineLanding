import { useState } from "react";
import "./TurnosDemo.css";

import {
  FaChartPie,
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

import Reportes from "./turnos-components/Reportes";
import Dashboard from "./turnos-components/Dashboard";
import Profesionales from "./turnos-components/Profesionales";
import Pacientes from "./turnos-components/Pacientes";
import Calendario from "./turnos-components/Calendario";
import Turnos from "./turnos-components/Turnos";
import Configuracion from "./turnos-components/Configuracion";


function TurnosDemo() {
  const [seccionActiva, setSeccionActiva] = useState("dashboard");

  const titulos = {
    dashboard: {
      titulo: "Dashboard",
      descripcion: "Resumen general de la agenda.",
    },
    profesionales: {
      titulo: "Profesionales",
      descripcion: "Administrá los profesionales disponibles.",
    },
    pacientes: {
      titulo: "Pacientes",
      descripcion: "Gestioná la información de los pacientes.",
    },
    calendario: {
      titulo: "Calendario",
      descripcion: "Visualizá la agenda y los turnos programados.",
    },
    turnos: {
      titulo: "Turnos",
      descripcion: "Administrá reservas, confirmaciones y cancelaciones.",
    },
    reportes: {
  titulo: "Reportes",
  descripcion: "Consultá estadísticas y resultados de la agenda.",
  },
    configuracion: {
      titulo: "Configuración",
      descripcion: "Personalizá las opciones generales del sistema.",
    },
  };

  const encabezadoActual = titulos[seccionActiva];

  return (
    <div className="sales-demo turnos-demo">
      <aside className="sales-sidebar">
        <div className="sales-brand">
          <div className="sales-logo">&lt;/&gt;</div>

          <div>
            <h2>CodeOnline</h2>
            <span>Sistema de Turnos</span>
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
            className={seccionActiva === "profesionales" ? "active" : ""}
            onClick={() => setSeccionActiva("profesionales")}
          >
            <FaUserMd />
            Profesionales
          </button>

          <button
            type="button"
            className={seccionActiva === "pacientes" ? "active" : ""}
            onClick={() => setSeccionActiva("pacientes")}
          >
            <FaUsers />
            Pacientes
          </button>

          <button
            type="button"
            className={seccionActiva === "calendario" ? "active" : ""}
            onClick={() => setSeccionActiva("calendario")}
          >
            <FaCalendarAlt />
            Calendario
          </button>

          <button
            type="button"
            className={seccionActiva === "turnos" ? "active" : ""}
            onClick={() => setSeccionActiva("turnos")}
          >
            <FaClock />
            Turnos
          </button>
          <button
            type="button"
            className={seccionActiva === "reportes" ? "active" : ""}
            onClick={() => setSeccionActiva("reportes")}
          >
            <FaFileAlt />
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

        Estuve probando el Sistema de Turnos de CodeOnline y me interesa implementarlo en mi negocio.

        ¿Podemos conversar sobre la implementación, el presupuesto y los tiempos de entrega?

        ¡Muchas gracias!`
        )}`}
          target="_blank"
         rel="noreferrer"
         className="demo-whatsapp"
         >
        🚀 Quiero este sistema
          </a>

        
        <span>🔔</span>
        <strong>Usuario Demo</strong>
        </div>
        </header>

        {seccionActiva === "dashboard" && <Dashboard />}
        {seccionActiva === "profesionales" && <Profesionales />}
        {seccionActiva === "pacientes" && <Pacientes />}
        {seccionActiva === "calendario" && <Calendario />}
        {seccionActiva === "turnos" && <Turnos />}
        {seccionActiva === "reportes" && <Reportes />}
        {seccionActiva === "configuracion" && <Configuracion />}
      </main>
    </div>
  );
}

export default TurnosDemo;