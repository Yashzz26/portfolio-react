import React from "react";

const Skills = () => {
  const skills = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "Responsive Web Design",
    "Git & GitHub for Version Control",
    "Web Performance Optimization",
    "Tailwind CSS / Bootstrap",
    "Node.js",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
