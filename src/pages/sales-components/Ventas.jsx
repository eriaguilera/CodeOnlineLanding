function Ventas() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Registro de ventas</h3>

        <button type="button" className="btn-primary">
          + Nueva venta
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>09/07/2026</td>
            <td>María Gómez</td>
            <td>$450.000</td>
            <td>
              <span className="status paid">Pagado</span>
            </td>
          </tr>

          <tr>
            <td>08/07/2026</td>
            <td>Juan Pérez</td>
            <td>$220.000</td>
            <td>
              <span className="status paid">Pagado</span>
            </td>
          </tr>

          <tr>
            <td>08/07/2026</td>
            <td>Lucía Díaz</td>
            <td>$18.000</td>
            <td>
              <span className="status pending">Pendiente</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Ventas;