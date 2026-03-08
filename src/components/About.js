import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-hidden from-left ${isVisible ? "scroll-visible" : ""}`}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Yash — a web development enthusiast who loves bringing ideas to
        life on the web. For me, coding isn't just about writing lines of code,
        it's about creating smooth, user-friendly experiences that people
        actually enjoy using.
      </p>
      <p>
        I get excited about solving tricky problems and turning them into
        simple, elegant solutions. Along the way, I've built projects that
        challenged me to think about not just how things look, but how they
        perform and how people interact with them.
      </p>
    </section>
  );
};

export default About;
