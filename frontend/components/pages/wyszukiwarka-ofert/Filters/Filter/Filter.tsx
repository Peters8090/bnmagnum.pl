import { css } from "@emotion/core";
import { MenuItem, Slider, TextField, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PropType } from "../../../../../types/PropType";
import { FilterType } from "../Filters";

type FilterProps = FilterType & {
  register: PropType<ReturnType<typeof useForm>, "register">;
  defaultValue?: any;
  handleSubmit: () => void;
  lastTimeout: NodeJS.Timeout | undefined;
  setLastTimeout: Dispatch<SetStateAction<NodeJS.Timeout | undefined>>;
  setValue: (
    name: string,
    value: any,
    config?:
      | Partial<{
          shouldValidate: boolean;
          shouldDirty: boolean;
        }>
      | undefined
  ) => void;
};

export const Filter: FC<FilterProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: ${theme.spacing(2)}px ${theme.spacing(1.5)}px;
    `,
    textField: css`
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
    slider: css`
      .MuiSlider-valueLabel {
        text-align: center;
        font-size: 10px;
      }
    `,
  };

  const handleChange = (value: any) => {
    if (props.type === "range") {
      props.setValue(props.name, `[${value[0]}-${value[1]}]`);
    } else {
      props.setValue(props.name, value);
    }
    if (["range", "select"].includes(props.type)) {
      props.handleSubmit();
    } else {
      const timeoutId = setTimeout(props.handleSubmit, 1000);
      if (props.lastTimeout) {
        clearTimeout(props.lastTimeout);
      }
      props.setLastTimeout(timeoutId);
    }
  };

  useEffect(() => {
    props.register({
      name: props.name,
    });
  }, [props.register]);

  const getF = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
    x5: number,
    y5: number
  ) => (x: number) =>
    (y1 * ((x - x2) * (x - x3) * (x - x4) * (x - x5))) /
      ((x1 - x2) * (x1 - x3) * (x1 - x4) * (x1 - x5)) +
    (y2 * ((x - x1) * (x - x3) * (x - x4) * (x - x5))) /
      ((x2 - x1) * (x2 - x3) * (x2 - x4) * (x2 - x5)) +
    (y3 * ((x - x1) * (x - x2) * (x - x4) * (x - x5))) /
      ((x3 - x1) * (x3 - x2) * (x3 - x4) * (x3 - x5)) +
    (y4 * ((x - x1) * (x - x2) * (x - x3) * (x - x5))) /
      ((x4 - x1) * (x4 - x2) * (x4 - x3) * (x4 - x5)) +
    (y5 * ((x - x1) * (x - x2) * (x - x3) * (x - x4))) /
      ((x5 - x1) * (x5 - x2) * (x5 - x3) * (x5 - x4));

  if (props.type === "range") {
    const quadratic = getF(
      0,
      props.range[0],
      50,
      props.range[1],
      100,
      props.range[2],
      -100,
      props.range[2],
      -50,
      props.range[1]
    );

    return (
      <div>
        <Typography gutterBottom>
          {props.label} {props.range[0]} - {props.range[1]}
        </Typography>
        <Slider
          css={[styles.root, styles.slider]}
          valueLabelDisplay="on"
          min={0}
          max={100}
          valueLabelFormat={(value) => {
            if (value > 1_000_000) {
              return `${Math.floor(value / 1_000_000)} mln`;
            }
            if (value > 1000) {
              return `${Math.floor(value / 1000)} tys`;
            }
            return value;
          }}
          scale={(x) =>
            Math.floor(props.curve === "linear" ? quadratic(x) : quadratic(x))
          }
          defaultValue={[props.range[0], props.range[2]]}
          onChangeCommitted={(_, value) => handleChange(value)}
        />
      </div>
    );
  }

  return (
    <TextField
      defaultValue={props.defaultValue}
      variant="filled"
      size="small"
      label={props.label}
      name={props.name}
      css={[styles.root, styles.textField]}
      select={props.type === "select"}
      InputLabelProps={{
        focused: false,
      }}
      InputProps={{
        disableUnderline: true,
      }}
      onChange={(e) => handleChange(e.target.value)}
    >
      {props.type === "select" &&
        [
          { label: "Nie wybrano", value: undefined },
          ...props.values,
        ].map(({ label, value }) => <MenuItem value={value}>{label}</MenuItem>)}
    </TextField>
  );
};
