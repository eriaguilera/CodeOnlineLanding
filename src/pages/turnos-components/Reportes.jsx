import "./Reportes.css";

const Reportes = () => {
  const turnosPorProfesional = [
    { nombre: "Dra. Laura Gómez", cantidad: 48 },
    { nombre: "Dr. Martín Ruiz", cantidad: 36 },
    { nombre: "Lic. Ana Pérez", cantidad: 29 },
  ];

  return (
    <div className="reportes-page">
      <div className="reportes-header">
        <div>
          <span className="reportes-etiqueta">Resumen mensual</span>
          <h1>Reportes</h1>
          <p>Analizá el rendimiento general del centro de atención.</p>
        </div>

        <div className="reportes-acciones">
          <button className="btn-secundario">Exportar Excel</button>
          <button className="btn-principal">Descargar PDF</button>
        </div>
      </div>

      <div className="reportes-cards">
        <article className="reporte-card">
          <span className="reporte-icono">📅</span>
          <div>
            <p>Total de turnos</p>
            <h2>186</h2>
            <small className="dato-positivo">+12% este mes</small>
          </div>
        </article>

        <article className="reporte-card">
          <span className="reporte-icono">✅</span>
          <div>
            <p>Confirmados</p>
            <h2>142</h2>
            <small>76% del total</small>
          </div>
        </article>

        <article className="reporte-card">
          <span className="reporte-icono">⏳</span>
          <div>
            <p>Pendientes</p>
            <h2>28</h2>
            <small>15% del total</small>
          </div>
        </article>

        <article className="reporte-card">
          <span className="reporte-icono">❌</span>
          <div>
            <p>Cancelados</p>
            <h2>16</h2>
            <small>9% del total</small>
          </div>
        </article>
      </div>

      <div className="reportes-grid">
        <section className="reporte-panel">
          <div className="panel-header">
            <div>
              <h3>Turnos por día</h3>
              <p>Actividad de la última semana</p>
            </div>
          </div>

          <div className="grafico-barras">
            <div className="barra-item">
              <div className="barra barra-55"></div>
              <span>Lun</span>
            </div>

            <div className="barra-item">
              <div className="barra barra-75"></div>
              <span>Mar</span>
            </div>

            <div className="barra-item">
              <div className="barra barra-65"></div>
              <span>Mié</span>
            </div>

            <div className="barra-item">
              <div className="barra barra-90"></div>
              <span>Jue</span>
            </div>

            <div className="barra-item">
              <div className="barra barra-80"></div>
              <span>Vie</span>
            </div>

            <div className="barra-item">
              <div className="barra barra-45"></div>
              <span>Sáb</span>
            </div>
          </div>
        </section>

        <section className="reporte-panel">
          <div className="panel-header">
            <div>
              <h3>Estado de turnos</h3>
              <p>Distribución mensual</p>
            </div>
          </div>

          <div className="estado-resumen">
            <div className="circulo-reporte">
              <div>
                <strong>186</strong>
                <span>Turnos</span>
              </div>
            </div>

            <div className="estado-lista">
              <div>
                <span className="punto confirmado"></span>
                Confirmados
                <strong>142</strong>
              </div>

              <div>
                <span className="punto pendiente"></span>
                Pendientes
                <strong>28</strong>
              </div>

              <div>
                <span className="punto cancelado"></span>
                Cancelados
                <strong>16</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="reporte-panel profesionales-panel">
        <div className="panel-header">
          <div>
            <h3>Profesionales con más turnos</h3>
            <p>Rendimiento durante el mes actual</p>
          </div>

          <button className="btn-ver-todos">Ver detalle</button>
        </div>

        <div className="profesionales-lista">
          {turnosPorProfesional.map((profesional, index) => (
            <div className="profesional-fila" key={profesional.nombre}>
              <div className="profesional-posicion">{index + 1}</div>

              <div className="profesional-info">
                <strong>{profesional.nombre}</strong>
                <span>{profesional.cantidad} turnos atendidos</span>
              </div>

              <div className="profesional-progreso">
                <div
                  className="progreso-completado"
                  style={{ width: `${profesional.cantidad * 2}%` }}
                ></div>
              </div>

              <strong>{profesional.cantidad}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reportes;