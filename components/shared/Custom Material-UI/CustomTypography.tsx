import { css } from "@emotion/core";
import { Typography, TypographyProps } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import React, { FC } from "react";

interface CustomTypographyProps extends TypographyProps {
  overrideFontSize?:
    | {
        responsive: boolean;
        value: number;
      }
    | number;
  fontWeight?: number;
  lineHeight?: number;
}

export const CustomTypography: FC<CustomTypographyProps> = (props) => {
  const styles = {
    root: css`
      ${props.fontWeight &&
      css`
        font-weight: ${props.fontWeight};
      `};
      ${props.lineHeight &&
      css`
        line-height: ${props.lineHeight};
      `};
    `,
  };
  const theme = useTheme();

  const overrideTheme =
    props.overrideFontSize === undefined
      ? createMuiTheme(theme)
      : ((
          typeof props.overrideFontSize === "object"
            ? props.overrideFontSize.responsive
            : true
        )
          ? responsiveFontSizes
          : <T extends any>(a: T): T => a)(
          createMuiTheme({
            ...theme,
            typography: {
              [props.variant ?? "body1"]: {
                fontSize:
                  (typeof props.overrideFontSize === "object"
                    ? props.overrideFontSize.value
                    : props.overrideFontSize) + "rem",
              },
            },
          })
        );

  return (
    <ThemeProvider theme={overrideTheme}>
      <Typography {...props} css={styles.root}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};
