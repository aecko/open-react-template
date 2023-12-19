import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import arrowAnimationData from "../../assets/images/lottie/down_arrow.json";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({ topDivider, bottomDivider }) => {
  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const anchorContact = document.querySelector("#contactUs");
  const projectsAnchor = document.querySelector("#projects");
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "80vh",
        width: "100vw",
        zIndex: 2,
        marginTop: "2em",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          className={innerClasses}
          style={{
            padding: "2em 0em 0em 6em",
          }}
        >
          <div className="hero-content pull-left">
            <div className="container-xs">
              <h2
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
                style={{
                  color: "white",
                }}
              >
                Fire Protection and Safety Specialists
              </h2>
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
              >
                We are a team of highly qualified professionals with a strong
                track record of delivering high quality products and services.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="350">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={() => {
                      history.push("/contact-us");
                    }}
                  >
                    Get in contact
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    onClick={() => {
                      history.push("/projects");
                    }}
                  >
                    Our Projects
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          marginTop: "-40px",
        }}
        onClick={() => history.push("/services")}
      >
        <Lottie
          options={defaultOptions}
          height={130}
          width={130}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

export const styles = {
  headlineText: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "0px 0px 10px black",
    marginBottom: "1em",
  },
};

/*
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>

          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />*/
