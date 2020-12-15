import { css } from "@emotion/core";
import { Typography } from "@material-ui/core";
import { decode } from "he";
import React, { FC } from "react";
import { formatText } from "../../../../../../../functions/formatText";
import { Section } from "../../Section";

interface DescriptionSectionProps {
  description: string;
}

export const DescriptionSection: FC<DescriptionSectionProps> = (props) => {
  const styles = {
    sectionDesc: css`
      font-weight: 400;
      white-space: pre-line;
    `,
  };

  return (
    <Section title="Opis">
      <Typography align="justify" variant="h6" css={styles.sectionDesc}>
        {formatText(decode(props.description))}
      </Typography>
    </Section>
  );
};
