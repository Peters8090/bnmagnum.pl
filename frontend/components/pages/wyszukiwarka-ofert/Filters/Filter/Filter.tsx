import { css } from "@emotion/core";
import { MenuItem, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { PropType } from "../../../../../types/PropType";
import { FilterType } from "../Filters";

type FilterProps = FilterType & {
  register: PropType<ReturnType<typeof useForm>, "register">;
};

export const Filter: FC<FilterProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(2)}px ${theme.spacing(1.5)}px;
      min-width: 214px;

      .MuiInputBase-root,
      .MuiFormLabel-root {
        padding-left: ${theme.spacing(1)}px;
      }

      .MuiInputBase-root {
        border-radius: 25px;
      }
      &::hover {
        display: none;
      }
    `,
  };

  return (
    <TextField
      inputRef={props.register}
      variant="filled"
      size="small"
      label={props.label}
      name={props.name}
      css={styles.root}
      select={props.select}
      InputLabelProps={{
        focused: false,
      }}
      InputProps={{
        disableUnderline: true,
      }}
      onChange={() => console.log("a")}
    >
      {props.select &&
        props.values.map(({ label, value }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
    </TextField>
  );
};
