import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Full Stack Villa Booking",
      description:
        "A comprehensive villa booking platform where users can browse available villas, view detailed information, check availability, and make reservations. Features an admin panel for managing villas, bookings, and user reservations with full CRUD operations.",
      userLink: "#",
      adminLink: "#",
      isDualButton: true,
    },
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
            <div className="project-card-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
