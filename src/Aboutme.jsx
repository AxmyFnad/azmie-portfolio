import './Aboutme.css'

function Aboutme() {
  return (
    <section className="about-section" id="about">

      <div className="about-light"></div>

      <div className="about-container">

        {/* TOP CHAPTER */}
        <div className="about-top">

          <div className="about-index">
            <span>02</span>
            <div></div>
            <p>ABOUT / PROFILE</p>
          </div>

          <p className="about-top-label">
            WHO I AM
          </p>

        </div>


        {/* BIG TITLE */}
        <div className="about-heading">

          <p className="about-eyebrow">
            SOFTWARE DEVELOPMENT · WEB DEVELOPMENT · DIGITAL SOLUTIONS
          </p>

          <h2>
            Building digital solutions
            <span> that work in the real world.</span>
          </h2>

        </div>


        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* LEFT IMAGE */}
          <div className="about-visual">

            <div className="about-image-glow"></div>

            <div className="about-image-frame">

              <img
                src="/images/papa-client.jpeg"
                alt="Azmie with Power Sphere AI project client"
              />

              <div className="about-image-overlay"></div>

              <span className="about-image-number">
                01
              </span>

              <div className="about-image-caption">

                <small>
                  REAL-WORLD EXPERIENCE
                </small>

                <strong>
                  Industry Client Collaboration
                </strong>

              </div>

            </div>


            {/* IMAGE META */}
            <div className="about-meta">

              <div>
                <small>PROJECT</small>
                <strong>Power Sphere AI</strong>
              </div>

              <div>
                <small>CLIENT</small>
                <strong>PAPA Engineering Resources</strong>
              </div>

            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div className="about-content">

            <p className="about-intro">
              I am a software and web developer focused on building
              practical, responsive and user-friendly digital solutions.
            </p>


            <div className="about-story">

              <p>
                My work covers both frontend and backend development,
                from designing responsive interfaces to building
                application logic, databases and complete web-based
                systems.
              </p>

              <p>
                I am completing my Diploma in Information Technology with
                a focus on software development at Politeknik Muadzam
                Shah. Through academic work, competitions and industry
                collaboration, I have worked on solutions based on
                real business requirements rather than isolated
                classroom exercises.
              </p>

              <p>
                One of my main projects is Power Sphere AI, a
                construction company management system developed
                through direct collaboration with PAPA Engineering
                Resources. The project strengthened my understanding
                of user requirements, business workflows, deployment
                and delivering a complete working system.
              </p>

            </div>


            {/* FOCUS LIST */}
            <div className="about-focus">

              <div className="about-focus-row">

                <span>01</span>

                <h3>Web Applications</h3>

                <p>
                  Developing structured web-based systems for
                  business processes and operational needs.
                </p>

                <i>↗</i>

              </div>


              <div className="about-focus-row">

                <span>02</span>

                <h3>Business Websites</h3>

                <p>
                  Creating responsive websites, landing pages and
                  portfolio sites with clean and modern interfaces.
                </p>

                <i>↗</i>

              </div>


              <div className="about-focus-row">

                <span>03</span>

                <h3>Custom Digital Solutions</h3>

                <p>
                  Turning ideas and real-world requirements into
                  practical solutions tailored to the user.
                </p>

                <i>↗</i>

              </div>

            </div>


            {/* QUOTE */}
            <div className="about-quote">

              <span>“</span>

              <p>
                From an idea or business requirement to a working
                digital product.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Aboutme
