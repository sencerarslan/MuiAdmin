import { PaletteOptions } from "@mui/material";

export interface colorModel {
  color1: string;
  color2: string;
  color3: string;
}

export const lightCustomColor: Partial<colorModel> = {
  color1: "#1C1B20",
  color2: "#fff",
  color3: "#F9F9F9",
};
export const darkCustomColor: Partial<colorModel> = {
  color1: "#1C1B20",
  color2: "#fff",
  color3: "#F9F9F9",
};

export const lightThemeColor: Partial<PaletteOptions> = {
  mode: "light",
  background: {
    default: "#f9fafb",
  },
  primary: {
    main: "#1C1B20",
  },
  secondary: {
    main: "#3366FF",
  },
  ...(lightCustomColor as colorModel),
};

export const darkThemeColor: Partial<PaletteOptions> = {
  mode: "dark",
  background: {
    default: "#161c24",
  },
  primary: {
    main: "#36B37E",
  },
  secondary: {
    main: "#3366FF",
  },
  ...(darkCustomColor as colorModel),
};
