function Pacientes() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Listado de pacientes</h3>

        <button type="button" className="btn-primary">
          + Nuevo paciente
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Próximo turno</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Carla Fernández</td>
            <td>31.456.789</td>
            <td>381 555-1234</td>
            <td>12/07 - 09:00</td>
          </tr>

          <tr>
            <td>Diego López</td>
            <td>28.987.654</td>
            <td>381 555-5678</td>
            <td>12/07 - 10:30</td>
          </tr>

          <tr>
            <td>Mariana Díaz</td>
            <td>35.741.852</td>
            <td>381 555-9012</td>
            <td>13/07 - 15:00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Pacientes;