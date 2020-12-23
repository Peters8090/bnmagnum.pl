import { css } from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import { FC } from "react";
import { Content } from "../../../../content";

export const Logo: FC = () => {
  const styles = {
    imgRoot: css`
      height: 40px;
    `,
    textRoot: css`
      font-family: "Cabin", sans-serif;
    `,
  };

  if (Content.navigation.logoImage) {
    return (
      <img src={Content.navigation.logoImage} alt="logo" css={styles.imgRoot} />
    );
  } else {
    return (
      <Typography variant="h6" css={styles.textRoot}>
        {Content.siteName}
      </Typography>
    );
  }
};
