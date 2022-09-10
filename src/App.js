import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate} from "react-router-dom";

import NavbarMain from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage"
import Contact from "./Pages/Contact"
import About from "./Pages/AboutMe"
import Blog from "./Pages/Blog"

import Footer from "./Components/Footer/Footer"

function App() {

  return (

    <div>

      {/* Navbar */}
      <header>
        <NavbarMain /> 
      </header>

      {/* Main section */}
      <main>

        {/* React-router that renders all different pages */}
        <Routes>
          <Route path="/*" element={<Navigate replace to="homepage" />} />
          
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element ={<Blog />} />

        </Routes>
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
