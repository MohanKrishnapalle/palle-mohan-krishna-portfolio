import certifications from "../data/certifications";

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-heading">
        <p>PROFESSIONAL CREDENTIALS</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            
            <div className="certification-icon">
              ☁️
            </div>

            <div className="certification-content">
              <p className="certification-number">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3>{certification.title}</h3>

              <p className="certification-issuer">
                {certification.issuer}
              </p>

              <p className="certification-description">
                {certification.description}
              </p>

              <div className="certification-bottom">
                <span>{certification.year}</span>

                <a
                  href={certification.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;