import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { useHistory } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const anchorContact = document.querySelector("#contactUs");
  const history = useHistory();

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <Image
            src={require("../../assets/images/ambar_outside.jpg")}
            alt="Full Logo"
            width={400}
            height={140}
            style={{
              borderRadius: "5px",
              position: "absolute",
              zIndex: "-10",
              width: "100vw",
              height: "100vh",
              left: 0,
              top: 0,
              opacity: "1",
              "-webkit-filter": "brightness(45%)",
            }}
            className="mb-32"
          />
          <div className={innerClasses}>
            <div className="hero-content pull-left">
              <Image
                src={require("../../assets/images/logoHero.png")}
                alt="Full Logo"
                width={400}
                height={140}
                style={{ borderRadius: "5px" }}
                className="mb-32"
              />
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="300"
                >
                  Ambar Systems Ltd are accredited specialists in the field of
                  Fire Protection and Safety. We are a team of highly qualified
                  professionals with a strong track record of delivering high
                  quality products and services.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="350">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      onClick={() => {
                        anchorContact.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
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
      </section>
    </>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

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
