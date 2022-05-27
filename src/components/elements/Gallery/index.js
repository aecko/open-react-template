import React from "react";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import { useHistory } from "react-router-dom";
import {
  FloatingTextContainer,
  ImageGrid,
  ImageOverlayWrapper,
  StyledImage,
  StyledImageWithText,
  StyledTitle,
  UniformGrid,
} from "./style";
import { colours } from "../../theme/colors";
import { useMediaQuery } from "../../../hooks/MediaHook";

export const Gallery = ({ imageSet, uniform = true, withOverlay = true }) => {
  const isMobile = useMediaQuery();
  const history = useHistory();
  const getImages = () =>
    imageSet.map((item, index) => (
      <>
        {withOverlay && (
          <ImageOverlayWrapper
            key={index}
            onClick={() => {
              history.push(item.route);
            }}
          >
            <ImgOverlay
              imgSrc={item.imgSrc}
              bgColor={colours.blackOverlay}
              position={item.position}
              width="100%"
              height="auto"
              fSize="28px"
              fColor="white"
            >
              {item.title}
            </ImgOverlay>
          </ImageOverlayWrapper>
        )}
        {!withOverlay && (
          <StyledImageWithText>
            <StyledImage src={item.imgSrc} />
            <FloatingTextContainer>
              <StyledTitle>{item.title}</StyledTitle>
            </FloatingTextContainer>
          </StyledImageWithText>
        )}
      </>
    ));
  return (
    <>
      {uniform ? (
        <UniformGrid itemSize={isMobile ? "75px" : "150px"}>
          {getImages()}
        </UniformGrid>
      ) : (
        <ImageGrid isMobile={isMobile}>{getImages()}</ImageGrid>
      )}
    </>
  );
};
