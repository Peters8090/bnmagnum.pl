import { createContext, useContext } from "react";
import { OfferProps } from "../../OfferList/Offer/Offer";

export const OfferDetailsContext = createContext<OfferProps>(
  (null as unknown) as OfferProps
);

const useOfferDetails = () => useContext(OfferDetailsContext);
