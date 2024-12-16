import React from "react";
import Snowfall from 'react-snowfall';
import Confetti from "react-confetti";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

export const App = () => {
  let date = new Date(), currentMonth = date.getMonth(), currentDay = date.getDate();
  const snowflakeCount = currentMonth === 11 ? currentDay * 7 : 0;
  const windSpeed = currentDay === 24 ? [5, 10] : [0, 1];

  return (
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
        {snowflakeCount > 0 && (
          <div className="snowflakes">
            <Snowfall wind={windSpeed} speed={[0, 2]} snowflakeCount={snowflakeCount} />
          </div>
        )}
        {((currentMonth === 11 && currentDay === 31) || (currentMonth === 0 && currentDay === 1)) && (
          <div className="snowflakes">
            <Confetti width={100} height={100} />
          </div>
        )}
      </div>
    </Router>
  )
};