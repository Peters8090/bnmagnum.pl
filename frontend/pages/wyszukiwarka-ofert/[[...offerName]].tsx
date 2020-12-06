import css from "@emotion/css";
import { RouteType } from "../../interfaces and types/RouteType";
import { OfferList } from "../../components/pages/wyszukiwarka-ofert/OfferList/OfferList";
import { OfferDetails } from "../../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails";
import { useCurrentNavigationHeight } from "../../hooks/useCurrentNavigationHeight";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { useMediaQuery } from "@material-ui/core";
import { HiddenCond } from "../../components/shared/HiddenCond/HiddenCond";
import axios from "axios";
import queryString from "query-string";
import { OfferProps } from "../../components/pages/wyszukiwarka-ofert/OfferList/Offer/Offer";
import { RouteLink } from "../../functions/RouteLink";
import { useUrlWithQueryString } from "../../hooks/useUrlWithQueryString";
import { useEffect } from "react";

export const useOfferName = () => {
  const { query } = useRouter();
  return query.offerName!?.[0];
};

interface OfferSearchProps {
  offersWithPagination: {
    docs: OfferProps[];
  };
}

const OfferSearch: RouteType<OfferSearchProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navHeight = useCurrentNavigationHeight();
  const offerName = useOfferName();
  const styles = {
    root: css`
      background-color: #e0e0e0;

      ${theme.breakpoints.up("md")} {
        display: grid;
        height: calc(100vh - ${navHeight}px);

        grid-template-columns: 1fr 1fr;
        & > * {
          outline: 0.5px solid gray;
          overflow-y: scroll;
        }
      }
    `,
  };

  const selectedOffer = props.offersWithPagination.docs.find(
    (o) => o.normal.slug === offerName
  );

  const router = useRouter();

  const { query } = useUrlWithQueryString();

  useEffect(() => {
    if (!selectedOffer) {
      const { href, as } = RouteLink(OfferSearch, undefined, query);

      router.push(href, as);
    }
  }, [selectedOffer]);

  return (
    <div css={styles.root}>
      <HiddenCond
        condition={isMobile ? !!offerName : false}
        implementation="css"
      >
        <OfferList offers={props.offersWithPagination.docs} />
      </HiddenCond>
      {selectedOffer && <OfferDetails key={offerName} {...selectedOffer} />}
    </div>
  );
};

OfferSearch.getInitialProps = async (context) => {
  const query = queryString.stringify(
    queryString.parseUrl(context.asPath ?? "").query
  );

  const response = await axios({
    method: "GET",
    url: `https://api.bnmagnum.pl?${query || ""}`,
  });

  return {
    offersWithPagination: response.data,
  };
};

OfferSearch.displayName = "Wyszukiwarka ofert";
OfferSearch.routeName = "/wyszukiwarka-ofert/[[...offerName]]";

export default OfferSearch;
