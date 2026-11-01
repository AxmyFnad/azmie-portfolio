import './Achievements.css'

function Achievements() {
  return (
    <section
      className="achievements-section"
      id="achievements"
    >
      <div className="achievements-light"></div>

      <div className="achievements-container">
        {/* =================================
            TOP
        ================================= */}
        <div className="achievements-top">
          <div className="achievements-index">
            <span>05</span>
            <div></div>
            <p>ACHIEVEMENTS / RECOGNITION</p>
          </div>

          <p className="achievements-top-label">
            ACHIEVEMENTS
          </p>
        </div>

        {/* =================================
            HEADER
        ================================= */}
        <div className="achievements-header">
          <p className="achievements-eyebrow">
            PROJECTS · COMPETITIONS · RECOGNITION
          </p>

          <h2>
            Recognition that marks
            <span> meaningful progress.</span>
          </h2>

          <p className="achievements-header-description">
            Selected achievements that reflect project development,
            competition performance, teamwork, client collaboration
            and technical presentation.
          </p>
        </div>

        {/* =================================
            ICOVEX 2026 — OVERALL CHAMPION
        ================================= */}
        <div className="achievement-featured">
          {/* IMAGE */}
          <div className="achievement-visual">
            <div className="achievement-image-glow"></div>

            <div className="achievement-image-wrapper">
              <img
                src="/images/icovex-2026-champion.jpeg"
                alt="Power Sphere AI iCoVEx 2026 Overall Champion achievement"
                className="achievement-image"
              />

              <div className="achievement-image-overlay"></div>

              <span className="achievement-image-index">
                01
              </span>

              <div className="achievement-image-caption">
                <span>iCoVEx 2026</span>
                <strong>Power Sphere AI</strong>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="achievement-content">
            <span className="achievement-number">
              01 / FEATURED ACHIEVEMENT
            </span>

            <p className="achievement-kicker">
              INNOVATION · DIGITAL TECHNOLOGY · IoT
            </p>

            <h3>
              Overall
              <span> Champion.</span>
            </h3>

            <p className="achievement-event">
              iCoVEx 2026
            </p>

            <p className="achievement-description">
              Power Sphere AI achieved the Overall Champion title at
              iCoVEx 2026, together with a Gold Award and recognition
              for Best Digital Technology &amp; IoT.
            </p>

            <p className="achievement-description">
              The achievement represents the strongest competition
              milestone for the project and reflects the team&apos;s work
              in developing, presenting and demonstrating a practical
              digital solution for construction company management.
            </p>

            <div className="achievement-stats">
              <div className="achievement-stat">
                <span>01</span>
                <p>Overall Placement</p>
              </div>

              <div className="achievement-stat">
                <span>Gold</span>
                <p>Award</p>
              </div>

              <div className="achievement-stat">
                <span>Best</span>
                <p>Digital Technology &amp; IoT</p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            DICE 2026
        ================================= */}
        <div className="achievement-featured achievement-featured-secondary achievement-featured-reverse">
          {/* IMAGE */}
          <div className="achievement-visual">
            <div className="achievement-image-glow"></div>

            <div className="achievement-image-wrapper">
              <img
                src="/images/dice-award.jpeg"
                alt="Power Sphere AI DICE 2026 achievement"
                className="achievement-image"
              />

              <div className="achievement-image-overlay"></div>

              <span className="achievement-image-index">
                02
              </span>

              <div className="achievement-image-caption">
                <span>DICE 2026</span>
                <strong>Power Sphere AI</strong>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="achievement-content">
            <span className="achievement-number">
              02 / ACHIEVEMENT
            </span>

            <p className="achievement-kicker">
              WEB &amp; APPLICATION DEVELOPMENT
            </p>

            <h3>
              2nd Best
              <span> Project.</span>
            </h3>

            <p className="achievement-event">
              DICE 2026
            </p>

            <p className="achievement-description">
              Power Sphere AI was recognised as the 2nd Best Project
              in the Web &amp; Application Development category during
              DICE 2026.
            </p>

            <p className="achievement-description">
              The achievement represents the outcome of project
              development, teamwork, client collaboration and the
              effort invested in transforming real operational
              requirements into a working web-based system.
            </p>

            <div className="achievement-stats">
              <div className="achievement-stat">
                <span>02</span>
                <p>Placement</p>
              </div>

              <div className="achievement-stat">
                <span>2026</span>
                <p>Year</p>
              </div>

              <div className="achievement-stat">
                <span>Web</span>
                <p>Category</p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================
            IICIPC SILVER AWARD
        ================================= */}
        <div className="certificate-showcase">
          {/* CONTENT */}
          <div className="certificate-content">
            <span className="certificate-number">
              03 / AWARD
            </span>

            <p className="certificate-kicker">
              INTERNATIONAL INNOVATIVE &amp; CREATIVE IDEAS
              POSTER COMPETITION
            </p>

            <h3>
              Silver
              <span> Award.</span>
            </h3>

            <p className="certificate-event">
              IICIPC 2026
            </p>

            <p className="certificate-description">
              Awarded Silver in the International Innovative &amp;
              Creative Ideas Poster Competition (IICIPC 2026)
              for the project “Construction Company Management
              with Corporate Website”.
            </p>

            <div className="certificate-meta">
              <div>
                <span>AWARD</span>
                <strong>Silver Award</strong>
              </div>

              <div>
                <span>EVENT</span>
                <strong>IICIPC 2026</strong>
              </div>

              <div>
                <span>DATE</span>
                <strong>19 September 2026</strong>
              </div>
            </div>
          </div>

          {/* CERTIFICATE */}
          <div className="certificate-visual">
            <div className="certificate-glow"></div>

            <div className="certificate-frame">
              <img
                src="/images/iicipc-silver-certificate.png"
                alt="IICIPC 2026 Silver Award Certificate"
              />

              <div className="certificate-overlay"></div>

              <span className="certificate-label">
                IICIPC 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
