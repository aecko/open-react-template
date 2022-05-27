import styled from "styled-components";

export const StyleButton = styled.button`
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  border: 0em solid #ffffff;
  font-weight: bold;
  background: transparent;
  text-align: left;
  color: #ffffff;
  transition: all 0.2s;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  border-radius: 0.12em;
  gap: 0.5em;
  background: transparent;
  font-weight: 300;
  color: #ffffff !important;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledText = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;
