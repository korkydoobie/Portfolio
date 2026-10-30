import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import FluxPhoto from './components/FluxPhoto';

const certifications = [
  { title: "Cisco Certified Support Technician Networking", year: "2025", image: "/assets/images/cisco-ccst.png", verifyUrl: "https://www.credly.com/badges/bb29fd90-74ef-456e-8f9f-1beb0d0c455f/public_url" },
  { title: "PMI Project Management Ready", year: "2026", image: "/assets/images/pmi-ready.png", verifyUrl: "https://www.credly.com/badges/a239bacb-7a08-4046-9b38-3f65e200de07/public_url" },
  { title: "Information Technology Specialist in Python", year: "2025", image: "/assets/images/it-specialist-python.png", verifyUrl: "https://www.credly.com/badges/70f300f0-ffcc-4d11-9f4f-aa48211fcee0/public_url" },
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
      <a className="cert-verify" href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${certificate.title} (opens in a new tab)`}>Verify <LinkArrow /></a>
    </li>
  );
}
function LinkArrow({ up = false }: { up?: boolean }) {
  return <svg className="link-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
    <path d={up ? "M8 13V3M3 8l5-5 5 5" : "M3 13L13 3M4 3h9v9"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

const projects = [
  {
    name: 'SafeZone PH', category: 'WEB & MOBILE APPLICATION',
    role: 'Frontend Developer, API Integration',
    description: "A web and mobile GIS-based disaster incident reporting and response system with geofencing alerts for Santa Maria, Bulacan MDRRMO",
    image: '/assets/images/safezone-preview.png',
    imageAlt: 'SafeZonePH dashboard showing the Santa Maria map, barangay boundaries, and incident reporting controls',
    url: 'https://safezoneph.com',
  },
  {
    name: 'Brew-Ha', category: 'WEB APPLICATION',
    role: 'Frontend Developer, Database Designer',
    description: 'An E-commerce website designed to serve customers coffee and food.',
    image: '/assets/images/brew-ha.png', imageAlt: '', url: '',
  },
  {
    name: 'Oppo', category: 'WEB APPLICATION',
    role: 'Database Designer',
    description: 'A SIS-integrated internship recommendation and placement system that connects student information and internship opportunities to recommend suitable placements based on students\' qualifications, specialization, and eligibility.',
    image: '/assets/images/oppo.png', imageAlt: '', url: '',
  },
];

function ProjectShowcase() {
  const [index, setIndex] = React.useState(0);
  const project = projects[index];
  return <div className="project-showcase">
    <div aria-live="polite" aria-atomic="true">
      <article className="project-feature">
        <div className="project-art project-preview">
          {project.image ? <img src={project.image} alt={project.imageAlt} width="1919" height="944" loading="lazy" /> :
            <div className="project-placeholder">Project preview coming soon</div>}
        </div>
        <div className="project-copy">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <p className="eyebrow">{project.category}</p><h3>{project.url ? <a className="project-title-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (opens in a new tab)`}>{project.name} <LinkArrow /></a> : project.name}</h3>
          <p className="project-description">{project.description}</p>
          <dl className="project-role"><dt>My role:</dt><dd>{project.role}</dd></dl>

        </div>
      </article>
    </div>
    <nav className="project-navigation" aria-label="Project navigation">
      <button className="outline-link" type="button" onClick={() => setIndex(value => value - 1)} disabled={index === 0}><span aria-hidden="true">&larr;</span> Previous</button>
      <span className="project-count">{index + 1} / {projects.length}</span>
      <button className="outline-link" type="button" onClick={() => setIndex(value => value + 1)} disabled={index === projects.length - 1}>Next <span aria-hidden="true">&rarr;</span></button>
    </nav>
  </div>;
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
          <div className="section-heading"><div><p className="eyebrow">A SELECTION OF MY WORK</p><h2 id="projects-title">My Projects</h2></div><span className="small-note">FEATURED WORK</span></div>
          <ProjectShowcase />
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
