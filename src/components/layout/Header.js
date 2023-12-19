import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import Logo from "./partials/Logo";
import { Dropdown } from "../elements/Dropdown";
import { DropdownOptions } from "../elements/Dropdown/options";
import { StyledLi } from "./Header_Styles";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  const history = useHistory();

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header
      {...props}
      className={classes}
      style={{
        backgroundColor: "#fff",
        boxShadow: "0px 0px 5px hsla(0, 0%, 0%, 0.5)",
        zIndex: 100,
      }}
    >
      <div style={{ width: "100%", paddingRight: "2em", paddingLeft: "2em" }}>
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <StyledLi>
                      <Link
                        style={{
                          color: isActive ? "white" : "black",
                        }}
                        onClick={() => {
                          closeMenu();
                          history.push("/home");
                        }}
                      >
                        Home
                      </Link>
                    </StyledLi>
                    {false && (
                      <li>
                        <Dropdown
                          title="Disciplines"
                          options={DropdownOptions}
                        />
                      </li>
                    )}

                    <StyledLi>
                      <Link
                        onClick={() => {
                          history.push("/services");
                          closeMenu();
                        }}
                        style={{
                          color: isActive ? "white" : "black",
                        }}
                      >
                        Products & Services
                      </Link>
                    </StyledLi>
                    <StyledLi>
                      <Link
                        onClick={() => {
                          history.push("/projects");
                          closeMenu();
                        }}
                        style={{
                          color: isActive ? "white" : "black",
                        }}
                      >
                        Projects
                      </Link>
                    </StyledLi>
                    <StyledLi>
                      <Link
                        onClick={() => {
                          history.push("/accreditation");
                          closeMenu();
                        }}
                        style={{
                          color: isActive ? "white" : "black",
                        }}
                      >
                        Accreditation
                      </Link>
                    </StyledLi>
                  </ul>

                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link
                          className="button button-primary button-wide-mobile button-sm"
                          onClick={() => {
                            history.push("/contact-us");
                            closeMenu();
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
