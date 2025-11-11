import { useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import SEO from './components/SEO';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import AboutSection from './components/AboutSection';
import MethodologySection from './components/MethodologySection';
import CoursesSection from './components/CoursesSection';
import ApproachSection from './components/ApproachSection';
import Footer from './components/Footer';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
  }, [language]);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <AdvantagesSection />
        <AboutSection />
        <MethodologySection />
        <CoursesSection />
        <ApproachSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
