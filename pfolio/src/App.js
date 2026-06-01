import React, { useState } from "react";
import "./App.css";

const IMG_PROFILE     = "/images/profile.jpg";
const IMG_ARROW       = "/images/arrow.svg";
const IMG_ARROW2      = "/images/arrow2.svg";
const IMG_DIGITIZING  = "/images/digitizing.png";
const IMG_LANDING     = "/images/landing.png";
const IMG_CREDIT_HIVE = "/images/credit-hive.png";
const IMG_WEBSITE     = "/images/website.png";
const IMG_MOBILE_1    = "/images/mobile-1.png";
const IMG_MOBILE_2    = "/images/mobile-2.png";
const IMG_MOBILE_3    = "/images/mobile-3.png";
const IMG_SEND        = "/images/icon-send.svg";
const IMG_PERSON      = "/images/icon-person.svg";
const IMG_CALL        = "/images/icon-call.svg";
const IMG_EMAIL       = "/images/icon-email.svg";
const IMG_MESSAGE     = "/images/icon-message.svg";

function ViewBtn({ href, label = "View Project", arrow = IMG_ARROW }) {
  return (
    <a className="btn-primary" href={href || "#"} target={href ? "_blank" : undefined} rel="noreferrer">
      {label}
      <img src={arrow} alt="" className="btn-arrow" />
    </a>
  );
}

function Divider() {
  return <div className="section-divider" />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <span className="navbar-logo">DT</span>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          <a href="#home"        className="navbar-link active" onClick={closeMenu}>Home</a>
          <a href="#digitizing"  className="navbar-link"        onClick={closeMenu}>Digitizing</a>
          <a href="#landing"     className="navbar-link"        onClick={closeMenu}>Landing page</a>
          <a href="#credit-hive" className="navbar-link"        onClick={closeMenu}>Credit Hive</a>
          <a href="#enquiry"     className="navbar-link"        onClick={closeMenu}>Enquiry form</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-photo">
            <img src={IMG_PROFILE} alt="Dipendra Timalsina" />
          </div>
          <div className="hero-text">
            <h1 className="hero-hello">Hello!</h1>
            <div className="hero-name">
              <p>I'm Dipendra, a</p>
              <p>UX/UI designer</p>
              <p>based in Nepal</p>
            </div>
            <p className="hero-experience">9+ years experience</p>
            <div className="hero-links">
              <a
                href="https://www.behance.net/dipendratimalsina"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
              <a
                href="https://www.linkedin.com/in/dipendra-timalsina-a360b05a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Digitizing ── */}
      <Divider />
      <section className="project-section" id="digitizing">
        <div className="project-inner">
          <div className="project-info">
            <span className="project-category">Product for digitizing the process</span>
            <h2 className="project-title">Digitizing</h2>
            <p className="project-desc">
              This is the project for digitizing the loan assessment process
            </p>
            <ViewBtn label="View Project" />
          </div>
          <div className="project-preview">
            <img
              src={IMG_DIGITIZING}
              alt="Digitizing project preview"
              className="project-image"
            />
          </div>
        </div>
      </section>

      {/* ── Landing Pages ── */}
      <Divider />
      <section className="project-section" id="landing">
        <div className="project-inner">
          <div className="project-info">
            <span className="project-category">Marketing website redesign</span>
            <h2 className="project-title">Landing<br />Pages</h2>
            <p className="project-desc">
              Landing pages designed for marketing and updating design and improving SEO.
            </p>
            <ViewBtn label="View Project" />
          </div>
          <div className="project-preview landing-preview">
            <img
              src={IMG_LANDING}
              alt="Landing pages preview"
              className="landing-main"
            />
          </div>
        </div>
      </section>

      {/* ── Credit Hive ── */}
      <Divider />
      <section className="project-section" id="credit-hive">
        <div className="project-inner">
          <div className="project-info">
            <span className="project-category">Tool</span>
            <h2 className="project-title">Credit hive</h2>
            <p className="project-desc">
              A tool for collecting, updating and sharing information for increasing team
              effectiveness.
            </p>
            <ViewBtn label="View Case Study" arrow={IMG_ARROW} />
          </div>
          <div className="project-preview">
            <img
              src={IMG_CREDIT_HIVE}
              alt="Credit Hive preview"
              className="project-image"
              style={{ border: "1px solid #777" }}
            />
          </div>
        </div>
      </section>

      {/* ── Form CRO ── */}
      <Divider />
      <section className="project-section" id="enquiry">
        <div className="project-inner">
          <div className="project-info">
            <span className="project-category">Testing</span>
            <h2 className="project-title">Form CRO</h2>
            <p className="project-desc">
              Optimizing the design of the form by using CRO and incremental design.
            </p>
            <ViewBtn label="View Case Study" arrow={IMG_ARROW} />
          </div>

          {/* Enquiry form card — showcased as the project output */}
          <div className="project-preview">
            <div className="enquiry-card">
              <h3>Complete the form below to get a call back within 24 hours.</h3>
              <p className="sub-text">
                Information provided is for assessment purposes only and no enquiry is made on
                your credit file.
              </p>

              <div className="form-field">
                <label>First Name</label>
                <div className="input-wrap">
                  <img src={IMG_PERSON} alt="" className="input-icon" />
                  <input type="text" placeholder="e.g. John Doe" />
                </div>
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <div className="input-wrap">
                  <img src={IMG_CALL} alt="" className="input-icon" />
                  <input type="tel" placeholder="xxxx-xxxx-xxxx" />
                </div>
              </div>

              <div className="form-field">
                <label>Email Address</label>
                <div className="input-wrap">
                  <img src={IMG_EMAIL} alt="" className="input-icon" />
                  <input type="email" placeholder="someone@example.com" />
                </div>
              </div>

              <div className="form-field">
                <label>Anything else you want us to know?</label>
                <div className="input-wrap textarea-wrap">
                  <img src={IMG_MESSAGE} alt="" className="input-icon" />
                  <textarea placeholder="Type your message here." />
                </div>
              </div>

              <button className="btn-submit">
                Submit
                <img src={IMG_SEND} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Website Redesign ── */}
      <Divider />
      <section className="project-section">
        <div className="project-inner">
          <div className="project-info">
            <span className="project-category">Tool</span>
            <h2 className="project-title">Website<br />redesign</h2>
            <p className="project-desc">
              Redesign the website based on new brand strategy.
            </p>
            <ViewBtn label="View Case Study" arrow={IMG_ARROW2} />
          </div>
          <div className="project-preview">
            <img
              src={IMG_WEBSITE}
              alt="Website redesign preview"
              className="project-image"
            />
          </div>
        </div>
      </section>

      {/* ── Mobile App Design ── */}
      <Divider />
      <section className="project-section">
        <div className="project-inner">
          <div className="project-info">
            <h2 className="project-title">Mobile app<br />Design</h2>
            <p className="project-desc">Design the co travelling app</p>
            <ViewBtn label="View Case Study" arrow={IMG_ARROW} />
          </div>
          <div className="project-preview">
            <div className="mobile-preview">
              <img src={IMG_MOBILE_1} alt="Mobile app screen 1" />
              <img src={IMG_MOBILE_2} alt="Mobile app screen 2" />
              <img src={IMG_MOBILE_3} alt="Mobile app screen 3" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-divider" />
        <p className="footer-text">👏 Thankyou</p>
      </footer>
    </div>
  );
}
