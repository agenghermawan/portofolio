import React from "react";
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
      <div className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20">
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> Face Mask Detection </h4>
          <p className="project-desc">
            Face Mask Detection system to detect face masks in static images as
            well as in real-time video streams. Own custom dataset was built
            using Bing Search API and Kaggle. Inspired by Adrian Rosebrock's
            PyImageSearch Blog.
          </p>
          <ul className="project-tools flex gap-3">
            <li>OpenCV</li>
            <li>TensorFlow</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img src="./images/project 1.jpg" alt="" />
        </div>
      </div>

      <div className="grid mt-8 gap-3 w-full md:grid-cols-2 grid-cols-1 mb-20">
        <div className="grid grid-flow-row gap-3">
          <h5 className="project_title">Featured Project</h5>
          <h4 className="project_name"> Face Mask Detection </h4>
          <p className="project-desc">
            Face Mask Detection system to detect face masks in static images as
            well as in real-time video streams. Own custom dataset was built
            using Bing Search API and Kaggle. Inspired by Adrian Rosebrock's
            PyImageSearch Blog.
          </p>
          <ul className="project-tools flex gap-3">
            <li>OpenCV</li>
            <li>TensorFlow</li>
          </ul>
        </div>
        <div className="grid grid-flow-row gap-3">
          <img src="./images/project 1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
