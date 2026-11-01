import { useEffect, useRef, useState } from 'react'
import './App.css'

import Aboutme from './Aboutme'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'


/* =========================================
   LINKS
========================================= */

const LINKS = {
  github: 'https://github.com/AxmyFnad',
  resume: '/resume/Azmie-Danial-Resume.pdf'
}


/* =========================================
   NAVIGATION
========================================= */

const NAV = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact']
]


const ROLES = [
  'Software Developer',
  'Web Developer',
  'Freelance Web Developer'
]


/* =========================================
   GITHUB ICON
========================================= */

function GitHubLink() {
  return (
    <a
      href={LINKS.github}
      target="_blank"
      rel="noreferrer"
      className="social-link"
      aria-label="GitHub"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </a>
  )
}


/* =========================================
   REVEAL ON SCROLL
========================================= */

function Reveal({ children }) {

  const ref = useRef(null)

  const [shown, setShown] =
    useState(false)


  useEffect(() => {

    const element = ref.current

    if (!element) return


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setShown(true)

            observer.disconnect()

          }

        },

        {
          rootMargin:
            '0px 0px -10% 0px'
        }
      )


    observer.observe(element)


    return () =>
      observer.disconnect()

  }, [])


  return (
    <div
      ref={ref}
      className={`reveal${shown ? ' in' : ''}`}
    >
      {children}
    </div>
  )
}


/* =========================================
   CURSOR LIGHT
========================================= */

function CursorGlow() {

  const glowRef = useRef(null)


  useEffect(() => {

    let animationFrame


    const handleMove = (event) => {

      cancelAnimationFrame(
        animationFrame
      )


      animationFrame =
        requestAnimationFrame(() => {

          if (!glowRef.current) return


          glowRef.current.style.transform =
            `translate3d(
              ${event.clientX}px,
              ${event.clientY}px,
              0
            )`

        })

    }


    window.addEventListener(
      'mousemove',
      handleMove
    )


    return () => {

      window.removeEventListener(
        'mousemove',
        handleMove
      )

      cancelAnimationFrame(
        animationFrame
      )

    }

  }, [])


  return (
    <div
      ref={glowRef}
      className="cursor-glow"
    />
  )
}


/* =========================================
   NAVBAR
========================================= */

function Navbar() {

  const [active, setActive] =
    useState('home')

  const [scrolled, setScrolled] =
    useState(false)

  const [menuOpen, setMenuOpen] =
    useState(false)

  const progressRef =
    useRef(null)


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 30
      )


      /* HERO PARALLAX */

      const hero =
        document.getElementById('home')

      if (hero) {

        hero.style.setProperty(
          '--scroll-y',
          Math.min(
            window.scrollY,
            window.innerHeight
          )
        )

      }


      /* PROGRESS LINE */

      const scrollMax =
        document.documentElement.scrollHeight -
        window.innerHeight


      if (
        progressRef.current &&
        scrollMax > 0
      ) {

        progressRef.current.style.transform =
          `scaleX(
            ${window.scrollY / scrollMax}
          )`

      }

    }


    handleScroll()


    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                setActive(
                  entry.target.id
                )

              }

            }
          )

        },

        {
          rootMargin:
            '-45% 0px -48% 0px'
        }

      )


    const sectionIds = [
      'home',
      ...NAV.map(
        ([id]) => id
      )
    ]


    sectionIds.forEach(
      (id) => {

        const section =
          document.getElementById(id)

        if (section) {
          observer.observe(section)
        }

      }
    )


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      observer.disconnect()

    }

  }, [])


  return (
    <nav
      className={
        `navbar${scrolled ? ' scrolled' : ''}`
      }
    >

      <div
        className="nav-progress"
        ref={progressRef}
      />


      <a
        href="#home"
        className="logo"
      >
        AZMIE<span>.</span>
      </a>


      <div className="navbar-center">

        {NAV.map(
          ([id, label], index) => (

            <a
              key={id}
              href={`#${id}`}
              className={
                active === id
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setMenuOpen(false)
              }
            >

              <span className="nav-number">
                0{index + 1}
              </span>

              {label}

            </a>

          )
        )}

      </div>


      <div className="navbar-right">

        <a
          href="#contact"
          className="nav-talk"
        >
          Let&apos;s talk
          <span>↗</span>
        </a>


        <button
          className={
            `menu-button${menuOpen ? ' open' : ''}`
          }
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          aria-label="Toggle menu"
        >

          <span></span>
          <span></span>

        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={
          `mobile-menu${menuOpen ? ' open' : ''}`
        }
      >

        {NAV.map(
          ([id, label], index) => (

            <a
              key={id}
              href={`#${id}`}
              onClick={() =>
                setMenuOpen(false)
              }
            >

              <span>
                0{index + 1}
              </span>

              {label}

            </a>

          )
        )}

      </div>

    </nav>
  )
}


