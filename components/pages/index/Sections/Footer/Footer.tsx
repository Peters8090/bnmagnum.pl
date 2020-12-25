import { css } from "@emotion/core";
import { Divider, Link as MuiLink, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { useScrollbarWidth } from "react-use";
import FooterBackground from "../../../../../assets/images/footer-background.png";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { useCurrentNavigationHeight } from "../../../../../hooks/useCurrentNavigationHeight";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import PrivacyPolicyPage from "../../../../../pages/polityka-prywatnosci";
import { CustomGrid } from "../../../../shared/Custom Material-UI/CustomGrid";
import { PageTitle } from "../../shared/PageTitle";
import { CompanyData } from "./Section/Sections/CompanyData/CompanyData";
import { ContactForm } from "./Section/Sections/ContactForm/ContactForm";

export const Footer: RouteType = () => {
  const navHeight = useCurrentNavigationHeight();
  const scrollBarWidth = useScrollbarWidth()!;
  const theme = useTheme();
  const styles = {
    root: css`
      width: 100%;
      min-height: calc(100vh - ${navHeight}px);
      background-color: #e0e0e0;
      background-image: url("${FooterBackground}");
      background-position: bottom center;
      background-repeat: no-repeat;

      display: flex;
      align-items: center;
      flex-direction: column;

      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 50px;

        background-color: transparent;

        border-right: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
        border-left: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
        border-top: 100px solid white;

        ${theme.breakpoints.down("sm")} {
          border-top-width: 50px;
        }
      }
    `,
    footerBackgroundImg: css`
      position: absolute;
      bottom: 0;
      width: 100%;
    `,
    content: css`
      padding: 0 5%;
    `,
    title: css`
      margin-top: ${theme.spacing(5)}px;
    `,
    dividerWrapper: css`
      width: 100%;
      margin: ${theme.spacing(1)}px 0;
    `,
    extraElements: css`
      margin-bottom: ${theme.spacing(1)}px;
      padding: 0 ${theme.spacing(3)}px;
      width: 100%;
    `,
  };

  const linkId = convertRouteHashToLinkId(Footer.routeName);

  return (
    <footer id={linkId} css={styles.root}>
      <PageTitle text="Kontakt z nami" css={styles.title} />
      <CustomGrid
        container
        spacing={3}
        justify="space-around"
        css={styles.content}
      >
        <CompanyData />
        <ContactForm />
      </CustomGrid>
      <div css={styles.dividerWrapper}>
        <Divider />
      </div>
      <div css={styles.extraElements}>
        <Link href={PrivacyPolicyPage.routeName}>
          <Typography>
            <MuiLink color="textPrimary">Polityka Prywatności</MuiLink>
          </Typography>
        </Link>
      </div>
    </footer>
  );
};

Footer.displayName = "Kontakt";
Footer.routeName = `/#kontakt`;
