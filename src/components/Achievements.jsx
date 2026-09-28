import achievements from "../data/achievements";

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-heading">
        <p>MY JOURNEY</p>
        <h2>Achievements & <span>Activities</span></h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            
            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <div className="achievement-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{achievement.title}</h3>

            <p className="achievement-organization">
              {achievement.organization}
            </p>

            <p className="achievement-description">
              {achievement.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;