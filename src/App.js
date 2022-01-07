import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate} from "react-router-dom";

import NavbarMain from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage"
import Education from "./Pages/Education"
import Contact from "./Pages/Contact"
import Projects from "./Pages/ProjectPages/Main/Projects"

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
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/projects/*" element={<Projects />} />
          
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>


  );
}

export default App;
