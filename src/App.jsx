import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Components
import { Background } from "./components/Background";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";

// Projetcs
import { Morse } from "./pages/Projects/Tools/Morse";
import { Binary } from "./pages/Projects/Tools/Binary";

// CSS
import "./assets/styles/index.css";
import "./assets/styles/medias.css";

export const App = () => (
  <Router>
    <div className="text" style={{ transitionDuration: '1s' }}>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/morse" element={<Morse />} />
        <Route path="/projects/binary" element={<Binary />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </div>
  </Router>
);