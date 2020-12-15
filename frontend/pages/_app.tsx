import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Layout } from "../hoc/Layout/Layout";
import { PageAnimation } from "../hoc/PageAnimation/PageAnimation";
import { Theme } from "../hoc/Theme/Theme";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // material-ui SSR setup
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Theme>
      <Layout>
        <PageAnimation>
          <Component {...pageProps} />
        </PageAnimation>
      </Layout>
    </Theme>
  );
};

export default App;
