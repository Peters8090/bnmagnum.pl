import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PropType } from "../../../../../types/PropType";
import { FilterType } from "../Filters";
import { NormalFilter } from "./NormalFilter/NormalFilter";
import { RangeFilter } from "./RangeFilter/RangeFilter";

export type FilterProps = FilterType & {
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
      padding: 0 ${theme.spacing(4)}px;
    `,
  };

  const handleChange = (value: any) => {
    props.setValue(props.name, value);
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

  return (
    <div css={styles.root}>
      {props.type === "range" ? (
        <RangeFilter filterProps={props} handleChange={handleChange} />
      ) : (
        <NormalFilter filterProps={props} handleChange={handleChange} />
      )}
    </div>
  );
};
