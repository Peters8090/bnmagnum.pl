import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { CustomTypography } from "../components/shared/Custom Material-UI/CustomTypography";
import { Content } from "../content";
import { RouteType } from "../interfaces and types/RouteType";
import { HeadContext } from "./_app";

const PrivacyPolicyPage: RouteType = () => {
  const router = useRouter();
  const { setTitleParts } = useContext(HeadContext);

  useEffect(() => {
    setTitleParts(["Polityka Prywatności"]);
  }, [router.asPath]);

  const theme = useTheme();
  const styles = {
    root: css`
      padding: ${theme.spacing(3)}px 10vw;
    `,
    content: css`
      white-space: pre-wrap;

      strong {
        font-weight: 500;
      }
    `,
  };

  return (
    <div css={styles.root}>
      <CustomTypography variant="h6" align="center">
        Polityka Prywatności
      </CustomTypography>
      <CustomTypography
        css={styles.content}
        overrideFontSize={1.1}
        fontWeight={300}
        align="justify"
        dangerouslySetInnerHTML={{
          __html: Content.privacyPolicy.content,
        }}
      />
    </div>
  );
};

PrivacyPolicyPage.displayName = "Polityka Prywatności";
PrivacyPolicyPage.routeName = "/polityka-prywatnosci";

export default PrivacyPolicyPage;
