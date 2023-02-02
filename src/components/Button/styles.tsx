import { styled } from "solid-styled-components";

export const Button = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  color: ${(props) => props.theme?.button.color};
  background: ${(props) => props.theme?.button.background};
  border-radius: 6px;
  outline: none;
  &:hover {
    background: ${(props) => props.theme?.button.hover.background};
  }
  &:focus-visible {
    background: ${(props) => props.theme?.button.focusVisible.background};
    box-shadow: ${(props) => props.theme?.button.focusVisible.boxShadow};
  }
`;

export const Text = styled.div`
  padding: ${(props) => props.theme?.button.text.padding};
  font-family: ${(props) => props.theme?.button.text.fontFamily};
  font-size: ${(props) => props.theme?.button.text.fontSize};
  user-select: none;
`;
