import React from "react";
import { Link } from "react-router-dom";
import CardProject from "../atoms/card-project";
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
      <CardProject></CardProject>

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
