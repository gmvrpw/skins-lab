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
  brand: {
    lightest: "hsl(270, 100%, 95%, 1)",
    base: "hsl(270, 100%, 50%, 1)",
  },
  primary: {
    darker: "hsl(0, 0%, 0%, 1)",
    base: "hsl(0, 0%, 20%, 1)",
    lighter: "hsl(0, 0%, 35%, 1)",
    lightest: "hsl(0, 0%, 50%, 1)",
  },
  secondary: {
    base: "hsl(0, 0%, 100%, 1)",
    darker: "hsl(0, 0%, 95%,  1)",
    darkest: "hsl(0, 0%, 90%, 1)",
  },
};

const outline = `0 0 0 3px ${colors.brand.base} inset`;

const light = {
  background: colors.secondary.darkest,
  icon: {
    fill: colors.primary.base,
  },
  button: {
    color: colors.primary.base,
    background: colors.secondary.base,
    text: {
      padding: "0 8px",
      fontFamily: "Inter, serif",
      fontSize: "12px",
    },
    hover: {
      background: colors.secondary.darker,
    },
    focusVisible: {
      background: colors.brand.lightest,
      boxShadow: outline,
    },
  },
};

export const theme = {
  light,
};

declare module "solid-styled-components" {
  export interface DefaultTheme {
    background: string;
    icon: {
      fill: string;
    };
    button: {
      color: string;
      background: string;
      text: {
        padding: string;
        fontFamily: string;
        fontSize: string;
      };
      hover: {
        background: string;
      };
      focusVisible: {
        background: string;
        boxShadow: string;
      };
    };
  }
}
