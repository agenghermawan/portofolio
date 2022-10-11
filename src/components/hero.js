import React from "react";
import "../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="mx-auto hero container w-2/4 justify-center grid">
      <h5 className="title-name pt-10 md:pt-20 text-2xl w-2/4">
        Hello World! My name is
      </h5>
      <h1 className="text-name text-7xl mt-5 leading-relaxed">
        <Typewriter
          words={["Ageng Hermawan"]}
          loop={10}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={2000}
        />
        <br />
        <span className="sub-text-name"> I love exploring new things! </span>
      </h1>
      <div className="desc w-6/12 gap-5 grid">
        <p className="mt-5 text-justify">
          I'm an Indonesia based website developer with a goal - driven creative
          mindset and passion for learning and innovating. <br />
        </p>
      </div>

      <button className="outline outline-offset-2 bg-blue-300 bg-transparent mt-6 p-3 rounded-md w-1/4">
        Contact Me
      </button>
    </div>
  );
}
