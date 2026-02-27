import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiHtml5,
  SiCss3,
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
import { FaServer, FaMobileAlt, FaRocket } from "react-icons/fa";
import "./LogoLoop.css";

const Skills = () => {
  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
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
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div
          style={{ height: "180px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={80}
            gap={50}
            hoverSpeed={30}
            scaleOnHover
            fadeOut={false}
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
                  padding: "10px 5px",
                  width: "360px",
                  minWidth: "360px",
                }}>
                {item.node}
                <span
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    width: "100%",
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
