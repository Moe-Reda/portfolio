import './App.css';
import Home from './pages';
import About from './components/AboutSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </Router>
  );
}

export default App;
