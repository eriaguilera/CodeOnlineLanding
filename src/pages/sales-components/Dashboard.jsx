function Dashboard() {
  return (
    <>
      <section className="kpi-grid">
        <div className="kpi-card">
          <span>Ventas del mes</span>
          <strong>$1.250.000</strong>
          <small className="positive">↑ 18%</small>
        </div>

        <div className="kpi-card">
          <span>Clientes nuevos</span>
          <strong>24</strong>
          <small className="positive">↑ 8%</small>
        </div>

        <div className="kpi-card">
          <span>Productos vendidos</span>
          <strong>356</strong>
          <small>Este mes</small>
        </div>

        <div className="kpi-card">
          <span>Stock bajo</span>
          <strong>12</strong>
          <small className="warning">Reponer</small>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="panel large">
          <div className="panel-header">
            <h3>Ventas de los últimos 6 meses</h3>
            <span>ARS</span>
          </div>

          <div className="bar-chart">
            <div>
              <span style={{ height: "45%" }}></span>
              <small>Ene</small>
            </div>

            <div>
              <span style={{ height: "65%" }}></span>
              <small>Feb</small>
            </div>

            <div>
              <span style={{ height: "52%" }}></span>
              <small>Mar</small>
            </div>

            <div>
              <span style={{ height: "80%" }}></span>
              <small>Abr</small>
            </div>

            <div>
              <span style={{ height: "70%" }}></span>
              <small>May</small>
            </div>

            <div>
              <span style={{ height: "92%" }}></span>
              <small>Jun</small>
            </div>
          </div>
        </div>

        <div className="panel">
          <h3>Productos destacados</h3>

          <div className="product-item">
            <span>Notebook Lenovo</span>
            <strong>18 ventas</strong>
          </div>

          <div className="product-item">
            <span>Monitor Samsung</span>
            <strong>12 ventas</strong>
          </div>

          <div className="product-item">
            <span>Mouse inalámbrico</span>
            <strong>31 ventas</strong>
          </div>
        </div>

        <div className="panel large">
          <h3>Últimas ventas</h3>

          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>María Gómez</td>
                <td>Notebook Lenovo</td>
                <td>$450.000</td>
                <td>
                  <span className="status paid">Pagado</span>
                </td>
              </tr>

              <tr>
                <td>Juan Pérez</td>
                <td>Monitor Samsung</td>
                <td>$220.000</td>
                <td>
                  <span className="status paid">Pagado</span>
                </td>
              </tr>

              <tr>
                <td>Lucía Díaz</td>
                <td>Mouse inalámbrico</td>
                <td>$18.000</td>
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
            ⚠️ 12 productos con stock bajo
          </div>

          <div className="alert-item">
            📦 3 pedidos pendientes
          </div>

          <div className="alert-item">
            💰 1 pago por confirmar
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;