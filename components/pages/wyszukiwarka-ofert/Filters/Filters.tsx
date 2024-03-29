import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUrlWithQueryString } from "../../../../hooks/useUrlWithQueryString";
import { Filter } from "./Filter/Filter";

export type FilterType = {
  name: string;
  label: string;
} & (
  | {
      type: "select";
      values: { label: string; value: string }[];
    }
  | {
      type: "text";
    }
  | {
      type: "range";
      range: [number, number, number];
      unit: string;
    }
);

const filterList: FilterType[] = [
  {
    label: "Szukaj...",
    name: "search",
    type: "text",
  },
  {
    label: "Cena",
    name: "price",
    type: "range",
    range: [0, 1_000_000, 10_000_000],
    unit: "zł",
  },
  {
    label: "Rodzaj nieruchomości",
    name: "property_type",
    type: "select",

    values: [
      {
        value: "mieszkania",
        label: "mieszkania",
      },
      {
        value: "domy",
        label: "domy",
      },
      {
        value: "dzialki",
        label: "działki",
      },
      {
        value: "lokale",
        label: "lokale",
      },
    ],
  },
  {
    label: "Typ transakcji",
    name: "transaction_type",
    type: "select",

    values: [
      { value: "sprzedaz", label: "Sprzedaż" },
      { value: "wynajem", label: "Wynajem" },
    ],
  },
  {
    label: "Powierzchnia",
    name: "area",
    type: "range",
    range: [0, 200, 2500],
    unit: "m²",
  },
  {
    label: "Lokalizacja",
    name: "location",
    type: "text",
  },
  {
    label: "Liczba pokoi",
    name: "rooms",
    type: "range",
    range: [0, 5, 10],
    unit: "",
  },
];

export const Filters = () => {
  const { register, handleSubmit: handleHookFormSubmit, setValue } = useForm();

  const theme = useTheme();
  const styles = {
    root: css`
      padding: ${theme.spacing(2.5)}px 0;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
    `,
  };

  const router = useRouter();

  const { url, queryParsed } = useUrlWithQueryString();

  const handleSubmit = handleHookFormSubmit((data) => {
    const dataWithoutEmptyValues: any = Object.fromEntries(
      Object.entries(data).filter(([_, val]) => val === 0 || !!val)
    );

    const dataQueryString = new URLSearchParams(
      dataWithoutEmptyValues
    ).toString();

    router.push(url + (dataQueryString ? "?" + dataQueryString : ""));
  });

  const [lastTimeout, setLastTimeout] = useState<NodeJS.Timeout>();

  return (
    <form css={styles.root}>
      {filterList.map((filter, i) => (
        <Filter
          {...filter}
          key={i}
          register={register}
          defaultValue={queryParsed[filter.name]}
          handleSubmit={handleSubmit}
          lastTimeout={lastTimeout}
          setLastTimeout={setLastTimeout}
          setValue={setValue}
        />
      ))}
    </form>
  );
};
