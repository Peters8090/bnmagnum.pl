import css from "@emotion/css";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { Content } from "../../../../../content";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { AboutLeft } from "./AboutLeft/AboutLeft";
import { AboutRight } from "./AboutRight/AboutRight";

export const About: RouteType = Object.assign(() => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
    `,
  };

  const linkId = convertRouteHashToLinkId(About.routeName);

  return (
    <Grid container css={styles.root} id={linkId}>
      <AboutLeft />
      <AboutRight />
    </Grid>
  );
}, Content.about.route);