/* =========================================
   HERO
========================================= */

function Hero() {

  const delay = (index) => ({
    '--delay': index
  })


  return (
    <section
      className="hero"
      id="home"
    >

      {/* CINEMATIC LIGHT */}

      <div className="hero-light"></div>

      <div className="hero-grid"></div>


      {/* SIDE TEXT */}

      <div className="hero-side-text">
        PORTFOLIO / 2026
      </div>


      {/* MAIN */}

      <div className="hero-main">

        {/* LEFT */}

        <div className="hero-content">

          <div
            className="hero-status hero-rise"
            style={delay(0)}
          >

            <span className="hero-status-dot"></span>

            OPEN TO OPPORTUNITIES & FREELANCE PROJECTS

          </div>


          <p
            className="hero-intro hero-rise"
            style={delay(1)}
          >
            Hello, I&apos;m
          </p>


          <h1>

            <span className="hero-title-mask">
              <span
                style={{
                  '--title-delay': 0
                }}
              >
                MUHAMMAD
              </span>
            </span>

            <span className="hero-title-mask">

              <span
                className="hero-title-outline"
                style={{
                  '--title-delay': 1
                }}
              >
                AZMIE DANIAL
              </span>

            </span>

          </h1>


          {/* ROTATING ROLE */}

          <div
            className="hero-role hero-rise"
            style={delay(4)}
          >

            <span className="hero-role-line"></span>

            <div className="role-window">

              <ul>

                {[
                  ...ROLES,
                  ROLES[0]
                ].map(
                  (role, index) => (

                    <li key={index}>
                      {role}
                    </li>

                  )
                )}

              </ul>

            </div>

          </div>


          <p
            className="hero-description hero-rise"
            style={delay(5)}
          >
            I build responsive websites, web applications
            and practical digital solutions for businesses,
            teams and real-world users.
          </p>


          {/* ACTIONS */}

          <div
            className="hero-actions hero-rise"
            style={delay(6)}
          >

            <a
              href="#projects"
              className="hero-button-primary"
            >
              View my work
              <span>↘</span>
            </a>


            <a
              href={LINKS.resume}
              download
              className="hero-button-secondary"
            >
              Download resume
            </a>

          </div>


          <div
            className="hero-social hero-rise"
            style={delay(7)}
          >

            <span>
              FIND ME
            </span>

            <GitHubLink />

          </div>

        </div>


        {/* RIGHT */}

        <div className="hero-visual">

          <div className="hero-image-glow"></div>


          <div className="hero-image-frame">

            <img
              src="/images/azmie-profile.png"
              alt="Muhammad Azmie Danial"
            />

            <div className="hero-image-shade"></div>


            <div className="hero-image-index">
              01
            </div>

          </div>


          <div
            className="hero-tech-chip hero-rise"
            style={delay(8)}
          >

            <small>
              TECH STACK
            </small>

            <strong>
              React · Laravel · MySQL
            </strong>

          </div>

        </div>

      </div>


      {/* BOTTOM INFO BAR */}

      <div
        className="hero-bottom hero-rise"
        style={delay(9)}
      >

        <div>

          <small>
            CURRENT FOCUS
          </small>

          <strong>
            Software & Web Development
          </strong>

        </div>


        <div>

          <small>
            FEATURED PROJECT
          </small>

          <strong>
            Power Sphere AI
          </strong>

        </div>


        <div>

          <small>
            RECOGNITION
          </small>

          <strong>
            iCoVEx 2026 · Overall Champion
          </strong>

        </div>


        <a
          href="#about"
          className="hero-scroll"
          aria-label="Scroll to About"
        >

          <span></span>

        </a>

      </div>


      {/* MOVING TEXT */}

      <div className="hero-ticker">

        <div className="hero-ticker-track">

          <span>
            SOFTWARE DEVELOPMENT
          </span>

          <i>✦</i>

          <span>
            WEB DEVELOPMENT
          </span>

          <i>✦</i>

          <span>
            FREELANCE PROJECTS
          </span>

          <i>✦</i>

          <span>
            BUSINESS SOLUTIONS
          </span>

          <i>✦</i>

          <span>
            WEB APPLICATIONS
          </span>

          <i>✦</i>

        </div>

      </div>

    </section>
  )
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <main className="portfolio">

      <CursorGlow />

      <Navbar />

      <Hero />


      <Reveal>
        <Aboutme />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Achievements />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

    </main>
  )
}

export default App