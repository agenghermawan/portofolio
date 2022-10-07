import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import AboutMe from "../components/about-me";
import Experience from "../components/experience";
import Project from "../components/project";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experience />
      <Project />
    </Layout>
  );
}
