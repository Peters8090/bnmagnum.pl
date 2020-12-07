import { css } from "@emotion/core";
import {
  InputLabel,
  MenuItem,
  Slider,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PropType } from "../../../../../types/PropType";
import { FilterType } from "../Filters";

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

function ValueLabelComponent(props: {
  children: React.ReactElement;
  open: boolean;
  value: number;
}) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export const Filter: FC<FilterProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin: 0 ${theme.spacing(4)}px;
    `,
    textField: css`
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
    sliderRoot: css`
      display: flex;
      flex-direction: column;
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
    const interpolation = getF(
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

    const valueLabelFormat = (value: number) => {
      let prefix = "";
      let newVal = value;
      let multiplier = "";

      if (value > 1_000_000) {
        newVal = value / 1_000_000;
        multiplier = "mln";
      } else if (value > 1000) {
        newVal = value / 1000;
        multiplier = "tys";
      }

      if (props.range[2] === value) {
        prefix = ">";
      }

      return `${prefix} ${Math.floor(newVal)} ${multiplier} ${
        props.unit
      }`.replace(/  +/g, " ");
    };

    return (
      <div css={[styles.root, styles.sliderRoot]}>
        <div>
          <InputLabel css={styles.sliderInputLabel} shrink focused={false}>
            {props.label}
          </InputLabel>
        </div>
        <Slider
          css={styles.slider}
          valueLabelDisplay="auto"
          // ValueLabelComponent={ValueLabelComponent}
          min={0}
          max={100}
          marks={[
            {
              value: 0,
              label: valueLabelFormat(interpolation(0)),
            },
            {
              value: 100,
              label: valueLabelFormat(interpolation(100)),
            },
          ]}
          valueLabelFormat={valueLabelFormat}
          defaultValue={
            props.defaultValue
              ? (() => {
                  const findInterpolationValue = (x: number, i: number) => {
                    for (let i = 0; i <= 100; i++) {
                      if (interpolation(i) === x) {
                        return i;
                      }
                    }
                    if (i === 0) {
                      return 0;
                    }
                    return 100;
                  };

                  const ret = /^\[([0-9.]+|null)-([0-9.]+|null)]$/
                    .exec(props.defaultValue)
                    ?.slice(1)
                    .map((el, i) => findInterpolationValue(+el, i));

                  console.log(ret);

                  return ret;
                })()
              : [0, 100]
          }
          scale={interpolation}
          onChangeCommitted={(_, value) =>
            Array.isArray(value) &&
            handleChange(value.map((el) => interpolation(el)))
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
      css={[styles.root, styles.textField]}
      select={props.type === "select"}
      InputLabelProps={{
        focused: false,
      }}
      InputProps={{}}
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
