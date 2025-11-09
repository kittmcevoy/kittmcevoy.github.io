// import Registration from "./Registration.jsx";
import HomePage from "./HomePage.jsx";
import Projects from './Projects.jsx';
// import Committee from "./Committee.jsx";
// import NationalLeague from "./NationalLeague.jsx";
// import SocialLeague from "./SocialLeague.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/committee" element={<Committee />} /> */}
      {/* <Route path="/national_league" element={<NationalLeague />} /> */}
      {/* <Route path="/social_league" element={<SocialLeague />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
