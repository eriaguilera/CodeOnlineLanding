import "./ContactForm.css";

function ContactForm() {
  return (
    <form id="contacto" className="contact-form">

      <input
        type="text"
        placeholder="Nombre completo"
      />

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        type="text"
        placeholder="Empresa"
      />

      <textarea
        rows="6"
        placeholder="Contanos sobre tu proyecto..."
      ></textarea>

      <button className="btn-primary">
        Hablemos de tu proyecto →
      </button>

    </form>
  );
}

export default ContactForm;