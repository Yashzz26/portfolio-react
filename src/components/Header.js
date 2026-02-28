import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const phrases = [
    "Aspiring Full Stack Developer",
    "MERN Stack Developer",
    "Creative Problem Solver",
    "Tech Enthusiast",
  ];
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
  }, [letterIndex, isDeleting, phraseIndex, phrases]);

  return (
    <header className="header-animated-bg">
      <button
        className="theme-toggle btn btn-outline-primary position-absolute top-0 end-0 m-3"
        onClick={toggleTheme}
        aria-label="Toggle theme">
        {isDarkMode ? "☀️" : "🌙"}
      </button>
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
