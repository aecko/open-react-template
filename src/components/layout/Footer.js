import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Accreditations from "../sections/Accreditations";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo width={350} height={70} />
            <FooterSocial />
          </div>
          <div
            className="text-xs"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <p style={{ flex: 1 }}>
              {
                "A full suite of products and services including Fire Alarm & Security Systems, Fire Suppression, Energy Monitoring & Renewable Solutions and Assistive Technologies"
              }
            </p>
            <ul style={{ flex: 1, textAlign: "right", listStyle: "none" }}>
              <li>📞 028 7963 9446</li>
              <li>📧 contact@ambarsystems.com</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: 0, marginBottom: "1em" }}>Accreditation</h4>
            <Accreditations noMargin noDelay />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Website by <a href="https://github.com/aecko">Seamus Harkin</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
