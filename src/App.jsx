import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import LanguageShowcase from './components/LanguageShowcase';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import CertificatesDetail from './components/CertificatesDetail';
import HobbiesDetail from './components/HobbiesDetail';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'certificates', 'hobbies'

  const showCertificates = () => setCurrentView('certificates');
  const showHobbies = () => setCurrentView('hobbies');
  const showHome = () => setCurrentView('home');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {currentView === 'home' && (
        <>
          <Navigation />
          <Home />
          <About onShowCertificates={showCertificates} onShowHobbies={showHobbies} />
          <LanguageShowcase />
          <ProjectShowcase />
          <Contact />
        </>
      )}
      {currentView === 'certificates' && <CertificatesDetail onBack={showHome} />}
      {currentView === 'hobbies' && <HobbiesDetail onBack={showHome} />}
    </div>
  );
}

export default App;