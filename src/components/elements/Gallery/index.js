import React from "react";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import { useHistory } from "react-router-dom";
import {
  FloatingTextContainer,
  FloatingTextContainer2,
  ImageGrid,
  ImageOverlayWrapper,
  StyledImage,
  StyledImageWithText,
  StyledImageWithTextWithoutHover,
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
        {!withOverlay && (
          <StyledImageWithTextWithoutHover>
            <StyledImage src={item.imgSrc} />
            <FloatingTextContainer2>
              <StyledTitle>{item.title}</StyledTitle>
            </FloatingTextContainer2>
          </StyledImageWithTextWithoutHover>
        )}
        {withOverlay && (
          <StyledImageWithText>
            <StyledImage src={item.imgSrc} />
            <FloatingTextContainer onClick={() => history.push(item.route)}>
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
