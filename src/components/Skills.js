import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import LogoLoop from "./LogoLoop";
import {
  SiHtml5,
  SiCsswizardry,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { FaMobileAlt, FaRocket } from "react-icons/fa";
import "./LogoLoop.css";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCsswizardry />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript (ES6+)" },
    { node: <SiReact />, title: "React.js" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express.js" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <FaMobileAlt />, title: "Responsive Web Design" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <FaRocket />, title: "Web Performance Optimization" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiTailwindcss />, title: "Tailwind" },
  ];

  return (
    <section
      id="skills"
      className={`py-5 scroll-hidden from-bottom ${isVisible ? "scroll-visible" : ""}`}
      ref={ref}>
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div
          style={{ height: "120px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={20}
            scaleOnHover
            fadeOut={true}
            ariaLabel="Technology skills"
            renderItem={(item, key) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-text)",
                  padding: "8px 12px",
                  width: "90px",
                  minWidth: "90px",
                }}>
                <span
                  style={{ fontSize: "32px", lineHeight: 1, display: "flex" }}>
                  {item.node}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    marginTop: "8px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "var(--secondary-text)",
                  }}>
                  {item.title}
                </span>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
