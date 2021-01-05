import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { CustomTypography } from "../components/shared/Custom Material-UI/CustomTypography";
import { Content } from "../content";
import { RouteType } from "../interfaces and types/RouteType";
import { HeadContext } from "./_app";

const PrivacyPolicyPage: RouteType = Object.assign(() => {
  const router = useRouter();
  const { setTitleParts } = useContext(HeadContext);

  useEffect(() => {
    setTitleParts([Content.privacyPolicy.route.displayName]);
  }, [router.asPath]);

  const theme = useTheme();
  const styles = {
    root: css`
      padding: ${theme.spacing(3)}px 10vw;
    `,
    content: css`
      strong {
        font-weight: 500;
      }

      ul {
        list-style-position: inside;
      }

      ul > li {
        margin-left: ${theme.spacing(2)}px;
      }

      br {
        content: "";
        display: block;
        margin: 1em 0;
      }

      br.no-space {
        margin: 0;
      }

      white-space: pre-line;
    `,
  };

  return (
    <div css={styles.root}>
      <CustomTypography variant="h6" align="center" gutterBottom>
        {Content.privacyPolicy.route.displayName}
      </CustomTypography>
      <CustomTypography
        css={styles.content}
        overrideFontSize={1.1}
        fontWeight={300}
        align="justify"
      >
        {Content.privacyPolicy.content}
      </CustomTypography>
    </div>
  );
}, Content.privacyPolicy.route);

export default PrivacyPolicyPage;
