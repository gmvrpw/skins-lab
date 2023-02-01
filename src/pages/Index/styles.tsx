import { styled } from "solid-styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme?.background};
`;
