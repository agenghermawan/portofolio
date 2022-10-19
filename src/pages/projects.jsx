import React from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../atoms/image";

export default function Projects() {
  const listProject = [
    {
      title: "Decision Support System ",
      desc: "Website Decision Support System for a company in hiring and considering permanent employees",
      image: "./images/Hrservice.png",
      tools: ["PHP", "Laravel", "Bootstrap", "Jquery", "MySQL"],
    },
    {
      title: "PGHNAI Sumatera Selatan",
      desc: "Website for Working Meeting and National Symposium of the Gastroenterology Association, Indonesian Child Hepatology and Nutrition",
      image: "./images/pghnai.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Hello Kitchen",
      desc: "Wesbite selling desserts and snacks with midtrans",
      image: "./images/hellokitchen.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "PGHNAI Sumatera Selatan ",
      desc: "Workshop and Symposium Website for Optimizing Referrals in Child Cases by Prioritizing Good Communication Competence",
      image: "./images/pkbidai.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Sehatku App",
      desc: "Website of the final project Dicoding Indonesia creates a health website and appointments with doctors based on the selected hospital",
      image: "./images/janjidokter.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Tssabes App",
      desc: "Website for registration and re-registration at the Pusbindiklat organization",
      image: "./images/tssabespicture.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Villa App",
      desc: "Website booking and information about Villa the rifqi",
      image: "./images/villa.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Nomads App (Build With Angga)",
      desc: "Website to provide popular tours in Indonesia",
      image: "./images/Nomads.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Store (Build With Angga) ",
      desc: "Website Marketplace",
      image: "./images/store.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Store Top Up Game (Build With Angga) ",
      desc: "Slicing Website store Top up Game ",
      image: "./images/storetopup.png",
      tools: ["JavaScript", "NextJS", "TailwindCSS"],
    },
  ];
  return (
    <>
      <div className="container mx-auto min-h-screen rounded w-10/12 ">
        <Link className="text-white" to={"/"}>
          <BsArrowLeftCircleFill
            className="mt-12"
            style={{ color: "#172a45" }}
            size={50}
          />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5 my-12">
          {listProject.map((project) => (
            <div className="flex flex-col gap-5 w-full">
              <Image src={project.image} />
              <h4 className="project_name text-md md:text-xl">
                {project.title}
              </h4>
              <p className="project-desc h-42 text-justify">{project.desc}</p>
              <ul className="project-tools flex gap-3">
                {project.tools.map((tool) => (
                  <li className="text-sm md:text-xl">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
