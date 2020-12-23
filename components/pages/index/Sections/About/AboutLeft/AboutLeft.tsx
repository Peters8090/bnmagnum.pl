import { css } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import { FC } from "react";
import { Content } from "../../../../../../content";

export const AboutLeft: FC = () => {
  const styles = {
    aboutLeft: css`
      width: 100%;
      border-radius: 80px;
    `,
  };

  return (
    <Grid item lg={4} md={5} xs={8}>
      <img src={Content.about.image} alt="dom" css={styles.aboutLeft} />
    </Grid>
  );
};
