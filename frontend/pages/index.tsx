import { css } from "@emotion/core";
import { useEffect } from "react";
import { About } from "../components/pages/index/Sections/About/About";
import { Footer } from "../components/pages/index/Sections/Footer/Footer";
import { Hero } from "../components/pages/index/Sections/Hero/Hero";
import { OurEmployees } from "../components/pages/index/Sections/OurEmployees/OurEmployees";
import { useCurrentNavigationHeight } from "../hooks/useCurrentNavigationHeight";
import { RouteType } from "../interfaces and types/RouteType";

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

  const sections = ["", "o-firmie", "nasi-pracownicy", "kontakt"];

  const findClosestValue = (counts: number[], goal: number) =>
    counts.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );

  useEffect(() => {
    setInterval(() => {
      const scrollY = document?.scrollingElement?.scrollTop;

      if (scrollY !== undefined) {
        const scrollTops = sections.map((section) =>
          section === "" ? 0 : document.getElementById(section)!.offsetTop
        );

        const closestSection =
          sections[scrollTops.indexOf(findClosestValue(scrollTops, scrollY))];

        if (window.location.hash.slice(1) !== closestSection) {
          history.replaceState(
            null,
            "",
            document.location.pathname +
              (closestSection ? `#${closestSection}` : "")
          );
        }
      }
    }, 400);
  }, []);

  return (
    <div css={styles.root}>
      <Hero />
      <About />
      <OurEmployees />
      <Footer />
    </div>
  );
};

HomePage.displayName = "Home";
HomePage.routeName = "/";

export default HomePage;
