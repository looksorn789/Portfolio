import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/Resume" element={<Home />} /> {/* Default Home Page */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
