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
<a
        href="mailto:yashbhadane483@gmail.com?subject=Resume%20Request"
        className="resume-btn"
      >
        Request Resume
      </a>
    </section>
  );
};

export default Resume;
