// src/App.js
import React, { useState } from 'react';
import './App.css';
import TypingEffect from './effect/TypingEffect';
import profileImage from './img/jimwan.jpg';
import Modal from './effect/Modal';
import ExperienceLightbox from './effect/ExperienceLightbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { WORK_EXPERIENCE_TILES } from './content/workExperience';
import { CERTIFICATION_TILES } from './content/certification';
import { EDUCATION_TILES } from './content/education';

const SKILL_TILES = [
  { title: 'Language', text: '中文母語, Proficient in English, 普通话, Lire le français de base' },
  { title: 'Web Technology', text: 'React / Firebase / Python' },
  { title: 'Database', text: 'SAS / Tableau' },
  { title: 'Machine Learning & AI', text: 'Understanding machine learning concepts and AI applications' },
  { title: 'Office', text: 'Extreme Proficient in Excel, Type speed: 60 wpm (Both Chinese and English)' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="profile-block">
        <img src={profileImage} alt="Jim Wan" className="profile-icon" />
        <div className="profile-details">
          <div className="profile-name">Jim Wan</div>
          <div className="profile-motto">"Strive for progress, and perfection in all likelihood."</div>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="main-nav site-nav">
      <ul>
        <li className="active"><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
        <li><a href="#experiences" onClick={() => handleScroll('experiences')}>Experiences</a></li>
        <li><a href="#cert" onClick={() => handleScroll('cert')}>Professional Certification</a></li>
        <li><a href="#skills" onClick={() => handleScroll('skills')}>Skills</a></li>
        <li><a href="#Education" onClick={() => handleScroll('Education')}>Education</a></li>
      </ul>
    </nav>
  );
}

function Introduction() {

  return (
    <section id="about" className="content-section">
      <div>
        <h1 className="section-heading">Who am I?</h1>
        <Modal content="This is how fast I type. People with effieiciency mindset value time">
          <TypingEffect text="This is Jim Wan. Jim has a passion in data and finance." speed={30} className='quote' loop={true} />
        </Modal >
      </div>
    </section>
  );
}

function WorkExperience() {
  const [openId, setOpenId] = useState(null);
  const active = WORK_EXPERIENCE_TILES.find((t) => t.id === openId);

  return (
    <section id="experiences" className="content-section experience-section">
      <h1 className="section-heading">Work Experiences</h1>
      <ul className="tilesWrap">
        {WORK_EXPERIENCE_TILES.map((tile) => (
          <li key={tile.id}>
            <h3>{tile.title}</h3>
            <p className="tile-meta">{tile.period} · {tile.role}</p>
            <p className="tile-teaser">{tile.teaser}</p>
            <button
              type="button"
              className="tile-readmore-btn"
              onClick={() => setOpenId(tile.id)}
            >
              Read more
            </button>
          </li>
        ))}
      </ul>
      <ExperienceLightbox
        isOpen={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ''}
        period={active?.period ?? ''}
        role={active?.role ?? ''}
        items={active?.items ?? []}
      />
    </section>
  );
}

function Certification() {
  const [openId, setOpenId] = useState(null);
  const active = CERTIFICATION_TILES.find((t) => t.id === openId);

  return (
    <section id="cert" className="content-section certification-section">
      <h1 className="section-heading">Certification</h1>
      <ul className="tilesWrap">
        {CERTIFICATION_TILES.map((tile) => (
          <li key={tile.id}>
            <h3>{tile.title}</h3>
            <p className="tile-meta">{tile.metaLine}</p>
            <p className="tile-teaser">{tile.teaser}</p>
            <button
              type="button"
              className="tile-readmore-btn"
              onClick={() => setOpenId(tile.id)}
            >
              Read more
            </button>
          </li>
        ))}
      </ul>
      <ExperienceLightbox
        isOpen={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ''}
        metaLine={active?.metaLine}
        items={active?.items ?? []}
        externalUrl={active?.externalUrl}
        externalLabel={active?.externalLabel}
      />
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section skills-section">
      <h1 className="section-heading">Skills</h1>
      <ul className="tilesWrap">
        {SKILL_TILES.map((tile) => (
          <li key={tile.title}>
            <h3>{tile.title}</h3>
            <p>{tile.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  const [openId, setOpenId] = useState(null);
  const active = EDUCATION_TILES.find((t) => t.id === openId);

  return (
    <section id="Education" className="content-section education-section">
      <h1 className="section-heading">Education</h1>
      <ul className="tilesWrap">
        {EDUCATION_TILES.map((tile) => (
          <li key={tile.id}>
            <h3>{tile.title}</h3>
            <p className="tile-meta">{tile.metaLine}</p>
            <p className="tile-teaser">{tile.teaser}</p>
            <button
              type="button"
              className="tile-readmore-btn"
              onClick={() => setOpenId(tile.id)}
            >
              Read more
            </button>
          </li>
        ))}
      </ul>
      <ExperienceLightbox
        isOpen={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ''}
        metaLine={active?.metaLine}
        items={active?.items ?? []}
      />
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.linkedin.com/in/jim-wan-4267532b7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn Profile
        </a>
        <span> | </span>
        <a href="mailto:esoteric.elf@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email Me
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Introduction />
      <WorkExperience />
      <Certification />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;