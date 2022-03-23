import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Accreditations from "../components/sections/Accreditations";
import { FullScreenWrapper } from "./styles";
import { useMediaQuery } from "../hooks/MediaHook";

const Home = () => {
  const isMobile = useMediaQuery();
  return (
    <>
      <FullScreenWrapper>
        <Hero className="illustration-section-01" />
        <div style={{ marginTop: isMobile ? "-1em" : "2em" }}>
          <Accreditations />
        </div>
      </FullScreenWrapper>

      <FeaturesTiles className="illustration-section-03" />
      {false && (
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
        />
      )}
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
