import { css } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import React, { FC } from "react";
import { Content } from "../../../../../../content";
import { CustomTypography } from "../../../../../shared/Custom Material-UI/CustomTypography";
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
  };

  return (
    <Grid item lg={6} md={5} css={styles.aboutRight}>
      <PageTitle
        text={Content.about.route.displayName}
        css={styles.aboutRightTitle}
      />
      <CustomTypography
        overrideFontSize={2.5}
        fontWeight={200}
        lineHeight={1.2}
        align="justify"
        variant="h3"
      >
        {Content.about.content}
      </CustomTypography>
    </Grid>
  );
};
