import React from "react";
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
  return (
    <ColumnList itemSize="55px" noMargin={noMargin}>
      <Image
        src={require("./../../assets/images/awards/salto.png")}
        alt="Salto Accreditation"
        width={55}
        style={{
          borderRadius: "2px",
          marginBottom: "1em",
        }}
      />

      <Image
        src={require("./../../assets/images/awards/auva.jpg")}
        alt="Auva Accreditation"
        width={80}
        style={{
          borderRadius: "2px",
          marginBottom: "1em",
        }}
      />

      <Image
        src={require("./../../assets/images/awards/fire-detection.jpg")}
        alt="Fire Detection Accreditation"
        width={80}
        style={{
          borderRadius: "2px",
          marginBottom: "1em",
        }}
      />

      <Image
        src={require("./../../assets/images/awards/nsv.jpg")}
        alt="NSV Accreditation"
        width={80}
        style={{
          borderRadius: "2px",
          marginBottom: "1em",
        }}
      />

      <Image
        src={require("./../../assets/images/awards/constructionLine.jpg")}
        alt="Construction Line Accreditation"
        width={80}
        style={{
          borderRadius: "2px",
          marginBottom: "1em",
        }}
      />
    </ColumnList>
  );
};

Accreditations.propTypes = propTypes;
Accreditations.defaultProps = defaultProps;

export default Accreditations;
