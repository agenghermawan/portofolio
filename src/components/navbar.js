import React from "react";
import Button from "../atoms/button";
import List from "../atoms/list";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="mx-auto hero container">
        <div className="flex justify-between py-5">
          <div className="">
            <h1>AH</h1>
          </div>
          <div className="list">
            <ul>
              <List href={"#about-me"}> 01. About Me</List>
              <List href={"#experience"}> 02. Experience</List>
              <List href={"#projects"}> 03. Projects</List>
              <List href={"#contact"}> 04. Contact</List>
              <List>
                <Button text={"Resume"} onClick={() => console.log("button")} />
              </List>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
