import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      school: "DYPCOE",
      year: "2024–2028",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "",
      year: "2024, 80%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "",
      year: "2022, 80%",
    },
    { degree: "First Year CGPA:", school: "", year: "9.05" },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className={`scroll-hidden from-right ${isVisible ? "scroll-visible" : ""}`}>
      <h2>Education</h2>
      <ul className="education-list">
        {education.map((item, index) => (
          <li key={index} className="education-card">
            <div className="education-degree">{item.degree}</div>
            <div className="education-meta">
              {item.school && `${item.school}  ·  `}
              {item.year}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
