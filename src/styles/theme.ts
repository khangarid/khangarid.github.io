import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

const colors = {
  bg0: "#0c0507",
  bg1: "#232323",
  fg0: "#f9f9f9",
  fg1: "#f5851f",
  fg2: "#f0780b",
  fg3: "#a9a9a9"
}

const fonts = {
  cursive: `'Kaushan Script', cursive`
}

export const theme = {
  colors,
  fonts
};

export type Theme = typeof theme;

export default styled;
export { css, keyframes, ThemeProvider };
