import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "yashbhadane483@gmail.com",
      link: "mailto:yashbhadane483@gmail.com",
    },
    {
      icon: faPhone,
      label: "Mobile",
      value: "+91 9588618720",
      link: "tel:+919588618720",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "Yash Bhadane",
      link: "https://www.linkedin.com/in/yash-bhadane-560230325",
    },
    {
      icon: faGithub,
      label: "GitHub",
      value: "Yashzz26",
      link: "https://github.com/Yashzz26",
    },
  ];

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <p className="contact-intro">
          Feel free to reach out for collaborations, job opportunities, or just
          a friendly hello!
        </p>
        <ul className="contact-list">
          {contactInfo.map((item, index) => (
            <li key={index} className="contact-item">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="contact-icon-only"
                />
                <span className="contact-text">
                  <strong>{item.label}:</strong> {item.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
