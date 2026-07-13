function Dashboard() {
  return (
    <>
      <section className="kpi-grid">
        <div className="kpi-card">
          <span>Turnos de hoy</span>
          <strong>18</strong>
          <small className="positive">12 confirmados</small>
        </div>

        <div className="kpi-card">
          <span>Profesionales activos</span>
          <strong>6</strong>
          <small>Atendiendo hoy</small>
        </div>

        <div className="kpi-card">
          <span>Pacientes nuevos</span>
          <strong>9</strong>
          <small className="positive">↑ 12% este mes</small>
        </div>

        <div className="kpi-card">
          <span>Cancelaciones</span>
          <strong>3</strong>
          <small className="warning">Reprogramar</small>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel large">
          <div className="panel-header">
            <h3>Turnos de la semana</h3>
            <span>Julio</span>
          </div>

          <div className="bar-chart">
            <div>
              <span style={{ height: "45%" }}></span>
              <small>Lun</small>
            </div>

            <div>
              <span style={{ height: "70%" }}></span>
              <small>Mar</small>
            </div>

            <div>
              <span style={{ height: "58%" }}></span>
              <small>Mié</small>
            </div>

            <div>
              <span style={{ height: "85%" }}></span>
              <small>Jue</small>
            </div>

            <div>
              <span style={{ height: "65%" }}></span>
              <small>Vie</small>
            </div>

            <div>
              <span style={{ height: "38%" }}></span>
              <small>Sáb</small>
            </div>
          </div>
        </div>

        <div className="panel">
          <h3>Profesionales con más turnos</h3>

          <div className="product-item">
            <span>Dra. Laura Gómez</span>
            <strong>14 turnos</strong>
          </div>

          <div className="product-item">
            <span>Lic. Martín Ruiz</span>
            <strong>11 turnos</strong>
          </div>

          <div className="product-item">
            <span>Dra. Ana Torres</span>
            <strong>9 turnos</strong>
          </div>
        </div>

        <div className="panel large">
          <h3>Próximos turnos</h3>

          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Profesional</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>09:00</td>
                <td>Carla Fernández</td>
                <td>Dra. Laura Gómez</td>
                <td>
                  <span className="status paid">Confirmado</span>
                </td>
              </tr>

              <tr>
                <td>10:30</td>
                <td>Diego López</td>
                <td>Lic. Martín Ruiz</td>
                <td>
                  <span className="status paid">Confirmado</span>
                </td>
              </tr>

              <tr>
                <td>12:00</td>
                <td>Mariana Díaz</td>
                <td>Dra. Ana Torres</td>
                <td>
                  <span className="status pending">Pendiente</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h3>Alertas</h3>

          <div className="alert-item">
            ⚠️ 3 turnos sin confirmar
          </div>

          <div className="alert-item">
            📅 2 turnos reprogramados
          </div>

          <div className="alert-item">
            🔔 5 recordatorios pendientes
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;