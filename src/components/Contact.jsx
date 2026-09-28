import contact from "../data/contact";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's <span>Connect</span></h2>
      </div>

      <div className="contact-content">

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            Have a project idea, internship opportunity, or collaboration in
            mind? Feel free to get in touch with me.
          </p>

          <div className="contact-details">

            <a href={`mailto:${contact.email}`}>
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>{contact.email}</p>
              </div>
            </a>

            <a href={`tel:${contact.phone}`}>
              <span>📱</span>
              <div>
                <h4>Phone</h4>
                <p>{contact.phone}</p>
              </div>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🔗</span>
              <div>
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💻</span>
              <div>
                <h4>GitHub</h4>
                <p>View my projects</p>
              </div>
            </a>

          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-glow"></div>

          <h3>Have an idea?</h3>

          <p>
            I'm always interested in building innovative AI, ML, embedded
            systems, and software projects.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="contact-button"
          >
            Send Me an Email →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;