import { css } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { Content } from "../../../../../../content";
import { PageTitle } from "../../../shared/PageTitle";

export const AboutRight: FC = () => {
  const styles = {
    aboutRight: css`
      padding: 0 5%;
    `,
    aboutRightTitle: css`
      padding-right: 2%;
      text-align: right;
    `,
    aboutRightContent: css`
      font-weight: 200;
      line-height: 1.2;
      text-align: justify;
    `,
  };

  const theme = useTheme();

  return (
    <Grid item lg={6} md={5} css={styles.aboutRight}>
      <PageTitle text={Content.about.title} css={styles.aboutRightTitle} />
      <ThemeProvider
        theme={responsiveFontSizes(
          createMuiTheme({
            ...theme,
            typography: {
              ...theme.typography,
              h3: {
                fontSize: "2.5rem",
              },
            },
          })
        )}
      >
        <Typography variant="h3" css={styles.aboutRightContent}>
          {Content.about.content}
        </Typography>
      </ThemeProvider>
    </Grid>
  );
};
