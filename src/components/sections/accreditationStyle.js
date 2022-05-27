import styled from "styled-components";

export const ColumnList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: ${(props) => (props.noMargin ? "0" : "2em")};
`;
