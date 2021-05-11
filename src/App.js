import './App.css';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import LandingPage from './sections/LandingPage';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ScrollToTopButton />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
