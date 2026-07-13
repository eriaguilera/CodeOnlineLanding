function Configuracion() {
  return (
    <section className="panel">
      <h3>Configuración del sistema</h3>

      <div className="settings-form">
        <label>
          Nombre del consultorio
          <input type="text" defaultValue="Consultorio Demo" />
        </label>

        <label>
          Horario de atención
          <select defaultValue="08:00-18:00">
            <option value="08:00-18:00">08:00 a 18:00</option>
            <option value="09:00-17:00">09:00 a 17:00</option>
            <option value="14:00-20:00">14:00 a 20:00</option>
          </select>
        </label>

        <label>
          Duración predeterminada del turno
          <select defaultValue="30">
            <option value="20">20 minutos</option>
            <option value="30">30 minutos</option>
            <option value="45">45 minutos</option>
            <option value="60">60 minutos</option>
          </select>
        </label>

        <label>
          Recordatorios automáticos
          <select defaultValue="activados">
            <option value="activados">Activados</option>
            <option value="desactivados">Desactivados</option>
          </select>
        </label>

        <button type="button" className="btn-primary">
          Guardar cambios
        </button>
      </div>
    </section>
  );
}

export default Configuracion;