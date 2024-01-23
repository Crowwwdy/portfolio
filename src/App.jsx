import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacs from "./pages/Contacs";
import About_project from "./pages/About project";
import Footer from "./components/footer/footer";


import ScrollToTop from "./utils/scrollToTop";


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<About_project />} />
          <Route path="/contacts" element={<Contacs />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
