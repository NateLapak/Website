import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate} from "react-router-dom";

import NavbarMain from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage"
import Contact from "./Pages/Contact"
import About from "./Pages/AboutMe"
import Projects from "./Pages/Projects"

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Projects" element ={<Projects />} />

        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
