import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Skills />
        <GitHubStats />
        <Education />
        <Projects />
        <Resume />
        <Contact />
        <MusicPlayer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
