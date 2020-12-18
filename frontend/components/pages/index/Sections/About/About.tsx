import css from "@emotion/css";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { HomeSectionProps } from "../../shared/HomeSectionProps";
import { AboutLeft } from "./AboutLeft/AboutLeft";
import { AboutRight } from "./AboutRight/AboutRight";

export const About: RouteType<HomeSectionProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
    `,
  };

  const linkId = convertRouteHashToLinkId(About.routeName);

  return (
    <Grid container css={styles.root} id={linkId} ref={props.rootRef}>
      <AboutLeft />
      <AboutRight />
    </Grid>
  );
};

About.displayName = "O firmie";
About.routeName = "/#o-firmie";
