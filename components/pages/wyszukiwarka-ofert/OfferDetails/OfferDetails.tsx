import { css } from "@emotion/core";
import { Container, Fab, Icon, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import React, { FC } from "react";
import { addSpaceEveryThreeCharacters } from "../../../../functions/addSpaceEveryThreeCharacters";
import { RouteLink } from "../../../../functions/RouteLink";
import { useUrlWithQueryString } from "../../../../hooks/useUrlWithQueryString";
import OfferSearch from "../../../../pages/oferty/[[...offerName]]";
import { OfferProps } from "../OfferList/Offer/Offer";
import { AgentCard } from "./AgentCard/AgentCard";
import { Photos } from "./Photos/Photos";
import { DescriptionSection } from "./Section/Sections/DescriptionSection/DescriptionSection";
import { DetailsSection } from "./Section/Sections/DetailsSection/DetailsSection";
import { GoogleMapsIFrameSection } from "./Section/Sections/GoogleMapsIFrameSection/GoogleMapsIFrameSection";

export const OfferDetails: FC<OfferProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      padding: ${theme.spacing(3)}px;
    `,
    title: css`
      font-weight: 500;
    `,
    goBackFab: css`
      position: fixed;
      right: ${theme.spacing(3)}px;
      bottom: ${theme.spacing(3)}px;
    `,
    priceAndAgentCard: css`
      ${theme.customMixins.flexCentered};
      flex-wrap: wrap;

      & > * {
        margin: ${theme.spacing(1)}px ${theme.spacing(3)}px;
      }
    `,
    price: css`
      font-weight: 700;
      white-space: nowrap;
    `,
  };

  const { query } = useUrlWithQueryString();

  return (
    <div css={styles.root}>
      <Photos photos={props.normal.photos} />

      <Typography variant="h4" align="center" css={styles.title}>
        {props.normal.title}
      </Typography>

      <div css={styles.priceAndAgentCard}>
        <AgentCard
          agentFullName={props.normal.agent_full_name}
          phoneNumber={props.normal.agent_phone_number}
          email={props.normal.agent_email}
        />
        <div>
          <Typography variant="h6">Cena</Typography>
          <Typography variant="h4" css={styles.price}>
            {addSpaceEveryThreeCharacters(props.normal.price.toString())}{" "}
            {props.normal.currency}
          </Typography>
        </div>
      </div>

      <Container maxWidth="sm">
        <DescriptionSection description={props.normal.description} />
        <DetailsSection params={props.params} />
        <GoogleMapsIFrameSection location={props.normal.location} />
      </Container>

      <Link {...RouteLink(OfferSearch, undefined, query)}>
        <Fab color="primary" css={styles.goBackFab}>
          <Icon>clear</Icon>
        </Fab>
      </Link>
    </div>
  );
};
