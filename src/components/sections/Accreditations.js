import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import { ColumnList } from "./accreditationStyle";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Accreditations = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  noMargin = false,
  noDelay = false,
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

  return (
    <section {...props} className={outerClasses}>
      <div
        className="container reveal-from-bottom center-content"
        data-reveal-delay={noDelay ? 0 : 300}
      >
        <ColumnList itemSize="150px" noMargin={noMargin}>
          <Image
            src={require("./../../assets/images/awards/salto.png")}
            alt="Salto Accreditation"
            width={65}
            style={{
              borderRadius: "2px",
              marginBottom: "1em",
            }}
          />

          <Image
            src={require("./../../assets/images/awards/auva.jpg")}
            alt="Auva Accreditation"
            width={100}
            style={{
              borderRadius: "2px",
              marginBottom: "1em",
            }}
          />

          <Image
            src={require("./../../assets/images/awards/fire-detection.jpg")}
            alt="Fire Detection Accreditation"
            width={110}
            style={{
              borderRadius: "2px",
              marginBottom: "1em",
            }}
          />

          <Image
            src={require("./../../assets/images/awards/nsv.jpg")}
            alt="NSV Accreditation"
            width={120}
            style={{
              borderRadius: "2px",
              marginBottom: "1em",
            }}
          />

          <Image
            src={require("./../../assets/images/awards/constructionLine.jpg")}
            alt="Construction Line Accreditation"
            width={100}
            style={{
              borderRadius: "2px",
              marginBottom: "1em",
            }}
          />
        </ColumnList>
      </div>
    </section>
  );
};

Accreditations.propTypes = propTypes;
Accreditations.defaultProps = defaultProps;

export default Accreditations;
