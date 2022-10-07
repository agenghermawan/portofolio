import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="mx-auto hero container">
        <div className="flex justify-between py-5">
          <h1>Portofolio</h1>
          <div className="list">
            <ul>
              <li>01. About Me</li>
              <li>02. Experience</li>
              <li>03. Projects</li>
              <li>04. Contact </li>
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
