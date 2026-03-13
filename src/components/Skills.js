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
      className={`scroll-hidden from-bottom ${isVisible ? "scroll-visible" : ""}`}
      ref={ref}>
      <h2>Skills</h2>
      <div
        style={{ height: "110px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={36}
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
                padding: "6px 10px",
                width: "88px",
                minWidth: "88px",
              }}>
              <span
                style={{
                  fontSize: "28px",
                  lineHeight: 1,
                  display: "flex",
                  color: "var(--primary-text)",
                }}>
                {item.node}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  marginTop: "6px",
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
    </section>
  );
};

export default Skills;
