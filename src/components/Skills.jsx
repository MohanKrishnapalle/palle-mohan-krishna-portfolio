import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>Skills & <span>Technologies</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div className="skill-card" key={index}>
            <h3>{skillGroup.category}</h3>

            <div className="skill-list">
              {skillGroup.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;