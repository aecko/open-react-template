import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import { ColumnList } from "./accreditationStyle";
import { useMediaQuery } from "../../hooks/MediaHook";

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

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content mt-2 mb-16",
    pushLeft && "push-left"
  );

  const isMobile = useMediaQuery();
  return (
    <section {...props} className={outerClasses}>
      <div
        className="container-lg reveal-from-bottom center-content"
        data-reveal-delay="350"
      >
        <ColumnList itemSize="150px">
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
            src={require("./../../assets/images/awards/nsv.jpg")}
            alt="NSV Accreditation"
            width={50}
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
