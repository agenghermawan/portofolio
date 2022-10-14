import React from "react";
import "../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="mx-auto hero container w-10/12 md:w-2/4 justify-center grid mb-16 md:mb-44">
      <h5 className="title-name pt-10 md:pt-20 text-2xl md:text-3xl w-auto md:w-2/4  sm:text-sm">
        Hello World! My name is
      </h5>
      <h1 className="text-name text-xl md:text-7xl mt-5 leading-relaxed">
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
      <div className="desc sm:w-full md:mx-0 md:w-6/12 gap-5 grid">
        <p className="mt-5 text-justify">
          I'm an Indonesia based website developer with a goal - driven creative
          mindset and passion for learning and innovating. <br />
        </p>
      </div>

      <button className="outline outline-offset-2 bg-blue-300 bg-transparent mt-6 p-3 rounded-md w-4/12 md:w-1/4">
        Contact Me
      </button>
    </div>
  );
}
