import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import LandingPage from './sections/LandingPage';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
}

export default App;
