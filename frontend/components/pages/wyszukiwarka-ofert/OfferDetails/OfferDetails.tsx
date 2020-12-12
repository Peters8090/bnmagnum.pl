import { css } from "@emotion/core";
import { Container, Fab, Icon, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import React, { FC } from "react";
import { RouteLink } from "../../../../functions/RouteLink";
import OfferSearch from "../../../../pages/wyszukiwarka-ofert/[[...offerName]]";
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
  };

  return (
    <div css={styles.root}>
      <Photos photos={props.normal.photos} />

      <Typography variant="h4" align="center" css={styles.title}>
        {props.normal.title}
      </Typography>

      <AgentCard
        agentName={props.normal.agent_surname}
        phoneNumber={props.normal.agent_phone_number}
        email={props.normal.agent_email}
      />

      <Container maxWidth="sm">
        <DescriptionSection description={props.normal.description} />
        <DetailsSection params={props.params} />
        <GoogleMapsIFrameSection location={props.normal.location} />
      </Container>

      <Link {...RouteLink(OfferSearch)}>
        <Fab color="primary" css={styles.goBackFab}>
          <Icon>clear</Icon>
        </Fab>
      </Link>
    </div>
  );
};
