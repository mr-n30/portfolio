import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-bg font-sans">
      <BackgroundGrid />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
