import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ShapeBlur from "./ShapeBlur";

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
    <header>
      <button
        className="theme-toggle btn btn-outline-primary position-absolute top-0 end-0 m-3"
        onClick={toggleTheme}
        aria-label="Toggle theme">
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <div className="profile-container">
        <div className="shape-blur-wrapper">
          <div
            style={{
              position: "relative",
              height: "390px",
              overflow: "hidden",
              width: "400px",
            }}>
            <ShapeBlur
              variation={1}
              pixelRatioProp={
                typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
              }
              shapeSize={1.3}
              roundness={0.5}
              borderSize={0.05}
              circleSize={0.25}
              circleEdge={1}
            />
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/photo.jpg"}
          alt="Yash Bhadane"
          className="profile-pic"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <h1>Yash Bhadane</h1>
      <p>
        {phrases[phraseIndex].substring(0, letterIndex)}
        <span className="cursor">|</span>
      </p>
      <style>{`
        .cursor {
          display: inline-block;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .theme-toggle {
          font-size: 1.5rem;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-container {
          position: relative;
          display: inline-block;
          margin: 0 auto 20px;
        }
        .shape-blur-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          width: 400px;
          height: 400px;
        }
        .profile-pic {
          position: relative;
          z-index: 1;
          border-radius: 50%;
        }
      `}</style>
    </header>
  );
};

export default Header;
