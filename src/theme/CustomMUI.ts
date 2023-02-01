import { Roboto } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

/** Custom theme instance. */
let theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
