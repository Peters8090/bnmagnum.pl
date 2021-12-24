import { css } from "@emotion/core";
import { MenuItem, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { FilterProps } from "../Filter";

export interface NormalFilterProps {
  handleChange: (value: any) => void;
  filterProps: FilterProps;
}

export const NormalFilter: FC<NormalFilterProps> = (props) => {
  const theme = useTheme();
  const styles = {
    rootTextField: css`
      min-width: 250px;

      .MuiInputBase-root,
      .MuiSelect-root {
        border-radius: 25px;
      }

      .MuiFormLabel-root {
        background-color: white;
        padding: 0 ${theme.spacing(1)}px;
        padding-bottom: ${theme.spacing(0.5)}px;
        border-radius: ${theme.spacing(2)}px;
      }
    `,
  };

  return (
    <TextField
      defaultValue={props.filterProps.defaultValue}
      variant="outlined"
      size="medium"
      label={props.filterProps.label}
      name={props.filterProps.name}
      css={styles.rootTextField}
      select={props.filterProps.type === "select"}
      InputLabelProps={{
        focused: false,
      }}
      onChange={(e) => props.handleChange(e.target.value)}
    >
      {props.filterProps.type === "select" &&
        [
          { label: "Nie wybrano", value: undefined },
          ...props.filterProps.values,
        ].map(({ label, value }) => (
          <MenuItem value={value} key={label}>
            {label}
          </MenuItem>
        ))}
    </TextField>
  );
};
