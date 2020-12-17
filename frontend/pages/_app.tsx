import { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
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
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <PageAnimation>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageAnimation>
      </SnackbarProvider>
    </Theme>
  );
};

export default App;
