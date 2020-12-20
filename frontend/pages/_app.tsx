import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Content } from "../content";
import { Layout } from "../hoc/Layout/Layout";
import { PageAnimation } from "../hoc/PageAnimation/PageAnimation";
import { Theme } from "../hoc/Theme/Theme";

interface HeadContextProps {
  setTitleParts: Dispatch<SetStateAction<string[]>>;
  setOverrideOgLogo?: Dispatch<SetStateAction<string>>;
  setOverrideDescription?: Dispatch<SetStateAction<string>>;
}

export const HeadContext = createContext<HeadContextProps>(
  (null as unknown) as HeadContextProps
);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Material UI SSR setup
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const [titleParts, setTitleParts] = useState<string[]>([]);
  const [overrideOgLogo, setOverrideOgLogo] = useState<string>();
  const [overrideDescription, setOverrideDescription] = useState<string>();

  const router = useRouter();

  return (
    <Theme>
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <HeadContext.Provider
          value={{
            setTitleParts,
            setOverrideOgLogo,
            setOverrideDescription,
          }}
        >
          <PageAnimation>
            <Head>
              <title>{[Content.siteName, ...titleParts].join(" > ")}</title>
              <meta
                name="description"
                content={overrideDescription || Content.head.description}
              />
              <link rel="shortcut icon" href={Content.head.logo} />
              <meta property="og:image" content={overrideOgLogo} />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageAnimation>
        </HeadContext.Provider>
      </SnackbarProvider>
    </Theme>
  );
};

export default App;
