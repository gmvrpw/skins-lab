import { createGlobalStyles } from "solid-styled-components";

export const GlobalStyles = () => {
  const Styles = createGlobalStyles`
    html,
    body {
      padding: 0;
      margin: 0;
      border: 0;
      height: 100%;
      width: 100%;
    }
    * {
      box-sizing: border-box;
    }
  `;
  return <Styles />;
};

const colors = {
  secondary: {
    lightest: "#ffffff",
    lighter: "#f2f2f2",
    base: "#e6e6e6",
    darker: "#d9d9d9",
    darkest: "#cccccc",
  },
};

const light = {
  background: colors.secondary.base,
};

export const theme = {
  light,
};

declare module "solid-styled-components" {
  export interface DefaultTheme {
    background: string;
  }
}
