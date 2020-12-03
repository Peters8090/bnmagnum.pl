import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Section } from "../../Section";

interface GoogleMapsIFrameSectionProps {
  location: string;
}

export const GoogleMapsIFrameSection: FC<GoogleMapsIFrameSectionProps> = (
  props
) => {
  const theme = useTheme();
  const styles = {
    iframeWrapper: css`
      width: 100%;
      position: relative;
      padding-bottom: 75%;
      height: 0;
      overflow: hidden;
    `,
    iframe: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;

      display: block;
      margin: ${theme.spacing(1.5)}px auto 0;
      border: 2px solid #bdbdbd;
    `,
  };

  return (
    <Section title="Przybliżona lokalizacja">
      <div css={styles.iframeWrapper}>
        <iframe
          css={styles.iframe}
          src={`https://www.google.com/maps?q=${encodeURI(
            props.location
          )}&output=embed`}
        />
      </div>
    </Section>
  );
};
