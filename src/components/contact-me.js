import React from "react";
import "../styles/contact-me.css";

export default function ContactMe() {
  return (
    <div
      className="mx-auto container w-10/12 md:w-2/4 grid justify-center mt-24"
      id="contact"
      data-aos="fade-down-right"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="title">
        <h3 className="text-3xl font-semibold flex">
          <span className="title-about__number"> 04. </span> What's Next ?
          <span className="strip"> </span>
        </h3>
      </div>
      <div className="grid gap-5 grid-flow-row justify-center">
        <h5 className="contact-title">Get In Touch</h5>
        <p className="contact-desc">
          My inbox is always open. Whether you have a question or just want to
          say hello, I'll try my best to get back to you! Feel free to mail me
          about any relevant job updates.
        </p>
        <div className="text-center mt-12">
          <button
            type="button"
            className="p-1 contact-me text-white w-2/12 outline outline-offset-2 outline-blue-400 rounded-md"
          >
            Mail Me
          </button>
        </div>
      </div>
    </div>
  );
}
