import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { FC } from "react";
import { Content } from "../../../../content";

export const Logo: FC = () => {
  const theme = useTheme();
  const styles = {
    imgRoot: css`
      height: 65px;

      ${theme.breakpoints.down("sm")} {
        height: 50px;
      }

      margin: ${theme.spacing(2)}px 0;
    `,
    textRoot: css`
      font-family: "Cabin", sans-serif;
    `,
  };

  if (Content.navigation.logoImage) {
    return (
      <Image
        width={60}
        height={60}
        src={Content.navigation.logoImage}
        alt="logo"
        css={styles.imgRoot}
      />
    );
  } else {
    return (
      <Typography variant="h6" css={styles.textRoot}>
        {Content.siteName}
      </Typography>
    );
  }
};
