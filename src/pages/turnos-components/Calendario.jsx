function Calendario() {
  return (
    <section className="panel">
      <h3>Agenda semanal</h3>

      <div className="calendar-day">
        <h4>📅 Lunes</h4>

        <div className="calendar-item">
          <strong>09:00</strong>
          <span>Carla Fernández</span>
          <small>Dra. Laura Gómez</small>
        </div>

        <div className="calendar-item">
          <strong>10:30</strong>
          <span>Diego López</span>
          <small>Lic. Martín Ruiz</small>
        </div>

        <div className="calendar-item">
          <strong>11:30</strong>
          <span>Mariana Díaz</span>
          <small>Dra. Ana Torres</small>
        </div>
      </div>

      <div className="calendar-day">
        <h4>📅 Martes</h4>

        <div className="calendar-item">
          <strong>09:00</strong>
          <span>Lucas Herrera</span>
          <small>Dra. Laura Gómez</small>
        </div>

        <div className="calendar-item">
          <strong>11:00</strong>
          <span>Sofía Martínez</span>
          <small>Lic. Martín Ruiz</small>
        </div>
      </div>
    </section>
  );
}

export default Calendario;