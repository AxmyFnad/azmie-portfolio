import './Contact.css'

function ContactIcon({ type }) {
  if (type === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.12 0C5.57 0 .24 5.33.24 11.88c0 2.09.55 4.13 1.59 5.93L.14 24l6.34-1.66a11.86 11.86 0 0 0 5.64 1.43h.01C18.68 23.77 24 18.44 24 11.89c0-3.17-1.23-6.15-3.48-8.41ZM12.13 21.76h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.82 9.82 0 0 1-1.5-5.23c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.44-4.43 9.86-9.88 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.87 8.87 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.35l9 5.4 9-5.4V7H3Zm18 10V9.68l-8.49 5.1a1 1 0 0 1-1.02 0L3 9.68V17h18Z" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.75-3.2a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.25 2h3.26a5.2 5.2 0 0 0 4.24 4.24V9.5a8.42 8.42 0 0 1-4.24-1.14v6.19A7.55 7.55 0 1 1 11 7.08v3.39a4.26 4.26 0 1 0 3.25 4.08V2Z" />
    </svg>
  )
}

const CONTACTS = [
  {
    label: 'WHATSAPP',
    title: 'Freelance Projects',
    value: 'Discuss a website, landing page or custom web application.',
    href: 'https://wa.me/601113100817',
    type: 'whatsapp'
  },
  {
    label: 'EMAIL',
    title: 'Career Opportunities',
    value: 'azmiedanial006@gmail.com',
    href: 'mailto:azmiedanial006@gmail.com',
    type: 'email'
  },
  {
    label: 'GITHUB',
    title: 'Development Work',
    value: 'github.com/AxmyFnad',
    href: 'https://github.com/AxmyFnad',
    type: 'github'
  },
  {
    label: 'INSTAGRAM',
    title: 'Connect',
    value: '@axxdnl',
    href: 'https://www.instagram.com/axxdnl/',
    type: 'instagram'
  },
  {
    label: 'TIKTOK',
    title: 'Social',
    value: '@axmy60',
    href: 'https://www.tiktok.com/@axmy60',
    type: 'tiktok'
  }
]

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-light contact-light-one"></div>
      <div className="contact-light contact-light-two"></div>

      <div className="contact-container">

        <div className="contact-top">
          <div className="contact-index">
            <span>06</span>
            <div></div>
            <p>CONTACT / LET&apos;S WORK TOGETHER</p>
          </div>

          <p className="contact-top-label">
            AVAILABLE FOR OPPORTUNITIES
          </p>
        </div>

        <div className="contact-box">

          <div className="contact-copy">

            <p className="contact-eyebrow">
              CAREER · FREELANCE · COLLABORATION
            </p>

            <h2>
              Let&apos;s build
              <span> something useful.</span>
            </h2>

            <p className="contact-description">
              I&apos;m open to software and web development opportunities,
              as well as freelance projects including business websites,
              landing pages, portfolio sites and custom web applications.
            </p>

            <a
              href="https://wa.me/601113100817"
              target="_blank"
              rel="noreferrer"
              className="contact-main-action"
            >
              Start a conversation
              <span>↗</span>
            </a>

            <div className="contact-note">
              <span className="contact-status-dot"></span>
              <p>
                Share what you need, your preferred timeline and the type
                of website or system you have in mind.
              </p>
            </div>

          </div>

          <div className="contact-cards">

            {CONTACTS.map((item) => (
              <a
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className={`contact-card contact-card-${item.type}`}
                key={item.label}
              >

                <div className="contact-card-icon">
                  <ContactIcon type={item.type} />
                </div>

                <div className="contact-card-content">
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                  <p>{item.value}</p>
                </div>

                <span className="contact-card-arrow">↗</span>

              </a>
            ))}

          </div>

        </div>

        <footer className="portfolio-footer">

          <div className="footer-left">
            <a href="#home" className="footer-logo">
              AZMIE<span>.</span>
            </a>
            <p>Software & Web Developer · Malaysia</p>
          </div>

          <div className="footer-center">
            <span>BUILT WITH REACT · 2026</span>
          </div>

          <a href="#home" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>

        </footer>

      </div>

    </section>
  )
}

export default Contact
