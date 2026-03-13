import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Full Stack Villa Booking",
      description:
        "A comprehensive villa booking platform where users can browse available villas, view detailed information, check availability, and make reservations. Features an admin panel for managing villas, bookings, and user reservations with full CRUD operations.",
      userLink: "#",
      adminLink: "#",
      isDualButton: true,
      tags: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Chronix - E-Commerce Watch Store",
      description:
        "A sleek and responsive e-commerce front-end for a luxury watch store. Features a modern UI, detailed product pages, a functional shopping cart, and a simulated checkout process, all built with vanilla HTML, CSS, and JavaScript.",
      link: "https://yashzz26.github.io/E-Commerce-Web-Store-Watches-/",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    },
    {
      title: "Dynamic Weather App",
      description:
        "A user-friendly weather application that provides real-time weather data using an external API. It features a clean interface, hourly/daily forecasts, dynamic weather icons, and details like humidity and wind speed.",
      link: "https://yashzz26.github.io/Weather-App/",
      tags: ["JavaScript", "Weather API", "DOM Manipulation"],
    },
    {
      title: "SmartSpend - Expense Tracker App",
      description:
        "A practical front-end for an expense tracking application. Users can log expenses, categorize them, and view a summary of their spending. This project demonstrates DOM manipulation and data handling with JavaScript.",
      link: "https://yashzz26.github.io/Budget-Expense-Tracker/",
      tags: ["JavaScript", "Local Storage", "Chart.js"],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`scroll-hidden from-bottom ${isVisible ? "scroll-visible" : ""}`}
    >
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index === 0 ? "featured-card" : "normal-card"} scroll-hidden from-bottom stagger-${index + 1} ${isVisible ? "scroll-visible" : ""}`}>
            <div className="project-content">
              <div className="project-card-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.isDualButton ? (
                  <>
                    <a
                      href={project.userLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-user">
                      User Portal
                    </a>
                    <a
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-admin">
                      Admin Portal
                    </a>
                  </>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary">
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
