import { css } from "@emotion/core";
import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useTheme } from "@material-ui/core/styles";

interface SectionProps {
  title: string;
}

export const Section: FC<SectionProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(3)}px 0;
    `,
    title: css`
      font-weight: 600;
    `,
  };

  return (
    <div css={styles.root}>
      <Typography variant="h6" gutterBottom css={styles.title}>
        {props.title}
      </Typography>
      {props.children}
    </div>
  );
};
