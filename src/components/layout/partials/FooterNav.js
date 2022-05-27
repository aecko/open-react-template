import React from "react";
import classNames from "classnames";
import { DropdownOptions } from "../../elements/Dropdown/options";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        {DropdownOptions.map(({ title, route }) => (
          <li key={title}>
            <a href={route}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
