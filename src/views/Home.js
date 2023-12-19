import React, { useEffect } from "react";
// import sections
import Hero from "../components/sections/Hero";
import OurProjects from "../components/sections/OurProjects";
import ContactForm from "../components/sections/ContactForm";
import { FullScreenWrapper } from "./styles";
import OurServices from "../components/sections/OurServices";
import { useParams, useLocation } from "react-router-dom";
import { FadingImageCarousel } from "../components/elements/FadingImageCarousel";
import { BlackOverlay } from "../components/elements/FadingImageCarousel/style";

const Home = () => {
  const sectionId = useParams()?.section;
  const location = useLocation();

  useEffect(() => {
    if (!sectionId) return;
    document.querySelector(`#${sectionId}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, [location]);

  return (
    <div
      style={{
        backgroundColor: "#17202a",
      }}
    >
      <FullScreenWrapper id="home" style={{ paddingTop: "4em" }}>
        <FadingImageCarousel />
        <BlackOverlay />
        <Hero />
      </FullScreenWrapper>
      <OurServices className="illustration-section-03" />
      <OurProjects topDivider />
      <ContactForm split />
    </div>
  );
};

export default Home;
