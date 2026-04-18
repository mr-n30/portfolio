import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
