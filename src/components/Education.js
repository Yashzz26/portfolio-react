import React from "react";

const Education = () => {
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
    <section id="education">
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <b>{item.degree}</b> — {item.school && `${item.school}, `}
            {item.year}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
