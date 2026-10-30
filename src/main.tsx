import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

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
function App() {
  return (
    <main>
      <section id="home" className="profile" aria-labelledby="name">
        <div className="portrait"><img className="profile-photo" src="/assets/images/pokecutweb_1793283191874.jpg" alt="Kirk Griffin F. Tan" width="320" height="320" /></div>
        <div className="introduction">
          <p className="eyebrow">HELLO, I'M</p>
          <h1 id="name">Kirk Griffin <span>F. Tan</span></h1>
          <p className="summary">Motivated Information Technology student with Specialization in Web and Mobile Technology, bringing knowledge of programming, database management, and UI/UX design. Uses creative problem-solving and strong communication to contribute to development tasks, while continuing to learn modern technologies and industry practice.</p>
          <div className="contact" aria-label="Social profiles and contact">
            <a className="contact-item" href="https://github.com/korkydoobie" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="contact-item" href="https://www.linkedin.com/in/kirk-griffin-tan-4747b1385/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <p className="contact-note">kirktan.dev@gmail.com</p>
        </div>
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
          <p>FEU Institute of Technology · 2027</p>
          <p className="education-degree">Bachelor of Science in Information Technology with Specialization in Web and Mobile Technology</p>
        </section>
        <section aria-labelledby="projects"><span className="section-number">03</span><h2 id="projects">Projects</h2><p><a className="contact-item" href="https://safezoneph.com" target="_blank" rel="noopener noreferrer">SafeZonePH <span aria-hidden="true">↗</span></a></p></section>
      </div>
      <section className="certifications" aria-labelledby="certifications-title">
        <span className="section-number">04</span>
        <h2 id="certifications-title">Certifications</h2>
        <ul className="cert-grid">
          {certifications.map((certificate) => <CertificationBadge key={certificate.image} certificate={certificate} />)}
        </ul>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
