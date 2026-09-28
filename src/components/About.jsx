function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>AI/ML & Embedded Systems Developer</h3>

          <p>
            I am a Computer Science and Engineering student specializing in
            Artificial Intelligence and Machine Learning, with a strong
            interest in building practical and intelligent technology
            solutions.
          </p>

          <p>
            My interests span Artificial Intelligence, Machine Learning,
            Deep Learning, Embedded Systems, IoT, and software development.
            I enjoy combining hardware and software to create systems that
            solve real-world problems.
          </p>

          <p>
            Through my academic projects and technical activities, I have
            worked with technologies such as Python, AI/ML, ESP32, Arduino,
            FastAPI, SQL, AWS, and RAG technologies.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-item">
            <span>🎓</span>
            <div>
              <h4>Education</h4>
              <p>B.Tech – Computer Science & Engineering</p>
            </div>
          </div>

          <div className="about-card-item">
            <span>🤖</span>
            <div>
              <h4>Specialization</h4>
              <p>Artificial Intelligence & Machine Learning</p>
            </div>
          </div>

          <div className="about-card-item">
            <span>⚙️</span>
            <div>
              <h4>Focus</h4>
              <p>AI/ML • Embedded Systems • IoT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;