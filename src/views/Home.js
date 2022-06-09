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
import GenericSection from "../components/sections/GenericSection";

const Home = () => {
  const isMobile = useMediaQuery();
  const sectionId = useParams()?.section;

  useEffect(() => {
    if (!sectionId) return;
    document.querySelector(`#${sectionId}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, [sectionId]);

  return (
    <div>
      {/* }
      <img
        src={require("../assets/images/illustration-section-01.svg")}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 0,
          marginTop: "-2em",
          opacity: "0.2",
          width: "100%",
          transform: "scale(1.5) translateX(5%)",
        }}
        alt="Design"
      />
      */}
      <FullScreenWrapper id="home" style={{ paddingTop: "4em" }}>
        <Hero />
        {false && (
          <div style={{ marginTop: isMobile ? "-1em" : "2em" }}>
            <Accreditations noDelay />
          </div>
        )}
      </FullScreenWrapper>
      <OurServices className="illustration-section-03" />
      <GenericSection></GenericSection>
      <OurProjects topDivider />
      <ContactForm split />
    </div>
  );
};

export default Home;
