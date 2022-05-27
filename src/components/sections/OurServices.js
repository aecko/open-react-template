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
    title: "Products and Services",
    paragraph:
      "At Ambar Systems we offer a wide range of products and services to our clients.",
  };

  return (
    <div {...props} className={outerClasses} id="services">
      <div>
        <SectionHeader
          data={sectionHeader}
          className="center-content"
          style={{
            margin: 0,
            padding: "2em 0 4em 0",
            minWidth: "100%",
            alignSelf: "stretch",
            backgroundColor: "rgba(254, 131, 13, 0.85)",
            zIndex: -20,
            color: "white",
          }}
          color="#fff"
        />
        <div
          className="container"
          style={{
            marginTop: "-2.3em",
            backgroundColor: "#fff",
            padding: "2em 1em",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Gallery imageSet={ServicesOptions} uniform={true} />
        </div>
      </div>
    </div>
  );
};

OurServices.propTypes = propTypes;
OurServices.defaultProps = defaultProps;

export default OurServices;
