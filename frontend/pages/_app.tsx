import { AppProps } from "next/app";
import Head from "next/head";
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
  setOgImage: Dispatch<SetStateAction<string | undefined>>;
  setOverrideDescription: Dispatch<SetStateAction<string | undefined>>;
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
  const [ogImage, setOgImage] = useState<string>();
  const [overrideDescription, setOverrideDescription] = useState<string>();

  const title = [Content.siteName, ...titleParts].join(" • ");
  const description = overrideDescription || Content.head.description;

  return (
    <Theme>
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <HeadContext.Provider
          value={{
            setTitleParts,
            setOgImage,
            setOverrideDescription,
          }}
        >
          <PageAnimation>
            <Head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <link rel="shortcut icon" href={Content.head.logo} />

              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              {ogImage && <meta property="og:image" content={ogImage} />}
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
