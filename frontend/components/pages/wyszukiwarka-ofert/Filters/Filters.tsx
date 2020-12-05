import React, { useState } from "react";
import { Filter } from "./Filter/Filter";
import { useForm } from "react-hook-form";
import { css } from "@emotion/core";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useUrlWithQueryString } from "../../../../hooks/useUrlWithQueryString";

export type FilterType = {
  name: string;
  label: string;
} & (
  | {
      values: { label: string; value: string }[];
      select: true;
    }
  | {
      select: false;
    }
);

const filterList: FilterType[] = [
  {
    label: "Szukaj...",
    name: "advertisement_text",
    select: false,
  },
  {
    label: "Cena",
    name: "price",
    select: false,
  },
  {
    label: "Rodzaj nieruchomości",
    name: "property_type",
    select: true,
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
    select: true,
    values: [
      { value: "sprzedaz", label: "Sprzedaż" },
      { value: "wynajem", label: "Wynajem" },
    ],
  },
  {
    label: "Powierzchnia",
    name: "powierzchnia",
    select: false,
  },
  {
    label: "Lokalizacja",
    name: "location",
    select: false,
  },
  {
    label: "Liczba pokoi",
    name: "liczbapokoi",
    select: false,
  },

  {
    label: "Strona",
    name: "page",
    select: false,
  },
];

export const Filters = () => {
  const { register, handleSubmit: handleHookFormSubmit, setValue } = useForm();

  const styles = {
    root: css`
      display: flex;
      overflow-x: auto;
    `,
    submitButton: css`
      display: none;
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
      {filterList.map((filter) => (
        <Filter
          {...filter}
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
