import { createContext } from "react";

export const THEMETYPE = {
  LIGHT: "light",
  DARK: "dark"
};
export const themes = {
  light: {
    backgroundColor: "",
    color: "#515a6e"
  },
  dark: {
    backgroundColor: "#17233d",
    color: "#f8f8f9"
  }
};

// 主题色
export const ThemeContext = createContext(themes[THEMETYPE.LIGHT]);
ThemeContext.displayName = "ThemeContextdisplayName";

export const customContext = createContext("custom");
