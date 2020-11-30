import { FC } from "react";
import { Offer, OfferProps } from "./Offer/Offer";

interface OfferListProps {
  offers: OfferProps[];
}

export const OfferList: FC<OfferListProps> = (props) => {
  return (
    <div>
      {props.offers.map((offer) => (
        <Offer key={offer.normal.id} {...offer} />
      ))}
    </div>
  );
};
