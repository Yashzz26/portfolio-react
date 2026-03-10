import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const phrases = [
  "Aspiring Full Stack Developer",
  "MERN Stack Developer",
  "Creative Problem Solver",
  "Tech Enthusiast",
];

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && letterIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setLetterIndex((prev) => prev + 1);
      }, 60);
    } else if (isDeleting && letterIndex > 0) {
      timeout = setTimeout(() => {
        setLetterIndex((prev) => prev - 1);
      }, 30);
    } else if (!isDeleting && letterIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && letterIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, phraseIndex]);

  return (
    <header className="header-animated-bg">
      <div className="theme-switch-wrapper">
        <div 
          className={`theme-switch ${isDarkMode ? "dark" : "light"}`} 
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="theme-orb">
            <div className="crater crater-1"></div>
            <div className="crater crater-2"></div>
            <div className="crater crater-3"></div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`ray ray-${i + 1}`}></div>
            ))}
          </div>
          <div className="theme-decorations">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <img
          src={process.env.PUBLIC_URL + "/photo.jpg"}
          alt="Yash Bhadane"
          className="profile-pic"
        />
      </div>
      <h1>Yash Bhadane</h1>
      <p>
        {phrases[phraseIndex].substring(0, letterIndex)}
        <span className="cursor">|</span>
      </p>
    </header>
  );
};

export default Header;
