import { css } from "@emotion/core";
import { MenuItem, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";

export const Filter = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(1)}px 0;
      min-width: 214px;

      .MuiInputBase-root,
      .MuiFormLabel-root {
        padding-left: ${theme.spacing(1)}px;
      }

      .MuiInputBase-root {
        border-radius: 25px;
      }
    `,
  };

  return (
    <TextField
      variant="filled"
      size="small"
      label="Szukaj"
      select
      css={styles.root}
      InputLabelProps={{
        focused: false,
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};
