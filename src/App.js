import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate, Redirect} from "react-router-dom";

import NavbarMain from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage"
import Education from "./Pages/Education"
import Contact from "./Pages/Contact"
import Projects from "./Pages/ProjectPages/Main/Projects"

import AIandML from "./Pages/ProjectPages/Examples/AIandML"
import GameDev from './Pages/ProjectPages/Examples/GameDev';
import IOSandWeb from './Pages/ProjectPages/Examples/IOS-Web';
import Miscellaneous from './Pages/ProjectPages/Examples/Miscellaneous';

import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div>
      <header>
        <NavbarMain /> 
      </header>

      <main>
        <Routes>
          <Route path="" element={<Navigate replace to="homepage" />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/game-dev" element={<GameDev />} />
          <Route path="projects/AI-ML" element={<AIandML />} />
          <Route path="projects/IOS-web" element={<IOSandWeb />} />
          <Route path="projects/Miscellaneous" element={<Miscellaneous />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
