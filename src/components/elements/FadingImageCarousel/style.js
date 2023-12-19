import styled from "styled-components";
import { colours } from "../../theme/colors";

export const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 4em;
  padding: 0em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;
