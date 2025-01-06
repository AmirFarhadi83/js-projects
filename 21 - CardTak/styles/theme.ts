"use client";

import { createTheme } from "@mui/material/styles";
import { yekan } from "@/styles/fonts";

const commonColors = {
  raisinBlack: "#242024",
  antiFlashWhite: "#F3F4F5",
  cadmiumRed: "#E30220",
  UERed: "#BF0000",
  gainsboro: "#DDDDDD",
};

const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { main: commonColors.cadmiumRed },
    secondary: { main: commonColors.UERed },
    background: { default: commonColors.antiFlashWhite, paper: "#FFFFFF" },
    text: {
      primary: commonColors.raisinBlack,
      secondary: commonColors.UERed,
    },
    action: { active: commonColors.cadmiumRed },
    success: { main: commonColors.gainsboro },
    error: { main: "#E63946" },
  },
  typography: {
    fontFamily: yekan.style.fontFamily,
    h1: { color: commonColors.raisinBlack },
    h2: { color: commonColors.raisinBlack },
    h3: { color: commonColors.raisinBlack },
    h4: { color: commonColors.raisinBlack },
    h5: { color: commonColors.raisinBlack },
    h6: { color: commonColors.raisinBlack },
    subtitle1: { color: commonColors.raisinBlack },
    subtitle2: { color: commonColors.raisinBlack },
    body1: { color: commonColors.raisinBlack },
    body2: { color: commonColors.raisinBlack },
    button: { color: "#FFFFFF" },
    caption: { color: commonColors.raisinBlack },
    overline: { color: commonColors.raisinBlack },
  },
});

const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: { main: commonColors.cadmiumRed },
    secondary: { main: commonColors.UERed },
    background: { default: commonColors.raisinBlack, paper: "#333333" },
    text: {
      primary: commonColors.antiFlashWhite,
      secondary: commonColors.cadmiumRed,
    },
    action: { active: commonColors.cadmiumRed },
    success: { main: commonColors.gainsboro },
    error: { main: "#E63946" },
  },
  typography: {
    fontFamily: yekan.style.fontFamily,
    h1: { color: commonColors.antiFlashWhite },
    h2: { color: commonColors.antiFlashWhite },
    h3: { color: commonColors.antiFlashWhite },
    h4: { color: commonColors.antiFlashWhite },
    h5: { color: commonColors.antiFlashWhite },
    h6: { color: commonColors.antiFlashWhite },
    subtitle1: { color: commonColors.antiFlashWhite },
    subtitle2: { color: commonColors.antiFlashWhite },
    body1: { color: commonColors.antiFlashWhite },
    body2: { color: commonColors.antiFlashWhite },
    button: { color: "#FFFFFF" },
    caption: { color: commonColors.antiFlashWhite },
    overline: { color: commonColors.antiFlashWhite },
  },
});

export { lightTheme, darkTheme };
