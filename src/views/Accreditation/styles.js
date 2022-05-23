import styled from "styled-components";

export const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5em;
`;

export const ScreenWrapper = styled.div`
  margin-top: 7em;
  padding: 0 10em;
  width: 100%;
`;

export const SingleAccreditationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5em;
`;

export const AccreditationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AccreditationLogo = styled.img`
  width: 30%;
  height: auto;
`;

export const AccreditationTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

export const AccreditationDescription = styled.p`
  font-size: 1em;
  font-weight: normal;
  color: #fff;
  margin: 0;
`;

export const PageTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #fff;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const PageDescription = styled.p`
  font-size: 1em;
  font-weight: normal;
  color: #fff;
  margin: 0;
`;
