function Configuracion() {
  return (
    <section className="panel">
      <h3>Configuración general</h3>

      <div className="settings-form">
        <label>
          Nombre del comercio
          <input type="text" defaultValue="Comercio Demo" />
        </label>

        <label>
          Moneda
          <select defaultValue="ARS">
            <option value="ARS">Peso argentino</option>
            <option value="USD">Dólar estadounidense</option>
          </select>
        </label>

        <label>
          Notificaciones de stock
          <select defaultValue="activadas">
            <option value="activadas">Activadas</option>
            <option value="desactivadas">Desactivadas</option>
          </select>
        </label>

        <button className="btn-primary">
          Guardar cambios
        </button>
      </div>
    </section>
  );
}

export default Configuracion;