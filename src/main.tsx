import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import FluxPhoto from './components/FluxPhoto';

const certifications = [
  { title: "Cisco Certified Support Technician Networking", year: "2025", image: "/assets/images/cisco-ccst.png" },
  { title: "PMI Project Management Ready", year: "2026", image: "/assets/images/pmi-ready.png" },
  { title: "Information Technology Specialist in Python", year: "2025", image: "/assets/images/it-specialist-python.png" },
];

function CertificationBadge({ certificate }: { certificate: (typeof certifications)[number] }) {
  const [imageFailed, setImageFailed] = React.useState(false);
  return (
    <li className="cert-card">
      <div className="cert-image">
        {imageFailed ? <span className="cert-missing">Badge image coming soon</span> :
          <img src={certificate.image} alt={`${certificate.title} badge`} loading="lazy" onError={() => setImageFailed(true)} />}
      </div>
      <h3>{certificate.title}</h3>
      <p className="cert-year">{certificate.year}</p>
    </li>
  );
}
function LinkArrow({ up = false }: { up?: boolean }) {
  return <svg className="link-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
    <path d={up ? "M8 13V3M3 8l5-5 5 5" : "M3 13L13 3M4 3h9v9"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

function App() {
  return (
    <>
      <main>
        <header className="site-header">
          <a className="wordmark" href="#home">K. Tan<span> / PORTFOLIO</span></a>
          <nav aria-label="Main navigation"><a href="#projects">My work</a><a href="#background">About me</a><a href="#contact">Contact</a></nav>
        </header>
        <section id="home" className="profile" aria-labelledby="name">
          <FluxPhoto src="/assets/images/1x1-photo.jpeg" alt="Kirk Griffin F. Tan" />
          <div className="introduction">
            <p className="eyebrow">A PERSONAL INTRODUCTION</p>
            <h1 id="name">Hello,<br /><em>I'm Kirk Griffin</em><br />F. Tan.</h1>
            <p className="summary">Motivated Information Technology student with Specialization in Web and Mobile Technology, bringing knowledge of programming, database management, and UI/UX design. Uses creative problem-solving and strong communication to contribute to development tasks, while continuing to learn modern technologies and industry practice.</p>
            <div className="contact" aria-label="Social profiles and contact">
              <a className="contact-item" href="https://github.com/korkydoobie" target="_blank" rel="noopener noreferrer">GitHub <LinkArrow /></a>
              <a className="contact-item" href="https://www.linkedin.com/in/kirk-griffin-tan-4747b1385/" target="_blank" rel="noopener noreferrer">LinkedIn <LinkArrow /></a>
            </div>
            <p className="contact-note">kirktan.dev@gmail.com</p>
          </div>
        </section>
        <section id="projects" className="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><p className="eyebrow">A SELECTION OF MY WORK</p><h2 id="projects-title">My Projects</h2></div><span className="small-note">01 / FEATURED WORK</span></div>
          <article className="project-feature">
            <a className="project-art" href="https://safezoneph.com" target="_blank" rel="noopener noreferrer" aria-label="Visit SafeZonePH">
              <div className="map-lines" aria-hidden="true"><span className="map-pin">+</span></div>
              <span className="art-label">WEB & MOBILE / GIS</span><span className="project-monogram">SafeZone<span>PH</span></span><span className="art-bottom">INCIDENT REPORTING & RESPONSE <LinkArrow /></span>
            </a>
            <div className="project-copy"><span className="project-index">01</span><p className="eyebrow">WEB & MOBILE APPLICATION</p><h3>SafeZonePH</h3><p className="project-description">A web and mobile GIS-based disaster incident reporting and response system with geofencing alerts for Santa Maria, Bulacan MDRRMO</p><a className="outline-link" href="https://safezoneph.com" target="_blank" rel="noopener noreferrer">Explore project <LinkArrow /></a></div>
          </article>
        </section>
        <div className="sections">
          <section aria-labelledby="skills"><span className="section-number">01</span><h2 id="skills">Skills</h2><ul className="skills-list">
            <li>Programming languages: HTML, CSS, Java, JavaScript, TypeScript, Kotlin, Python, PHP, C++, Swift</li>
            <li>Database management: SQL</li>
            <li>API integration</li>
            <li>Web development</li>
            <li>UI/UX design</li>
            <li>GitHub proficiency</li>
          </ul></section>
          <section aria-labelledby="background"><span className="section-number">02</span><h2 id="background">Background</h2>
            <p><strong>Education</strong></p>
            <p>FEU Institute of Technology &middot; 2027</p>
            <p className="education-degree">Bachelor of Science in Information Technology with Specialization in Web and Mobile Technology</p>
          </section>

        </div>
        <section className="certifications" aria-labelledby="certifications-title">
          <span className="section-number">04</span>
          <h2 id="certifications-title">Certifications</h2>
          <ul className="cert-grid">
            {certifications.map((certificate) => <CertificationBadge key={certificate.image} certificate={certificate} />)}
          </ul>
        </section>
        <section id="contact" className="contact-section"><p className="eyebrow">INTERESTED IN ME?</p><h2>Let's start a conversation.</h2><a className="outline-link" href="mailto:kirktan.dev@gmail.com">Get in touch <LinkArrow /></a></section>
        <footer><span>Kirk Griffin F. Tan</span><a href="#home">Back to top <LinkArrow up /></a></footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
