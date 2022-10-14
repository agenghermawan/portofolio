import React from "react";
import "../styles/about-me.css";
import Image from "../atoms/image";
import List from "../atoms/list";

export default function AboutMe() {
  return (
    <div
      className="mx-auto hero container w-10/12 md:w-2/4 justify-center grid"
      id="about-me"
    >
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
        <div className="title">
          <h3 className="md:text-3xl text-xl font-semibold flex">
            <span className="title-about__number "> 01. </span> About Me{" "}
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
                  <List> HTML </List>
                  <List> CSS </List>
                  <List> PHP </List>
                  <List> JavaScript </List>
                </ul>
              </div>
              <div>
                <ul className="list-square list-inside">
                  <List> Tailwind CSS </List>
                  <List> Laravel </List>
                  <List> Bootstrap </List>
                  <List> React Js </List>
                  <List> Flutter </List>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-64">
            <Image src={"images/foto.jpeg"} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
