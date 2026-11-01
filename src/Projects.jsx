import './Projects.css'

const FEATURES = [
  'Quotation & Project Management',
  'Invoice & Payment Management',
  'AI Service Category Detection',
  'AI Reminder System',
  'OCR Document Processing',
  'Digital Document Management'
]

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-light"></div>

      <div className="projects-container">

        {/* TOP */}
        <div className="projects-top">

          <div className="projects-index">
            <span>04</span>
            <div></div>
            <p>PROJECTS / SELECTED WORK</p>
          </div>

          <p className="projects-top-label">
            FEATURED PROJECT
          </p>

        </div>


        {/* HEADING */}
        <div className="projects-heading">

          <p className="projects-eyebrow">
            REAL CLIENT · LIVE SYSTEM · FULL-STACK DEVELOPMENT
          </p>

          <h2>
            Building solutions for
            <span> real business needs.</span>
          </h2>

        </div>


        {/* PROJECT TITLE */}
        <div className="project-title-row">

          <div>
            <span>01 / INDUSTRY CLIENT PROJECT</span>
            <h3>Power Sphere AI</h3>
          </div>

          <p>
            Construction management system developed with
            PAPA Engineering Resources · 2026
          </p>

        </div>


        {/* MAIN SCREEN */}
        <div className="project-screen">

          <div className="project-browser-bar">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="browser-url">
              papaengineering.com
            </span>

            <span className="browser-year">
              2026
            </span>

          </div>

          <div className="project-screen-image">

            <img
              src="/images/dashboard.png"
              alt="Power Sphere AI dashboard"
            />

            <div className="project-screen-overlay"></div>

          </div>

        </div>


        {/* OVERVIEW */}
        <div className="project-overview">

          <div>
            <span className="project-small-label">
              PROJECT OVERVIEW
            </span>

            <h4>
              From business workflow
              <span> to working system.</span>
            </h4>
          </div>

          <div className="project-overview-copy">

            <p>
              Power Sphere AI is a web-based construction management
              system created to digitalise customer requests,
              quotations, project management, invoicing, payments
              and project completion workflows.
            </p>

            <p>
              The system was developed through direct collaboration
              with an industry client, giving me practical experience
              in translating real operational requirements into a
              complete deployed product.
            </p>

          </div>

        </div>


        {/* FEATURES */}
        <div className="project-features">

          <div className="project-section-title">
            <span>CORE FEATURES</span>
            <p>Selected capabilities of the system</p>
          </div>

          <div className="project-feature-grid">

            {FEATURES.map((feature, index) => (
              <div
                className="project-feature"
                key={feature}
              >
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{feature}</p>
              </div>
            ))}

          </div>

        </div>


        {/* DETAILS */}
        <div className="project-details">

          <div>
            <span>TYPE</span>
            <strong>Industry Client Project</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Full-Stack Development</strong>
          </div>

          <div>
            <span>CLIENT</span>
            <strong>PAPA Engineering Resources</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="project-live">Live</strong>
          </div>

        </div>


        {/* CTA */}
        <div className="project-bottom">

          <div>
            <span>LIVE PROJECT</span>
            <h4>
              See the project in action.
            </h4>
          </div>

          <a
            href="https://papaengineering.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Projects
