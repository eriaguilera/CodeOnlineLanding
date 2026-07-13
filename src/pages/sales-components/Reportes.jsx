function Reportes() {
  return (
    <section className="panel">
      <h3>Reportes del sistema</h3>

      <div className="report-grid">
        <div className="report-card">
          <span>Facturación mensual</span>
          <strong>$1.250.000</strong>
        </div>

        <div className="report-card">
          <span>Producto más vendido</span>
          <strong>Mouse inalámbrico</strong>
        </div>

        <div className="report-card">
          <span>Cliente principal</span>
          <strong>María Gómez</strong>
        </div>
      </div>
    </section>
  );
}

export default Reportes;