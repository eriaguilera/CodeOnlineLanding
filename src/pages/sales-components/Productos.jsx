function Productos() {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>Listado de productos</h3>

        <button type="button" className="btn-primary">
          + Nuevo producto
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Notebook Lenovo</td>
            <td>Informática</td>
            <td>$450.000</td>
            <td>14</td>
          </tr>

          <tr>
            <td>Monitor Samsung</td>
            <td>Monitores</td>
            <td>$220.000</td>
            <td>9</td>
          </tr>

          <tr>
            <td>Mouse inalámbrico</td>
            <td>Accesorios</td>
            <td>$18.000</td>
            <td>
              <span className="status pending">Stock bajo</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Productos;