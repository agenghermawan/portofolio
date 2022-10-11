import React from "react";
import { Link } from "react-router-dom";
import "../styles/project.css";

export default function Project() {
  return (
    <div
      className="container mx-auto grid justify-center mt-32 w-2/4"
      id="projects"
    >
      <div className="title">
        <h3 className="text-3xl font-semibold flex">
          <span className="title-about__number"> 03. </span> Some Things I've
          Built
          <span className="strip"> </span>
        </h3>
      </div>
      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> Decision Support System </h4>
          <p className="project-desc text-justify">
            Website Decision Support System for a company in hiring and
            considering permanent employees
          </p>
          <ul className="project-tools flex gap-3">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img src="./images/DSS.png" alt="" width={470} className="bg-cover" />
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <div className="grid grid-flow-row gap-3">
          <img src="./images/pghnai.png" alt="" width={470} height={370} />
        </div>
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> PGHNAI Sumatera Selatan </h4>
          <p className="project-desc text-justify">
            Website for Working Meeting and National Symposium of the
            Gastroenterology Association, Indonesian Child Hepatology and
            Nutrition
          </p>
          <ul className="project-tools flex gap-3">
            <li>PHP </li>
            <li>Laravel </li>
            <li>Bootstrap </li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> Hello Kitchen </h4>
          <p className="project-desc text-justify">
            Wesbite selling desserts and snacks with midtrans
          </p>
          <ul className="project-tools flex gap-3">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img
            src="./images/hellokitchen.png"
            alt=""
            width={470}
            className="bg-cover"
          />
        </div>
      </div>

      <div
        className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="400"
      >
        <div className="grid grid-flow-row gap-3">
          <img src="./images/pkbidai.png" alt="" width={470} height={370} />
        </div>
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> PGHNAI Sumatera Selatan </h4>
          <p className="project-desc text-justify">
            Workshop and Symposium Website for Optimizing Referrals in Child
            Cases by Prioritizing Good Communication Competence
          </p>
          <ul className="project-tools flex gap-3">
            <li>PHP </li>
            <li>Laravel </li>
            <li>Bootstrap </li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>

      <Link to={"/projects"}>
        <button
          type="button justify-center"
          className="p-1 contact-me text-white w-3/12 outline outline-offset-2 outline-blue-400 rounded-md"
        >
          See All Project ...
        </button>
      </Link>
    </div>
  );
}
