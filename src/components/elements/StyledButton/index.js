import React from "react";
import { ButtonContainer, StyleButton, StyledText } from "./styles";

export const StyledButton = ({ title, onClick, isSelected }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <StyledText>{title}</StyledText>
      {isSelected ? <StyledText>▲</StyledText> : <StyledText>▼</StyledText>}
    </ButtonContainer>
  );
};
