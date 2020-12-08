import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import React, { FC } from "react";
import { Offer, OfferProps } from "./Offer/Offer";

interface OfferListProps {
  offers: OfferProps[];
}

export const OfferList: FC<OfferListProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
      flex-direction: column;
    `,
    pagination: css`
      display: inline-block;
      margin: ${theme.spacing(2)}px auto;
    `,
  };

  return (
    <div css={styles.root}>
      {props.offers.map((offer) => (
        <Offer key={offer.normal.id} {...offer} />
      ))}
      <Pagination css={styles.pagination} count={10} color="secondary" />
    </div>
  );
};
