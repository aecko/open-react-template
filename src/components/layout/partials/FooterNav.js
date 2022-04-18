import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">Fire Systems</Link>
        </li>
        <li>
          <Link to="#0">Refuge Systems</Link>
        </li>
        <li>
          <Link to="#0">Communication Systems</Link>
        </li>
        <li>
          <Link to="#0">Security Systems</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
