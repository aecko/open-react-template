import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, width = 200, height = 48, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/home">
          <Image
            src={require("./../../../assets/images/Ambar_Logo_Full.png")}
            alt="Logo"
            width="90%"
            height="90%"
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
