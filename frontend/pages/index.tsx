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
        margin: 20px 0;
        border: 3px solid black;
      }
    `,
  };

  const [isHeroVisible, heroRef] = useVisibility();
  const [isAboutVisible, aboutRef] = useVisibility();
  const [isOurEmployeesVisible, ourEmployeesRef] = useVisibility();
  const [isFooterVisible, footerRef] = useVisibility();

  const router = useRouter();

  useEffect(() => {
    console.log({
      isHeroVisible,
      isAboutVisible,
      isOurEmployeesVisible,
      isFooterVisible,
    });
  }, [isHeroVisible, isAboutVisible, isOurEmployeesVisible, isFooterVisible]);

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
