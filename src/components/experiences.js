import React from "react";
import "../styles/experience.css";
import CardExperience from "../atoms/card-experience";
import List from "../atoms/list";

export default function Experience() {
  const experienceDesc = [
    {
      title: "IT Staff @PT Baraya Sukses Makmur",
      date: "Jan 2018 - Mei 2018",
      desc: [
        "Responsible for networking, installation and maintenance service",
        " Configuration and testing any new hardware",
        "Provided IT support services, troubleshooting hardware or software",
        "Maintenance and developing company website ",
      ],
    },
    {
      title: "Front-end dan Back-end Web Developer @ DOFF Project",
      date: "Mei 2021 - Mei 2022",
      desc: [
        "Designing User Interface.",
        "Designing the required database in the system",
        "Design Flow Process Back-end Application",
        "System Integration Testing Application",
      ],
    },
  ];

  return (
    <div
      className="container mx-auto mt-32 md:w-3/4 xl:w-2/4 w-10/12 grid justify-center"
      id="experience"
    >
      <div
        data-aos="fade-up-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="title">
          <h3 className="md:text-3xl text-xl font-semibold flex">
            <span className="title-about__number"> 02. </span> Where I've Worked
            <span className="strip"> </span>
          </h3>
        </div>
        {experienceDesc.map((item) => (
          <CardExperience title={item.title} date={item.date}>
            {item.desc.map((desc) => (
              <List>{desc}</List>
            ))}
          </CardExperience>
        ))}
      </div>
    </div>
  );
}
