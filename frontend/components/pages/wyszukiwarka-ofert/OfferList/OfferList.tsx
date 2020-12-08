import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Offer, OfferProps } from "./Offer/Offer";
import { PaginationWithFetching } from "./PaginationWithFetching/PaginationWithFetching";

interface OfferListProps {
  offers: OfferProps[];
  page: number;
  totalPages: number;
}

export const OfferList: FC<OfferListProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
      flex-direction: column;
    `,
  };

  console.log(props);

  return (
    <div css={styles.root}>
      {props.offers.map((offer) => (
        <Offer key={offer.normal.id} {...offer} />
      ))}
      <PaginationWithFetching page={props.page} totalPages={props.totalPages} />
    </div>
  );
};
