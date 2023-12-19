import styled from "styled-components";
import { colours } from "../../theme/colors";

export const GalleryRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

export const ImageOverlayWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
`;

export const UniformGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fit, minmax(${props.itemSize}, 1fr))`};
  grid-gap: 1rem;
  align-items: flex-start;
  background-color: "blue";
  padding: 1em;
`;

export const ImageGrid = styled.div`
  line-height: 0;
  column-gap: 0.5rem;
  column-count: ${(props) => `${props.isMobile ? "2" : "4"}`};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FloatingTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0em;
  width: 100%;
  height: 100%;
  background-color: ${colours.blackOverlay};
  z-index: 2;
`;

export const FloatingTextContainer2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0em;
  background-color: ${colours.blackOverlay};
  z-index: 2;
`;

export const StyledImageWithText = styled.div`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 9px 36px 8px rgba(240, 121, 0, 0.4);
    transform: scale(1.05, 1.05);
  }
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 1em;
`;

export const StyledImageWithTextWithoutHover = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 1em;
`;

export const StyledTitle = styled.h6`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  word-wrap: break-all;
  white-space: pre-wrap;
  color: white;
  margin: 0;
  padding: 0;
`;
