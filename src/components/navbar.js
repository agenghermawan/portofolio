import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="mx-auto hero container">
        <div className="flex justify-between py-5">
          <div className="">
            <h1>Portofolio</h1>
          </div>
          <div className="list">
            <ul>
              <li>
                <a href="#about-me"> 01. About Me </a>
              </li>
              <li>
                <a href="#experience">02. Experience </a>
              </li>
              <li>
                <a href="#projects"> 03. Projects </a>
              </li>
              <li>
                <a href="#contact"> 04. Contact</a>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 outline outline-offset-2 outline-blue-400 rounded-md"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
