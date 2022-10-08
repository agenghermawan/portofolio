import React from "react";
import "../styles/experience.css";

export default function Experience() {
  return (
    <div
      className="container mx-auto mt-32 grid justify-center w-2/4"
      id="experience"
    >
      <div className="title">
        <h3 className="text-3xl font-semibold flex">
          <span className="title-about__number"> 02. </span> Where I've Worked
          <span className="strip"> </span>
        </h3>
      </div>
      <div className="desc-experience">
        <div className="desc-experience__title">
          <h5 className="text-2xl">Freelance Content Writer @ Pepper</h5>
        </div>
        <div className="desc-experience__time">
          <h5>July 2021 - Present</h5>
        </div>
        <div className="desc-experience__list">
          <ul className="list-square list-inside">
            <li>
              Creating Tech Content as a freelancer for the content giant Pepper
              Content.
            </li>
            <li>
              Submitted tech blogs on various popular topics for American
              Technology Consulting in 2500 words with a rating of 4.5/5.0.
            </li>
            <li>
              Submitted a White Paper for Nous Infosystems in 1500 words with a
              rating of 5.0/5.0.
            </li>
          </ul>
        </div>
      </div>
      <div className="desc-experience">
        <div className="desc-experience__title">
          <h5 className="text-2xl">Freelance Content Writer @ Pepper</h5>
        </div>
        <div className="desc-experience__time">
          <h5>July 2021 - Present</h5>
        </div>
        <div className="desc-experience__list">
          <ul className="list-square list-inside">
            <li>
              Creating Tech Content as a freelancer for the content giant Pepper
              Content.
            </li>
            <li>
              Submitted tech blogs on various popular topics for American
              Technology Consulting in 2500 words with a rating of 4.5/5.0.
            </li>
            <li>
              Submitted a White Paper for Nous Infosystems in 1500 words with a
              rating of 5.0/5.0.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
