import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ThreeScene from "./components/ThreeScene";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="backgroud">
        <ThreeScene />
        <div className="page-wrapper">



          <div className="title">
            <h1>Mason</h1>
            <p className="substitle">Developer & Designer</p>
            <div className="nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>


            </div>

          </div>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
