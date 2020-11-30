import css from "@emotion/css";
import { RouteType } from "../../interfaces and types/RouteType";
import { OfferList } from "../../components/pages/wyszukiwarka-ofert/OfferList/OfferList";
import { OfferDetails } from "../../components/pages/wyszukiwarka-ofert/OfferDetails/OfferDetails";
import { useCurrentNavigationHeight } from "../../hooks/useCurrentNavigationHeight";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { useMediaQuery } from "@material-ui/core";
import { HiddenCond } from "../../components/shared/HiddenCond/HiddenCond";
import { GetServerSideProps } from "next";
import axios from "axios";
import queryString from "query-string";

export const useOfferName = () => {
  const { query } = useRouter();
  return query.offerName!?.[0];
};

const OfferSearch: RouteType = () => {
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

  return (
    <div css={styles.root}>
      <HiddenCond
        condition={isMobile ? !!offerName : false}
        implementation="css"
      >
        <OfferList />
      </HiddenCond>
      <HiddenCond
        condition={isMobile ? !offerName : !offerName}
        implementation="css"
      >
        <OfferDetails />
      </HiddenCond>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = (() => {
    if (context.req.url) {
      const q = queryString.extract(context.req.url);
      if (q) {
        return "?" + q;
      }
      return "";
    }
    return "";
  })();

  const response = await axios({
    method: "GET",
    url: `https://api.bnmagnum.pl${query}`,
  });

  return {
    props: response.data,
  };
};

OfferSearch.displayName = "Wyszukiwarka ofert";
OfferSearch.routeName = "/wyszukiwarka-ofert/[[...offerName]]";

export default OfferSearch;
