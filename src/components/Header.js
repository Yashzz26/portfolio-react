import React, { useState, useEffect } from "react";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const phrases = [
    "Aspiring Front-End Web Developer",
    "Creative Problem Solver",
    "Passionate Coder",
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
  }, [letterIndex, isDeleting, phraseIndex]);

  return (
    <header>
      <img
        src={process.env.PUBLIC_URL + "/photo.jpg"}
        alt="Profile Picture"
        className="profile-pic"
      />
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
      `}</style>
    </header>
  );
};

export default Header;
