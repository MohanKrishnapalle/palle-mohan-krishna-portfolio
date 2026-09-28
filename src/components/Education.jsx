import education from "../data/education";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div className="education-item" key={index}>

            <div className="education-marker">
              <span></span>
            </div>

            <div className="education-card">

              <div className="education-top">
                <span className="education-period">
                  {item.period}
                </span>

                <span className="education-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.specialization}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <p className="education-location">
                📍 {item.location}
              </p>

              <p className="education-description">
                {item.description}
              </p>

              <div className="education-highlights">
                {item.highlights.map((highlight, highlightIndex) => (
                  <span key={highlightIndex}>
                    {highlight}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;