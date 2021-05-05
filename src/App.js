import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import LandingPage from './sections/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
