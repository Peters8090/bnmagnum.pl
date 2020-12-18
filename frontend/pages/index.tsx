import { css } from "@emotion/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { About } from "../components/pages/index/Sections/About/About";
import { Footer } from "../components/pages/index/Sections/Footer/Footer";
import { Hero } from "../components/pages/index/Sections/Hero/Hero";
import { OurEmployees } from "../components/pages/index/Sections/OurEmployees/OurEmployees";
import { useCurrentNavigationHeight } from "../hooks/useCurrentNavigationHeight";
import { useVisibility } from "../hooks/useVisibility";
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

  const [isHeroVisible, heroRef] = useVisibility(100);
  const [isAboutVisible, aboutRef] = useVisibility(-100);
  const [isOurEmployeesVisible, ourEmployeesRef] = useVisibility(-100);
  const [isFooterVisible, footerRef] = useVisibility(-100);

  const router = useRouter();

  useEffect(() => {
    if (isHeroVisible && router.asPath !== Hero.routeName) {
      if (window) {
        console.log(1);

        history.replaceState(null, "", document.location.pathname);
      }
    }
  }, [isHeroVisible]);

  useEffect(() => {
    if (isAboutVisible && router.asPath !== About.routeName) {
      if (window) {
        console.log(2);

        history.replaceState(null, "", document.location.pathname + "#about");
      }
    }
  }, [isAboutVisible]);

  useEffect(() => {
    if (isOurEmployeesVisible && router.asPath !== OurEmployees.routeName) {
      if (window) {
        console.log(3);

        history.replaceState(
          null,
          "",
          document.location.pathname + "#our-employees"
        );
      }
    }
  }, [isOurEmployeesVisible]);

  useEffect(() => {
    if (isFooterVisible && router.asPath !== Footer.routeName) {
      if (window) {
        console.log(4);

        history.replaceState(null, "", document.location.pathname + "#kontakt");
      }
    }
  }, [isFooterVisible]);

  return (
    <div css={styles.root}>
      <Hero rootRef={heroRef} />
      <About rootRef={aboutRef} />
      <OurEmployees rootRef={ourEmployeesRef} />
      <Footer rootRef={footerRef} />
    </div>
  );
};

HomePage.displayName = "Home";
HomePage.routeName = "/";

export default HomePage;
