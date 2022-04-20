import React, { useEffect } from "react";
// import sections
import Hero from "../components/sections/Hero";
import OurProjects from "../components/sections/OurProjects";
import ContactForm from "../components/sections/ContactForm";
import Accreditations from "../components/sections/Accreditations";
import { FullScreenWrapper } from "./styles";
import { useMediaQuery } from "../hooks/MediaHook";
import OurServices from "../components/sections/OurServices";
import { useParams } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery();
  const sectionId = useParams()?.section;

  useEffect(() => {
    if (!sectionId) return;
    document.querySelector(`#${sectionId}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [sectionId]);

  return (
    <div id="home">
      <FullScreenWrapper>
        <Hero className="illustration-section-01" />
        <div style={{ marginTop: isMobile ? "-1em" : "2em" }}>
          <Accreditations />
        </div>
      </FullScreenWrapper>
      <OurServices className="illustration-section-03" />
      <OurProjects topDivider />
      <ContactForm split />
    </div>
  );
};

export default Home;
