import { css } from "@emotion/core";
import { About } from "../components/pages/index/Sections/About/About";
import { Footer } from "../components/pages/index/Sections/Footer/Footer";
import { Hero } from "../components/pages/index/Sections/Hero/Hero";
import { OurEmployees } from "../components/pages/index/Sections/OurEmployees/OurEmployees";
import { useCurrentNavigationHeight } from "../hooks/useCurrentNavigationHeight";
import { useUpdateHashOnScroll } from "../hooks/useUpdateHashOnScroll";
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

  useUpdateHashOnScroll(["", "o-firmie", "nasi-pracownicy", "kontakt"]);

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
