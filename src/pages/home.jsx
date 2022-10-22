import React, { useEffect } from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import AboutMe from "../components/about-me";
import Experiences from "../components/experiences";
import Project from "../components/project";
import ContactMe from "../components/contact-me";
import aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    aos.init();
  });
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experiences />
      <Project />
      <ContactMe />
    </Layout>
  );
}
