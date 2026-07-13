function Turnos() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Listado de turnos</h3>

        <button type="button" className="btn-primary">
          + Nuevo turno
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Profesional</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>12/07/2026</td>
            <td>09:00</td>
            <td>Carla Fernández</td>
            <td>Dra. Laura Gómez</td>
            <td>
              <span className="status paid">Confirmado</span>
            </td>
          </tr>

          <tr>
            <td>12/07/2026</td>
            <td>10:30</td>
            <td>Diego López</td>
            <td>Lic. Martín Ruiz</td>
            <td>
              <span className="status pending">Pendiente</span>
            </td>
          </tr>

          <tr>
            <td>12/07/2026</td>
            <td>11:30</td>
            <td>Mariana Díaz</td>
            <td>Dra. Ana Torres</td>
            <td>
              <span className="status cancelled">Cancelado</span>
            </td>
          </tr>

          <tr>
            <td>13/07/2026</td>
            <td>15:00</td>
            <td>Lucas Herrera</td>
            <td>Dra. Laura Gómez</td>
            <td>
              <span className="status paid">Confirmado</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Turnos;