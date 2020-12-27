import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { About } from "../components/pages/index/Sections/About/About";
import { AboutSteps } from "../components/pages/index/Sections/AboutSteps/AboutSteps";
import { Footer } from "../components/pages/index/Sections/Footer/Footer";
import { Hero } from "../components/pages/index/Sections/Hero/Hero";
import { OurEmployees } from "../components/pages/index/Sections/OurEmployees/OurEmployees";
import { convertRouteHashToLinkId } from "../functions/convertRouteHashToLinkId";
import { UpdateHashOnScroll } from "../hoc/UpdateHashOnScroll/UpdateHashOnScroll";
import { useCurrentNavigationHeight } from "../hooks/useCurrentNavigationHeight";
import { RouteType } from "../interfaces and types/RouteType";
import { HeadContext } from "./_app";

export const homeSections: RouteType<any>[] = [
  Hero,
  About,
  AboutSteps,
  OurEmployees,
  Footer,
];

const HomePage: RouteType = () => {
  const navHeight = useCurrentNavigationHeight();
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;

      & > * {
        min-height: calc(100vh - ${navHeight}px);
        margin: ${theme.spacing(1)}px 0;
      }
    `,
  };

  const router = useRouter();

  const { setTitleParts } = useContext(HeadContext);

  useEffect(() => {
    const curSection = homeSections.find((s) => router.asPath === s.routeName)
      ?.displayName;

    if (curSection) {
      setTitleParts([curSection]);
    }
  }, [router.asPath]);

  return (
    <div css={styles.root}>
      <UpdateHashOnScroll
        sections={homeSections.map((s) =>
          convertRouteHashToLinkId(s.routeName)
        )}
      >
        {homeSections.map((Section) => (
          <Section key={Section.routeName} />
        ))}
      </UpdateHashOnScroll>
    </div>
  );
};

HomePage.displayName = "Home";
HomePage.routeName = "/";

export default HomePage;
