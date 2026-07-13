function Clientes() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Listado de clientes</h3>

        <button type="button" className="btn-primary">
          + Nuevo cliente
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>María Gómez</td>
            <td>maria@email.com</td>
            <td>381 555-1234</td>
            <td>
              <span className="status paid">Activo</span>
            </td>
          </tr>

          <tr>
            <td>Juan Pérez</td>
            <td>juan@email.com</td>
            <td>381 555-5678</td>
            <td>
              <span className="status paid">Activo</span>
            </td>
          </tr>

          <tr>
            <td>Lucía Díaz</td>
            <td>lucia@email.com</td>
            <td>381 555-9012</td>
            <td>
              <span className="status pending">Pendiente</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Clientes;