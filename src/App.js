import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import LandingPage from './sections/LandingPage';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
