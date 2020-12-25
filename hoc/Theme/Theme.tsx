import { SerializedStyles } from "@emotion/core";
import css from "@emotion/css";
import { plPL } from "@material-ui/core/locale";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import { FC } from "react";
import { GlobalStyles } from "./GlobalStyles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customMixins: {
      flexCentered: SerializedStyles;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions extends Theme {}
}

export const Theme: FC = (props) => {
  const theme = responsiveFontSizes(
    createMuiTheme(
      {
        palette: {
          primary: { main: "#f50057" },
          secondary: { main: "#1976d2" },
        },
        overrides: {
          MuiLink: {
            root: {
              cursor: "pointer",
            },
          },
          MuiFormControlLabel: {
            root: {
              userSelect: "none",
            },
          },
        },
        customMixins: {
          flexCentered: css`
            display: flex;
            justify-content: center;
            align-items: center;
          `,
        },
      },
      plPL
    ),
    {
      factor: 2,
    }
  );

  return (
    <StylesProvider injectFirst>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
};
