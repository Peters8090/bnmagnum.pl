import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { FC } from "react";
import { Footer } from "../../../../components/pages/index/Sections/Footer/Footer";
import { RouteLink } from "../../../../functions/RouteLink";
import { RouteType } from "../../../../interfaces and types/RouteType";
import { homeSections } from "../../../../pages";
import OfferSearch from "../../../../pages/wyszukiwarka-ofert/[[...offerName]]";
import {
  NavigationItem,
  NavigationItemProps,
} from "./NavigationItem/NavigationItem";

interface NavigationItemsProps {
  navigationItemProps?: Partial<NavigationItemProps>;
}

export const NavigationItems: FC<NavigationItemsProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};

      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }

      margin: 0 ${theme.spacing(2)}px;
    `,
  };

  const routeList: RouteType<any>[] = [...homeSections, OfferSearch];

  const footerIndex = routeList.indexOf(Footer);
  const lastElementIndex = routeList.length - 1;

  if (footerIndex !== -1) {
    [routeList[footerIndex], routeList[lastElementIndex]] = [
      routeList[lastElementIndex],
      routeList[footerIndex],
    ];
  }

  return (
    <div css={styles.root}>
      {routeList.map((route) => (
        <NavigationItem
          text={route.displayName}
          LinkProps={RouteLink(route)}
          {...props.navigationItemProps}
        />
      ))}
    </div>
  );
};
