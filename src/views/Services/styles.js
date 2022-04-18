import styled from "styled-components";

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3em;
  width: 100%;
`;

export const ScreenWrapper = styled.div`
  margin-top: 7em;
  padding: 0 10em;
  width: 100%;
`;

export const NavigationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1em;
  border-left: 4px solid #000;
  margin-bottom: 3em;
`;

export const StyledHeadline = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const StyledSubHeadline = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const StyledNavigationText = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

export const StyledParagraphText = styled.p`
  white-space: pre-line;
`;
