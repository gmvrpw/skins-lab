import { styled } from "solid-styled-components";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.icon.fill};
  fill: ${(props) => props.theme?.icon.fill};
`;
