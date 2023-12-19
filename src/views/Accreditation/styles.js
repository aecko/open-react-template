import styled from "styled-components";

export const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4em;
  background-color: #f08900;
  border-bottom: 8px solid white;
  padding: 2em;
  box-shadow: 0px 12px 11px 3px rgba(0, 0, 0, 0.3);
`;

export const ScreenWrapper = styled.div`
  width: 100%;
  background-color: #17202a;
`;

export const SingleAccreditationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  flex-stretch: stretch;
  gap: 1em;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid #F07900;
  padding: 16px;
  border-radius: 1.5em;
  min-width: 300px;
  min-height: 300px;
  max-height: 300px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: all 0.25s ease-in-out;


  @media (max-width:1400px){
    min-height: 370px;
    max-height: 370px;
  }

  @media (max-width: 600px){
    width: 100%
    min-height: 500px;
    max-height: 500px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 22px 26px 4px -15px rgba(0, 0, 0, 0.9);
    transform: scale(1.02, 1.02);
    background-color: rgba(240, 121, 0, 0.7);
    border: 3px solid white;
  }

`;

export const AccreditationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 1400px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AccreditationLogoLandscape = styled.img`
  width: 7em;
  height: 4em;

  @media (max-width: 600px) {
    width: 3.5em;
    height: 2em;
  }
`;

export const AccreditationLogoPortrait = styled.img`
  width: 4.5em;
  height: 6em;

  @media (max-width: 600px) {
    width: 2.5em;
    height: 3.5em;
  }
`;

export const AccreditationTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  margin: 0;
  text-align: center;
`;

export const AccreditationDescription = styled.p`
  font-size: 1em;
  font-weight: normal;
  color: #fff;
  margin: 0;
  text-align: center;
`;

export const AccreditationSectionContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

export const PageDescription = styled.p`
  font-size: 1em;
  font-weight: normal;
  color: #fff;
  margin: 0;
`;
