import { createContext, useState, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material/styles";

/**
 * Studio Calanque palette — the coast the studio is named after:
 * deep-sea navy surfaces, turquoise water as the accent, limestone
 * sand in light mode and terracotta for anything negative.
 */
export const tokens = (mode: "dark" | "light") => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e4ebed",
          200: "#c7d2d6",
          300: "#a9babf",
          400: "#8ba1a8",
          500: "#6e8991",
          600: "#586e74",
          700: "#425257",
          800: "#2c373a",
          900: "#161b1d",
        },
        primary: {
          100: "#dbe7ea",
          200: "#b7cfd5",
          300: "#93b7c1",
          400: "#0d3b4f",
          500: "#082b38",
          600: "#061f29",
          700: "#05171f",
          800: "#030f14",
          900: "#02080a",
        },
        greenAccent: {
          100: "#d5f4f0",
          200: "#abe9e2",
          300: "#82ded3",
          400: "#58d3c5",
          500: "#2ec4b6",
          600: "#259d92",
          700: "#1c766d",
          800: "#124e49",
          900: "#092724",
        },
        redAccent: {
          100: "#f9e4de",
          200: "#f3c9bd",
          300: "#edaf9c",
          400: "#e7947b",
          500: "#e07a5f",
          600: "#b3624c",
          700: "#864939",
          800: "#5a3126",
          900: "#2d1813",
        },
        blueAccent: {
          100: "#d1e8f4",
          200: "#a3d1e9",
          300: "#76b9de",
          400: "#48a2d3",
          500: "#1b8ac9",
          600: "#166ea1",
          700: "#105379",
          800: "#0b3750",
          900: "#051c28",
        },
      }
    : {
        grey: {
          100: "#161b1d",
          200: "#2c373a",
          300: "#425257",
          400: "#586e74",
          500: "#6e8991",
          600: "#8ba1a8",
          700: "#a9babf",
          800: "#c7d2d6",
          900: "#e4ebed",
        },
        primary: {
          100: "#06222c",
          200: "#0b3546",
          300: "#114b60",
          400: "#fbf8f2",
          500: "#cbd8dd",
          600: "#4a5f68",
          700: "#7c9199",
          800: "#adbcc1",
          900: "#0d3b4f",
        },
        greenAccent: {
          100: "#092724",
          200: "#124e49",
          300: "#1c766d",
          400: "#259d92",
          500: "#2ec4b6",
          600: "#58d3c5",
          700: "#82ded3",
          800: "#abe9e2",
          900: "#d5f4f0",
        },
        redAccent: {
          100: "#2d1813",
          200: "#5a3126",
          300: "#864939",
          400: "#b3624c",
          500: "#e07a5f",
          600: "#e7947b",
          700: "#edaf9c",
          800: "#f3c9bd",
          900: "#f9e4de",
        },
        blueAccent: {
          100: "#051c28",
          200: "#0b3750",
          300: "#105379",
          400: "#166ea1",
          500: "#1b8ac9",
          600: "#48a2d3",
          700: "#76b9de",
          800: "#a3d1e9",
          900: "#d1e8f4",
        },
      }),
});

export const themeSettings = (mode: "dark" | "light") => {
  const colors = tokens(mode);

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 933,
        lg: 1200,
        xl: 1536,
      }
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            success: {
              main: colors.greenAccent[500],
            },
            info: {
              main: colors.blueAccent[500],
            },
            error: {
              main: colors.redAccent[500],
            },
            warning: {
              main: "#f2b134",
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            success: {
              main: colors.greenAccent[500],
            },
            info: {
              main: colors.blueAccent[500],
            },
            error: {
              main: colors.redAccent[500],
            },
            warning: {
              main: "#f2b134",
            },
            background: {
              default: "#f5f1ea",
            },
          }),
    },
    typography: {
      fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 40,
        "@media (max-width:1399.98px)": {
          fontSize: 40,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 40,
        },
        "@media (max-width:991.98px)": {
          fontSize: 40,
        },
        "@media (max-width:767.98px)": {
          fontSize: 36,
        },
        "@media (max-width:575.98px)": {
          fontSize: 32,
        },
      },
      h2: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 24,
        "@media (max-width:1399.98px)": {
          fontSize: 24,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 24,
        },
        "@media (max-width:991.98px)": {
          fontSize: 24,
        },
        "@media (max-width:767.98px)": {
          fontSize: 20,
        },
        "@media (max-width:575.98px)": {
          fontSize: 16,
        },
      },
      h4: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 20,
        "@media (max-width:1399.98px)": {
          fontSize: 20,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 20,
        },
        "@media (max-width:991.98px)": {
          fontSize: 20,
        },
        "@media (max-width:767.98px)": {
          fontSize: 16,
        },
        "@media (max-width:575.98px)": {
          fontSize: 14,
        },
      },
      h5: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 16,
        "@media (max-width:1399.98px)": {
          fontSize: 16,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 16,
        },
        "@media (max-width:991.98px)": {
          fontSize: 16,
        },
        "@media (max-width:767.98px)": {
          fontSize: 14,
        },
        "@media (max-width:575.98px)": {
          fontSize: 12,
        },
      },
      h6: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 14,
        "@media (max-width:1399.98px)": {
          fontSize: 14,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 14,
        },
        "@media (max-width:991.98px)": {
          fontSize: 14,
        },
        "@media (max-width:767.98px)": {
          fontSize: 12,
        },
        "@media (max-width:575.98px)": {
          fontSize: 12,
        },
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (initialMode: string) => {
  const [mode, setMode] = useState<"dark" | "light">(
    initialMode as "dark" | "light"
  );
  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, toggleColorMode };
};
