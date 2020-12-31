import { css } from "@emotion/core";
import { Button, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { useScrollbarWidth } from "react-use";
import FooterBackground from "../../../../../assets/images/footer-background.png";
import { Content } from "../../../../../content";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteLink } from "../../../../../functions/RouteLink";
import { useCurrentNavigationHeight } from "../../../../../hooks/useCurrentNavigationHeight";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import PrivacyPolicyPage from "../../../../../pages/polityka-prywatnosci";
import { CustomGrid } from "../../../../shared/Custom Material-UI/CustomGrid";
import { PageTitle } from "../../shared/PageTitle";
import { CompanyData } from "./Section/Sections/CompanyData/CompanyData";
import { ContactForm } from "./Section/Sections/ContactForm/ContactForm";

export const Footer: RouteType = Object.assign(() => {
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
      text-align: center;
    `,
    main: css`
      flex: 1;
    `,
    dividerWrapper: css`
      width: 100%;
      margin: ${theme.spacing(1)}px 0;
    `,
    extraElements: css`
      margin-bottom: ${theme.spacing(1)}px;
      padding: 0 ${theme.spacing(3)}px;
      width: 100%;
      display: flex;
      align-items: center;

      justify-content: space-between;
      ${theme.breakpoints.down("xs")} {
        justify-content: center;
      }

      & > * {
        text-align: center;
      }
    `,
    socialLinks: css``,
    socialLink: css`
      margin: 0 ${theme.spacing(1.5)}px;
      border-radius: 10px;
    `,
    socialLinkImg: css`
      height: 60px;

      ${theme.breakpoints.down("sm")} {
        height: 45px;
      }
    `,
    otherExtraElements: css`
      display: flex;
      flex-direction: column;
    `,
  };

  const linkId = convertRouteHashToLinkId(Footer.routeName);

  return (
    <footer id={linkId} css={styles.root}>
      <PageTitle text={Content.footer.sectionTitle} css={styles.title} />
      <div css={styles.main}>
        <CustomGrid
          container
          spacing={3}
          justify="space-around"
          css={styles.content}
        >
          <CompanyData />
          <ContactForm />
        </CustomGrid>
      </div>
      <div css={styles.dividerWrapper}>
        <Divider />
      </div>
      <div css={styles.extraElements}>
        <div css={styles.socialLinks}>
          {Content.footer.socialLinks.map((socialLink) => (
            <Button
              href={socialLink.href}
              target="_blank"
              css={styles.socialLink}
            >
              <img src={socialLink.image} css={styles.socialLinkImg} />
            </Button>
          ))}
        </div>
        <div css={styles.otherExtraElements}>
          <Link {...RouteLink(PrivacyPolicyPage)}>
            <Button variant="text" color="secondary" size="small">
              {Content.privacyPolicy.route.displayName}
            </Button>
          </Link>
          <Button
            variant="text"
            color="primary"
            size="small"
            target="_blank"
            href={Content.footer.madeBy.link}
          >
            {Content.footer.madeBy.text}
          </Button>
        </div>
      </div>
    </footer>
  );
}, Content.footer.route);
