import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Gallery } from "../elements/Gallery";
import { ServicesOptions } from "../elements/Gallery/imageSets";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const OurServices = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const sectionHeader = {
    title: "Services",
    paragraph:
      "At Ambar Systems we offer a wide range of services to our clients.",
  };

  return (
    <section {...props} className={outerClasses} id="services-scroll">
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content" />
        <Gallery imageSet={ServicesOptions} />
      </div>
    </section>
  );
};

OurServices.propTypes = propTypes;
OurServices.defaultProps = defaultProps;

export default OurServices;
