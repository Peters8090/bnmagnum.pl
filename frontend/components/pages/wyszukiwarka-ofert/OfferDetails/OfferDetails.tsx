import { FC } from "react";
import { css } from "@emotion/core";
import { lighten, useTheme } from "@material-ui/core/styles";
import { Container, Divider, Fab, Icon, Typography } from "@material-ui/core";
import Link from "next/link";
import { RouteLink } from "../../../../functions/RouteLink";
import OfferSearch from "../../../../pages/wyszukiwarka-ofert/[[...offerName]]";
import { OfferProps } from "../OfferList/Offer/Offer";

export const OfferDetails: FC<OfferProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    images: css`
      ${theme.customMixins.flexCentered};
      margin: ${theme.spacing(3)}px 0;

      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }

      img {
        border-radius: 25px;

        ${theme.breakpoints.down("sm")} {
          border-radius: 12.5px;
        }
      }
    `,
    mainImage: css`
      width: 300px;
      height: 300px;

      ${theme.breakpoints.down("sm")} {
        width: 200px;
        height: 200px;
      }

      object-fit: cover;
    `,
    thumbnails: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      ${theme.breakpoints.up("md")} {
        flex-direction: column;
      }

      & > * {
        width: 100px;
        height: 100px;

        ${theme.breakpoints.down("sm")} {
          width: 75px;
          height: 75px;
        }

        object-fit: cover;
        margin: ${theme.spacing(2)}px;
      }
    `,
    title: css`
      font-weight: 500;
    `,
    goBackFab: css`
      position: fixed;
      right: ${theme.spacing(3)}px;
      bottom: ${theme.spacing(3)}px;
    `,
    agentCard: css`
      display: flex;
      align-items: center;

      margin: ${theme.spacing(2)}px 0;
    `,
    agentCardIcon: css`
      font-size: 50px;
      margin-right: ${theme.spacing(2)}px;
    `,
    agentCardText: css`
      font-weight: 500;
      font-size: 22px;
    `,
    agentCardTextHighlighted: css`
      color: ${theme.palette.secondary.main};
    `,
    section: css`
      margin-bottom: ${theme.spacing(3)}px;
    `,
    sectionTitle: css`
      font-weight: 600;
    `,
    sectionDesc: css`
      font-weight: 400;
    `,
    detailText: css`
      display: flex;
      justify-content: space-between;
      margin: ${theme.spacing(0.5)}px 0;
    `,
    detailTextName: css`
      font-weight: 500;
      color: ${lighten(theme.palette.text.primary, 0.2)};
    `,
    detailDivider: css`
      height: 3px;
    `,
    googleMapsIframeWrapper: css`
      width: 100%;
      position: relative;
      padding-bottom: 75%;
      height: 0;
      overflow: hidden;
    `,
    googleMapsIframe: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;

      display: block;
      margin: ${theme.spacing(1.5)}px auto 0;
      border: 2px solid #bdbdbd;
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.images}>
        <img src={props.normal.photos[0]} alt="image" css={styles.mainImage} />
        <div css={styles.thumbnails}>
          <img
            src="https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic"
            alt="image"
          />
          <img
            src="https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic"
            alt="image"
          />
          <img
            src="https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic"
            alt="image"
          />
        </div>
      </div>
      <Typography variant="h4" align="center" css={styles.title}>
        {props.normal.title}
      </Typography>

      <div css={styles.agentCard}>
        <Icon css={styles.agentCardIcon}>phone</Icon>
        <Typography css={styles.agentCardText} component="div">
          {props.normal.agent_surname}
          <br />
          <a
            css={styles.agentCardTextHighlighted}
            href={`tel:${props.normal.agent_phone_number}`}
          >
            {props.normal.agent_phone_number}
          </a>
        </Typography>
      </div>

      <Container maxWidth="sm">
        <div css={styles.section}>
          <Typography variant="h6" gutterBottom css={styles.sectionTitle}>
            Opis
          </Typography>
          <Typography align="justify" variant="h6" css={styles.sectionDesc}>
            {props.normal.description}
          </Typography>
        </div>
        <div css={styles.section}>
          <Typography variant="h6" gutterBottom css={styles.sectionTitle}>
            Szczegóły
          </Typography>
          {(Object.entries(props.params) as [string, string | number][]).map(
            (el) => (
              <div>
                <div css={styles.detailText}>
                  <Typography
                    align="left"
                    css={styles.detailTextName}
                    variant="h6"
                  >
                    {el[0]}
                  </Typography>
                  <Typography align="right" color="textSecondary" variant="h6">
                    {el[1]}
                  </Typography>
                </div>
                <Divider css={styles.detailDivider} />
              </div>
            )
          )}
        </div>
        <div css={styles.section}>
          <Typography variant="h6" gutterBottom css={styles.sectionTitle}>
            Przybliżona lokalizacja
          </Typography>
          <div css={styles.googleMapsIframeWrapper}>
            <iframe
              css={styles.googleMapsIframe}
              src={`https://www.google.com/maps?q=${encodeURI(
                props.normal.location
              )}&output=embed`}
            />
          </div>
        </div>
      </Container>

      <Link {...RouteLink(OfferSearch)}>
        <Fab color="primary" css={styles.goBackFab}>
          <Icon>clear</Icon>
        </Fab>
      </Link>
    </div>
  );
};
