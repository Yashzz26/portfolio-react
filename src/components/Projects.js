import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Chronix - E-Commerce Watch Store",
      description:
        "A sleek and responsive e-commerce front-end for a luxury watch store. Features a modern UI, detailed product pages, a functional shopping cart, and a simulated checkout process, all built with vanilla HTML, CSS, and JavaScript.",
      link: "https://yashzz26.github.io/E-Commerce-Web-Store-Watches-/",
    },
    {
      title: "Dynamic Weather App",
      description:
        "A user-friendly weather application that provides real-time weather data using an external API. It features a clean interface, hourly/daily forecasts, dynamic weather icons, and details like humidity and wind speed.",
      link: "https://yashzz26.github.io/Weather-App/",
    },
    {
      title: "Interactive Recipe Card",
      description:
        "A visually appealing and responsive recipe card website. This project showcases strong CSS skills with a focus on layout, hover effects, and a clean presentation of cooking instructions, ingredients, and nutritional information.",
      link: "http://guileless-haupia-69e207.netlify.app",
    },
    {
      title: "SmartSpend - Expense Tracker App",
      description:
        "A practical front-end for an expense tracking application. Users can log expenses, categorize them, and view a summary of their spending. This project demonstrates DOM manipulation and data handling with JavaScript.",
      link: "https://yashzz26.github.io/Budget-Expense-Tracker/",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
