import React from "react";
import "../styles/about-me.css";

export default function AboutMe() {
  return (
    <div
      className="container mx-auto mt-44 w-2/4 justify-center grid"
      id="about-me"
      // data-aos="zoom-in"
      // data-aos-easing="linear"
      // data-aos-duration="800"
    >
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
        <div className="title">
          <h3 className="text-3xl font-semibold flex">
            <span className="title-about__number"> 01. </span> About Me{" "}
            <span className="strip"> </span>
          </h3>
        </div>
        <div className="desc-about grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="grid gap-5">
            <p>
              I'am fresh greduate in information Systems at Gunadarma
              University. i`m easily adapts to new environments, has a desire to
              learn new things and has an interest in web developer especially
              back-end developer
            </p>
            {/* <p>
            I'm currently working as a developer for Bell Canada in the Amdocs
            Digital Delivery unit. My responsibilty includes Java/Spring based
            microservices development & testing.
          </p> */}
            <p>Here is a list of the technologies that I'm familiar with!</p>
            <div className="grid grid-cols-2 list-skills">
              <div>
                <ul className="list-square list-inside">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>Java Script</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <ul className="list-square list-inside">
                  <li>Tailwind Css</li>
                  <li>Laravel</li>
                  <li>Bootstrap</li>
                  <li>React Js</li>
                  <li>Flutter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-64">
            <img
              src="images/foto.jpeg"
              alt=""
              className="bg-cover drop-shadow-2xl rounded-md"
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
