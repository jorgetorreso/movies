import styled from "styled-components";
export const StyledCardHeader = styled.div<{ background?: string }>`
  background: url(${(props) => props.background}) center / cover;
  height: 276px;
  border-radius: 24px;
`;
