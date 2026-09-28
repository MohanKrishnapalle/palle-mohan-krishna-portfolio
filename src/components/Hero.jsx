function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-grid"></div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Palle <span>Mohan Krishna</span>
        </h1>

        <h2>AI/ML + Embedded Systems Developer</h2>

        <p className="hero-description">
          I build intelligent systems by combining Artificial Intelligence,
          Machine Learning, Embedded Systems, and modern software technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a href="/resume.pdf" className="secondary-button">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-circle">
          <span>AI & ML</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;