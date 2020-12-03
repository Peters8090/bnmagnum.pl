import React, { FC, useEffect, useState } from "react";
import { css } from "@emotion/core";
import { lighten, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Dialog,
  Divider,
  Fab,
  Icon,
  IconButton,
  MobileStepper,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { RouteLink } from "../../../../functions/RouteLink";
import OfferSearch from "../../../../pages/wyszukiwarka-ofert/[[...offerName]]";
import { OfferProps } from "../OfferList/Offer/Offer";
import { decode } from "he";
import { addSpaceEveryThreeCharacters } from "../../../../functions/addSpaceEveryThreeCharacters";
import lodash from "lodash";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import NoImage from "../../../../assets/images/no-image.png";
import { AgentCard } from "./AgentCard/AgentCard";
import { DetailsSection } from "./Section/Sections/DetailsSection/DetailsSection";
import { DescriptionSection } from "./Section/Sections/DescriptionSection/DescriptionSection";
import { GoogleMapsIFrameSection } from "./Section/Sections/GoogleMapsIFrameSection/GoogleMapsIFrameSection";

export const OfferDetails: FC<OfferProps> = (props) => {
  if (!props.normal) {
    return null;
  }

  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${theme.spacing(3)}px;
    `,
    imagesWithStepper: css`
      ${theme.customMixins.flexCentered};
      flex-direction: column;
      margin: ${theme.spacing(3)}px 0;
    `,
    images: css`
      ${theme.customMixins.flexCentered};
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }

      img {
        border-radius: 25px;
        cursor: zoom-in;

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

    mobileStepper: css`
      width: 100%;
      background: transparent;
    `,
  };

  const [curPhotoGroup, setCurPhotoGroup] = useState(0);

  const photosGroups = lodash.chunk(props.normal.photos.slice(1), 3);

  const handlePrevPhotoGroup = () => setCurPhotoGroup((prev) => prev - 1);
  const handleNextPhotoGroup = () => setCurPhotoGroup((prev) => prev + 1);

  const [curPhotoInGallery, setCurPhotoInGallery] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const onCloseRequest = () => setGalleryOpen(false);
  const onMovePrevRequest = () => {
    setCurPhotoInGallery((prev) => prev - 1);
  };
  const onMoveNextRequest = () => {
    setCurPhotoInGallery((prev) => prev + 1);
  };

  useEffect(() => {
    let newCurPhotoGroup = photosGroups.findIndex((pg) =>
      pg.find((p) => p === props.normal.photos[curPhotoInGallery])
    );

    if (newCurPhotoGroup === -1) {
      newCurPhotoGroup = 0;
    }

    setCurPhotoGroup(newCurPhotoGroup);
  }, [curPhotoInGallery, galleryOpen]);

  return (
    <div css={styles.root}>
      <div css={styles.imagesWithStepper}>
        <div css={styles.images}>
          <img
            src={props.normal.photos?.[0] ?? NoImage}
            alt="image"
            css={styles.mainImage}
            onClick={() => {
              setCurPhotoInGallery(0);
              setGalleryOpen(true);
            }}
          />
          <div css={styles.thumbnails}>
            {photosGroups?.[curPhotoGroup]?.length && (
              <>
                {new Array(
                  Math.floor((3 - photosGroups[curPhotoGroup].length) / 2)
                )
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} />
                  ))}
                {photosGroups[curPhotoGroup].map((photo) => (
                  <img
                    key={photo}
                    src={photo}
                    alt="image"
                    onClick={() => {
                      setCurPhotoInGallery(
                        props.normal.photos.indexOf(photo) ?? 0
                      );
                      setGalleryOpen(true);
                    }}
                  />
                ))}
                {new Array(
                  Math.ceil((3 - photosGroups[curPhotoGroup].length) / 2)
                )
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} />
                  ))}
              </>
            )}
          </div>
        </div>

        <Dialog
          open={galleryOpen}
          maxWidth={false}
          onClose={onCloseRequest}
          PaperProps={{
            elevation: 0,
            style: {
              background: "none",
            },
          }}
        >
          <div
            style={{
              position: "fixed",
              left: "1%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "fixed",
              right: "1%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
            }}
          />
          <Fab
            onClick={onMovePrevRequest}
            color="secondary"
            style={{
              position: "fixed",
              left: "1%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            disabled={!props.normal.photos[curPhotoInGallery - 1]}
          >
            <Icon style={{ fontSize: "60px" }}>keyboard_arrow_left</Icon>
          </Fab>
          <img
            src={props.normal.photos[curPhotoInGallery]}
            style={{
              minWidth: "30vw",
              maxWidth: "80vw",
              maxHeight: "80vh",
              borderRadius: "25px",
              userSelect: "none",
            }}
          />

          <MobileStepper
            variant="dots"
            steps={props.normal.photos.length}
            position="bottom"
            backButton={<div />}
            nextButton={<div />}
            activeStep={curPhotoInGallery}
            css={styles.mobileStepper}
          />

          <Fab
            onClick={onMoveNextRequest}
            color="secondary"
            style={{
              position: "fixed",
              right: "1%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            disabled={!props.normal.photos[curPhotoInGallery + 1]}
          >
            <Icon style={{ fontSize: "60px" }}>keyboard_arrow_right</Icon>
          </Fab>
        </Dialog>

        <MobileStepper
          variant="dots"
          steps={photosGroups.length}
          position="static"
          activeStep={curPhotoGroup}
          css={styles.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={handleNextPhotoGroup}
              disabled={!photosGroups?.[curPhotoGroup + 1]}
            >
              Dalej
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handlePrevPhotoGroup}
              disabled={!photosGroups?.[curPhotoGroup - 1]}
            >
              <KeyboardArrowLeft />
              Poprzedni
            </Button>
          }
        />
      </div>

      <Typography variant="h4" align="center" css={styles.title}>
        {props.normal.title}
      </Typography>

      <AgentCard
        agentName={props.normal.agent_surname}
        phoneNumber={props.normal.agent_phone_number}
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
