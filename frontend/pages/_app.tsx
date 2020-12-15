import { motion } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../hoc/Layout/Layout";
import { Theme } from "../hoc/Theme/Theme";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    // material-ui SSR setup
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }

    // router.events.on('routeChangeStart', () => window.scrollTo(0, 0))
  }, []);

  return (
    <Theme>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </Theme>
  );
};

export default App;
