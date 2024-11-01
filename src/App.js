// src/App.js
import React from 'react';
import './App.css';
import TypingEffect from './effect/TypingEffect';
import profileImage from './img/jimwan.jpg';
import Modal from './effect/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header>
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
    <nav className="main-nav">
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
    <section id="about">
      <div>
        <h1>Who am I?</h1>
        <Modal content="This is how fast I type. People with effieiciency mindset value time">
          <TypingEffect text="This is Jim Wan. Jim has a passion in data and finance." speed={30} className='quote' loop={true} />
        </Modal >
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="experiences">
      <h1>Work Experiences</h1>
      <ul>
        <li>2024-present: DBS - Senior Officer (Licensed), Consumer Banking</li>
        <li>2023-2024: BOCHK - CSO (Details)</li>
        <li>2018-2023: Beulah (HK) Ltd. - Assistant Manager</li>
        <li>2009-2018: Tutornotes - General Manager</li>
      </ul>
    </section>
  );
}

function Certification() {
  return (
    <section id="cert">
      <h1>Certification</h1>
      <ul>
        <li>IIQE - Paper I II III</li>
        <li>LE - paper I VII VIII</li>
        <li><a href="https://www.credly.com/badges/7db6ff85-3e8a-425c-ab89-3e82c323ab81/public_url" target="_blank" rel="noreferrer">PCAP - Certified Associate in Python Programming</a></li>
        <li><a href="https://www.credly.com/badges/cc6e0f5d-2382-4613-9017-7ac52ce8636f/public_url" target="_blank" rel="noreferrer">SAS Certified Associate Programming Fundamentals Using SAS 9.4</a></li>
        <li><a href="https://www.credly.com/badges/9612a01e-4f6a-490e-9883-bd6f3e391692/public_url" target="_blank" rel="noreferrer">SAS Certified Specialist Base Programming Using SAS 9.4 certificate</a></li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <ul>
        <li>Language: 中文母語, Proficient in English, 普通话, Lire le français de base</li>
        <li>Web Technology: React/ Firebase/Python</li>
        <li>Database: Sas/ Tableau</li>
        <li>Office: Extreme Proficient in Excel, Type speed: 60 wpm (Both Chinese and English)</li>
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section id="Education">
      <h1>Education</h1>
      <ul>
        <li>HKU BSc(Hons) (2004)</li>
        <li>HKBU MA (2009)</li>
      </ul>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="www.linkedin.com/in/jim-wan-4267532b7" target="_blank" rel="noopener noreferrer">
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