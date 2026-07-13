function Profesionales() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Listado de profesionales</h3>

        <button type="button" className="btn-primary">
          + Nuevo profesional
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Profesional</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dra. Laura Gómez</td>
            <td>Clínica médica</td>
            <td>381 555-1234</td>
            <td>
              <span className="status paid">Activo</span>
            </td>
          </tr>

          <tr>
            <td>Lic. Martín Ruiz</td>
            <td>Psicología</td>
            <td>381 555-5678</td>
            <td>
              <span className="status paid">Activo</span>
            </td>
          </tr>

          <tr>
            <td>Dra. Ana Torres</td>
            <td>Pediatría</td>
            <td>381 555-9012</td>
            <td>
              <span className="status pending">De licencia</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Profesionales;