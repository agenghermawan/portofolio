import React from "react";
import "../styles/experience.css";

export default function Experience() {
  return (
    <div
      className="container mx-auto mt-32 grid justify-center w-2/4"
      id="experience"
    >
      <div
        data-aos="fade-up-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="title">
          <h3 className="text-3xl font-semibold flex">
            <span className="title-about__number"> 02. </span> Where I've Worked
            <span className="strip"> </span>
          </h3>
        </div>
        <div className="desc-experience">
          <div className="desc-experience__title">
            <h5 className="text-2xl">IT Staff @PT Baraya Sukses Makmur</h5>
          </div>
          <div className="desc-experience__time">
            <h5>Jan 2018 - Mei 2018</h5>
          </div>
          <div className="desc-experience__list">
            <ul className="list-square list-inside">
              <li>
                Responsible for networking, installation and maintenance service
              </li>
              <li>Configuration and testing any new hardware</li>
              <li>
                Provided IT support services, troubleshooting hardware or
                software
              </li>
              <li>Maintenance and developing company website</li>
            </ul>
          </div>
        </div>
        <div className="desc-experience">
          <div className="desc-experience__title">
            <h5 className="text-2xl">
              Front-end dan Back-end Web Developer @ DOFF Project
            </h5>
          </div>
          <div className="desc-experience__time">
            <h5>Mei 2021 - Mei 2022</h5>
          </div>
          <div className="desc-experience__list">
            <ul className="list-square list-inside">
              <li>Designing User Interface.</li>
              <li>Design Flow Process Back-end Application</li>
              <li>Designing the required database in the system</li>
              <li>System Integration Testing Application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
