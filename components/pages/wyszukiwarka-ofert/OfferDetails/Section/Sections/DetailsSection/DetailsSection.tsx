import { css } from "@emotion/core";
import { Divider, Typography } from "@material-ui/core";
import { lighten, useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Section } from "../../Section";

interface DetailsSectionProps {
  params: Record<string, string>;
}

export const DetailsSection: FC<DetailsSectionProps> = (props) => {
  const theme = useTheme();
  const styles = {
    detailText: css`
      display: flex;
      justify-content: space-between;
      margin: ${theme.spacing(0.5)}px 0;
    `,
    detailTextName: css`
      font-weight: 500;
      color: ${lighten(theme.palette.text.primary, 0.2)};
    `,
    detailDivider: css`
      height: 3px;
    `,
  };

  const paramsSorted = (
    Object.entries(props.params) as [string, string | number][]
  ).sort();

  // move id param up

  const nrIndex = paramsSorted.findIndex(([k]) => k === "Numer oferty");

  if (nrIndex !== -1) {
    paramsSorted.unshift(paramsSorted.splice(nrIndex, 1)[0]);
  }

  return (
    <Section title="Szczegóły">
      {paramsSorted.map((el) => (
        <div>
          <div css={styles.detailText}>
            <Typography align="left" css={styles.detailTextName} variant="h6">
              {el[0]}
            </Typography>
            <Typography align="right" color="textSecondary" variant="h6">
              {el[1]}
            </Typography>
          </div>
          <Divider css={styles.detailDivider} />
        </div>
      ))}
    </Section>
  );
};
