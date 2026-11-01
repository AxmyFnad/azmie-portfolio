import './Skills.css'

function Skills() {
  const skills = [
    {
      name: 'React',
      image: '/images/tools/react.webp'
    },
    {
      name: 'JavaScript',
      image: '/images/tools/javascript.png'
    },
    {
      name: 'HTML',
      image: '/images/tools/html.png'
    },
    {
      name: 'Laravel',
      image: '/images/tools/laravel.webp'
    },
    {
      name: 'PHP',
      image: '/images/tools/php.webp'
    },
    {
      name: 'MySQL',
      image: '/images/tools/mysql.png'
    }
  ]

  return (
    <section className="skills-section" id="skills">

      <div className="skills-light"></div>

      <div className="skills-container">

        {/* TOP */}
        <div className="skills-top">

          <div className="skills-index">
            <span>03</span>
            <div></div>
            <p>SKILLS / STACK</p>
          </div>

          <p className="skills-top-label">
            TECHNICAL SKILLS
          </p>

        </div>


        {/* HEADER */}
        <div className="skills-heading">

          <p className="skills-eyebrow">
            TOOLS & TECHNOLOGIES
          </p>

          <h2>
            My technical
            <span> toolkit.</span>
          </h2>

        </div>


        {/* LOGOS */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-item"
              key={skill.name}
            >

              <span className="skill-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="skill-logo">
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                />
              </div>

              <h3>
                {skill.name}
              </h3>

            </div>
          ))}

        </div>


        {/* BOTTOM */}
        <div className="skills-bottom">

          <span>
            03 / SKILLS
          </span>

          <p>
            Tools I use in development and technical work.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Skills