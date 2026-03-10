import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "yashbhadane483@gmail.com",
    link: "mailto:yashbhadane483@gmail.com",
    className: "card-email",
    canCopy: true,
  },
  {
    icon: faPhone,
    label: "Mobile",
    value: "+91 9588618720",
    link: "tel:+919588618720",
    className: "card-phone",
    canCopy: true,
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "Yash Bhadane",
    link: "https://www.linkedin.com/in/yash-bhadane-560230325",
    className: "card-linkedin",
    canCopy: false,
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "Yashzz26",
    link: "https://github.com/Yashzz26",
    className: "card-github",
    canCopy: false,
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleAction = (item, index) => {
    if (item.canCopy) {
      navigator.clipboard.writeText(item.value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-hidden from-bottom ${isVisible ? "scroll-visible" : ""}`}
    >
      <h2>Contact Me</h2>

      <p className="contact-intro">
        Feel free to reach out for collaborations, job opportunities, or just
        a friendly hello!
      </p>

      <div className="contact-grid">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className={`contact-card scroll-hidden from-bottom stagger-${index + 1} ${isVisible ? "scroll-visible" : ""}`}
            onClick={() => handleAction(item, index)}
          >
            <div className={`copy-feedback ${copiedIndex === index ? "show" : ""}`}>
              Copied!
            </div>
            <div className="contact-card-inner">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="contact-label">{item.label}</h3>
              <p className="contact-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
