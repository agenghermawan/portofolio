import React from "react";
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
      desc: "Workshop and Symposium Website for Optimizing Referrals in Child Cases by Prioritizing Good Communication Competence",
      image: "./images/janjidokter.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Tssabes App",
      desc: "Workshop and Symposium Website for Optimizing Referrals in Child Cases by Prioritizing Good Communication Competence",
      image: "./images/tssabespicture.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
    {
      title: "Villa App",
      desc: "Workshop and Symposium Website for Optimizing Referrals in Child Cases by Prioritizing Good Communication Competence",
      image: "./images/villa.png",
      tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    },
  ];
  return (
    <div className="container mx-auto min-h-screen rounded p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5">
        {listProject.map((project) => (
          <div className="flex flex-col gap-5 w-full">
            <Image src={project.image} />
            <h4 className="project_name"> {project.title} </h4>
            <p className="project-desc h-32 text-justify">{project.desc}</p>
            <ul className="project-tools flex gap-3">
              {project.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
