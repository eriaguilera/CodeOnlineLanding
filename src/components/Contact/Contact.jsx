import "./Contact.css";
import ContactForm from "../ContactForm/ContactForm";

import contactIllustration from "../../assets/images/contact-card.png";

function Contact() {
  return (
    <section className="contact">

      <h2 className="section-title">
        Hablemos de tu proyecto
      </h2>

      <div className="section-line"></div>

      <p className="section-description">
        Estamos listos para ayudarte...
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-image-wrapper">
            <img
             src={contactIllustration}
             alt="Ilustración CodeOnline"
             className="contact-card-image"
         />
        </div>

        </div>

        <ContactForm />

      </div>

    </section>
  );
}

export default Contact;