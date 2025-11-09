import HomePage from "./HomePage.jsx";
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>

  );
}

export default App;
