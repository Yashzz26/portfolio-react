import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="resume"
      ref={ref}
      className={`scroll-hidden from-scale ${isVisible ? "scroll-visible" : ""}`}>
      <h2>Resume</h2>
      <a href="#" className="resume-btn" download>
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
