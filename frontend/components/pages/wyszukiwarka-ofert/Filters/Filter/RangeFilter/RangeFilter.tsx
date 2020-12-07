import { css } from "@emotion/core";
import { InputLabel, Slider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { lagrange } from "../../../../../../functions/mathematical/lagrange";
import { NormalFilterProps } from "../NormalFilter/NormalFilter";

export const RangeFilter: FC<NormalFilterProps> = (props) => {
  if (props.filterProps.type !== "range") return null;

  const theme = useTheme();
  const styles = {
    root: css`
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
    inputLabel: css`
      transform: translate(-${theme.spacing(1.5)}px, -7.5px) scale(0.75);
      background-color: white;
      display: inline-block;
      padding-left: ${theme.spacing(1)}px;
    `,
  };

  const MIN_VAL = 0;
  const MAX_VAL = 100;

  const isLinear =
    props.filterProps.range[2] / 2 === props.filterProps.range[1];

  const transformSliderValue = isLinear
    ? lagrange(
        MIN_VAL,
        props.filterProps.range[0],
        MAX_VAL,
        props.filterProps.range[2],
        MAX_VAL * 2,
        props.filterProps.range[2] * 2,
        MAX_VAL * 4,
        props.filterProps.range[2] * 4,
        MAX_VAL * 6,
        props.filterProps.range[2] * 6
      )
    : lagrange(
        MIN_VAL,
        props.filterProps.range[0],
        MAX_VAL / 2,
        props.filterProps.range[1],
        -MAX_VAL / 2,
        props.filterProps.range[1],
        MAX_VAL,
        props.filterProps.range[2],
        -MAX_VAL,
        props.filterProps.range[2]
      );

  const findInterpolationValue = (x: number) => {
    for (let i = 0; i <= 100; i++) {
      if (transformSliderValue(i) === x) {
        return i;
      }
    }
  };

  const valueLabelFormat = (value: number) => {
    if (props.filterProps.type !== "range") return "";

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

    if (props.filterProps.range[2] === value) {
      prefix = ">";
    }

    return `${prefix} ${Math.round(transformedValue)} ${multiplier} ${
      props.filterProps.unit
    }`.replace(/  +/g, " ");
  };

  const parseRange = (value: string) => {
    return /^\[([0-9.]+|null)-([0-9.]+|null)]$/
      .exec(value)
      ?.slice(1)
      .map(
        (el, i) => findInterpolationValue(+el) ?? (i === 0 ? MIN_VAL : MAX_VAL)
      );
  };

  const handleChange = (values: number[]) => {
    if (props.filterProps.type !== "range") return null;

    const transformedValues = values.map((v) => transformSliderValue(v));

    const from =
      transformedValues[0] === props.filterProps.range[0]
        ? null
        : transformedValues[0];
    const to =
      transformedValues[1] === props.filterProps.range[2]
        ? null
        : transformedValues[1];
    props.handleChange(`[${from}-${to}]`);
  };

  const step = Math.max(
    MAX_VAL / props.filterProps.range[2],
    (MAX_VAL - MIN_VAL) / 100
  );

  const marks = [
    {
      value: MIN_VAL,
      label: valueLabelFormat(transformSliderValue(MIN_VAL)),
    },
    {
      value: MAX_VAL,
      label: valueLabelFormat(transformSliderValue(MAX_VAL)),
    },
  ];

  return (
    <div css={styles.root}>
      <div>
        <InputLabel css={styles.inputLabel} shrink focused={false}>
          {props.filterProps.label}
        </InputLabel>
      </div>
      <Slider
        css={styles.slider}
        valueLabelDisplay="auto"
        min={MIN_VAL}
        max={MAX_VAL}
        step={step}
        marks={marks}
        valueLabelFormat={valueLabelFormat}
        defaultValue={
          props.filterProps.defaultValue
            ? parseRange(props.filterProps.defaultValue)
            : [MIN_VAL, MAX_VAL]
        }
        scale={transformSliderValue}
        onChangeCommitted={(_, value) =>
          Array.isArray(value) && handleChange(value)
        }
      />
    </div>
  );
};
