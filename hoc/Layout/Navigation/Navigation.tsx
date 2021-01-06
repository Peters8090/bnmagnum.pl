import { css } from "@emotion/core";
import {
  Collapse,
  Divider,
  Drawer,
  Hidden,
  Icon,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { useRouter } from "next/router";
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from "react";
import { Filters } from "../../../components/pages/wyszukiwarka-ofert/Filters/Filters";
import OfferSearch, {
  useOfferName,
} from "../../../pages/oferty/[[...offerName]]";
import { Logo } from "./Logo/Logo";
import { NavigationItems } from "./NavigationItems/NavigationItems";

export const Navigation: ForwardRefExoticComponent<
  RefAttributes<unknown>
> = forwardRef((_, ref) => {
  const theme = useTheme();
  const styles = {
    logo: css`
      font-family: "Cabin", sans-serif;
    `,
    toolbar: css`
      justify-content: space-evenly;
    `,
    drawerLogoWrapper: css`
      margin: 0 ${theme.spacing(3)}px;
      margin-top: ${theme.spacing(2)}px;
    `,
    drawerDivider: css`
      margin: ${theme.spacing(2)}px 0;
    `,
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const router = useRouter();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [filtersVisible, setFiltersVisible] = useState(false);
  const isOfferDetails = !!useOfferName();

  return (
    <AppBar ref={ref} position="sticky" color="inherit" variant="outlined">
      <Toolbar css={styles.toolbar}>
        <Logo />
        <Hidden smDown>
          <NavigationItems />
        </Hidden>
        <Hidden mdUp>
          {!isOfferDetails && router.route === OfferSearch.routeName && (
            <IconButton
              size="small"
              onClick={() => setFiltersVisible((prev) => !prev)}
            >
              <Icon>{filtersVisible ? "expand_less" : "expand_more"}</Icon>
            </IconButton>
          )}
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Icon>menu</Icon>
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <div css={styles.drawerLogoWrapper}>
              <Logo />
            </div>
            <Divider css={styles.drawerDivider} />
            <NavigationItems
              navigationItemProps={{ onClick: () => setDrawerOpen(false) }}
            />
          </Drawer>
        </Hidden>
      </Toolbar>
      {router.route === OfferSearch.routeName && (
        <div>
          <Collapse in={(filtersVisible && !isOfferDetails) || !isMobile}>
            <Filters />
          </Collapse>
        </div>
      )}
    </AppBar>
  );
});
