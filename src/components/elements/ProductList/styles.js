import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5em 2em;
  gap: 0.3em;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
`;

export const StyledProductList = styled.div`
  list-style: none;
`;

export const StyledHeadline = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5em;
  margin-top: 0;
`;
