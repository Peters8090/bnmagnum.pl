import { css } from "@emotion/core";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { About } from "../components/pages/index/Sections/About/About";
import { Footer } from "../components/pages/index/Sections/Footer/Footer";
import { Hero } from "../components/pages/index/Sections/Hero/Hero";
import { OurEmployees } from "../components/pages/index/Sections/OurEmployees/OurEmployees";
import { UpdateHashOnScroll } from "../hoc/UpdateHashOnScroll/UpdateHashOnScroll";
import { useCurrentNavigationHeight } from "../hooks/useCurrentNavigationHeight";
import { RouteType } from "../interfaces and types/RouteType";
import { HeadContext } from "./_app";

const HomePage: RouteType = () => {
  const navHeight = useCurrentNavigationHeight();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;

      & > * {
        min-height: calc(100vh - ${navHeight}px);
      }
    `,
  };

  const sections: RouteType[] = [Hero, About, OurEmployees, Footer];

  const router = useRouter();

  const { setTitleParts } = useContext(HeadContext);

  useEffect(() => {
    const curSection = sections.find((s) => router.asPath === s.routeName)
      ?.displayName;

    if (curSection) {
      setTitleParts([curSection]);
    }
  }, [router.asPath]);

  return (
    <div css={styles.root}>
      <UpdateHashOnScroll sections={["o-firmie", "nasi-pracownicy", "kontakt"]}>
        {sections.map((Section) => (
          <Section key={Section.routeName} />
        ))}
      </UpdateHashOnScroll>
    </div>
  );
};

HomePage.displayName = "Home";
HomePage.routeName = "/";

export default HomePage;
