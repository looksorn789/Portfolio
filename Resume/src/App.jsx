import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
