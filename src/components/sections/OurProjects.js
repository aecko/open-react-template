import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Gallery } from "../elements/Gallery";
import { ProjectsOptions } from "../elements/Gallery/imageSets";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const OurProjects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Our Projects",
    //paragraph about case studies not lorem ipsum
    paragraph:
      "Over the years, we have worked with some of the most innovative companies in the world. They have seen the impact of our work and are very satisfied with the results.",
  };

  return (
    <section {...props} className={outerClasses} id="projects">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{
              margin: 0,
              padding: "2em 0 4em 0",
              minWidth: "100%",
              alignSelf: "stretch",
              backgroundColor: "rgba(254, 131, 13, 0.7)",
              zIndex: -20,
              color: "white",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
            color="#fff"
          />
          <div
            style={{
              marginTop: "-2.3em",
              backgroundColor: "#191515",
              padding: "2em 1em",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Gallery
              imageSet={ProjectsOptions}
              uniform={false}
              withOverlay={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

OurProjects.propTypes = propTypes;
OurProjects.defaultProps = defaultProps;

export default OurProjects;
