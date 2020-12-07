import { css } from "@emotion/core";
import { InputLabel, MenuItem, Slider, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PropType } from "../../../../../types/PropType";
import { FilterType } from "../Filters";

const lagrange = (
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
  const helperStyles = {
    root: css`
      margin: 0 ${theme.spacing(4)}px;
    `,
  };
  const styles = {
    rootTextField: css`
      ${helperStyles.root};
      min-width: 250px;

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
    rootSlider: css`
      ${helperStyles.root};
      border: 1px solid rgba(0, 0, 0, 0.23);
      border-radius: 25px;
      padding: 0 ${theme.spacing(2.5)}px;
    `,
    slider: css`
      width: 200px;
      margin-bottom: 0;

      .MuiSlider-valueLabel {
        text-align: center;
        font-size: 10px;
      }

      .MuiSlider-markLabel {
        background-color: white;
        padding: ${theme.spacing(0.5)}px ${theme.spacing(1)}px;
      }
    `,
    sliderInputLabel: css`
      transform: translate(-${theme.spacing(1.5)}px, -7.5px) scale(0.75);
      background-color: white;
      display: inline-block;
      padding-left: ${theme.spacing(1)}px;
    `,
  };

  const handleChange = (value: any) => {
    if (props.type === "range") {
      const val1 = value[0] === props.range[0] ? null : value[0];
      const val2 = value[1] === props.range[2] ? null : value[1];
      props.setValue(props.name, `[${val1}-${val2}]`);
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

  if (props.type === "range") {
    const MIN_VAL = 0;
    const MAX_VAL = 100;

    const transformSliderValue = lagrange(
      MIN_VAL,
      props.range[0],
      MAX_VAL / 2,
      props.range[1],
      -MAX_VAL / 2,
      props.range[1],
      MAX_VAL,
      props.range[2],
      -MAX_VAL,
      props.range[2]
    );

    const findInterpolationValue = (x: number) => {
      for (let i = 0; i <= 100; i++) {
        if (transformSliderValue(i) === x) {
          return i;
        }
      }
    };

    const valueLabelFormat = (value: number) => {
      let prefix = "";
      let transformedValue = value;
      let multiplier = "";

      if (value >= 1_000_000) {
        transformedValue = value / 1_000_000;
        multiplier = "mln";
      } else if (value >= 1000) {
        transformedValue = value / 1000;
        multiplier = "tys";
      }

      if (props.range[2] === value) {
        prefix = ">";
      }

      return `${prefix} ${Math.floor(transformedValue)} ${multiplier} ${
        props.unit
      }`.replace(/  +/g, " ");
    };

    const parseRange = (value: string) => {
      return /^\[([0-9.]+|null)-([0-9.]+|null)]$/
        .exec(value)
        ?.slice(1)
        .map((el, i) => (findInterpolationValue(+el) ?? i === 0 ? 0 : 100));
    };

    return (
      <div css={styles.rootSlider}>
        <div>
          <InputLabel css={styles.sliderInputLabel} shrink focused={false}>
            {props.label}
          </InputLabel>
        </div>
        <Slider
          css={styles.slider}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          marks={[
            {
              value: 0,
              label: valueLabelFormat(transformSliderValue(0)),
            },
            {
              value: 100,
              label: valueLabelFormat(transformSliderValue(100)),
            },
          ]}
          valueLabelFormat={valueLabelFormat}
          defaultValue={
            props.defaultValue ? parseRange(props.defaultValue) : [0, 100]
          }
          scale={transformSliderValue}
          onChangeCommitted={(_, value) =>
            Array.isArray(value) &&
            handleChange(value.map((el) => transformSliderValue(el)))
          }
        />
      </div>
    );
  }

  return (
    <TextField
      defaultValue={props.defaultValue}
      variant="outlined"
      size="medium"
      label={props.label}
      name={props.name}
      css={styles.rootTextField}
      select={props.type === "select"}
      InputLabelProps={{
        focused: false,
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
