import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC, useEffect, useState } from "react";
import lodash from "lodash";
import NoImage from "../../../../../assets/images/no-image.png";
import { Dialog, Fab, Icon, MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

interface PhotosProps {
  photos: string[];
}

export const Photos: FC<PhotosProps> = (props) => {
  const theme = useTheme();
  const styles = {
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
    mobileStepper: css`
      width: 100%;
      background: transparent;
    `,
  };

  const photosGroups = lodash.chunk(props.photos.slice(1), 3);

  const handlePrevPhotoGroup = () => setCurPhotoInGallery((prev) => prev - 3);
  const handleNextPhotoGroup = () => setCurPhotoInGallery((prev) => prev + 3);

  const [curPhotoInGallery, setCurPhotoInGallery] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const onCloseRequest = () => setGalleryOpen(false);
  const onMovePrevRequest = () => {
    setCurPhotoInGallery((prev) => prev - 1);
  };
  const onMoveNextRequest = () => {
    setCurPhotoInGallery((prev) => prev + 1);
  };

  const curPhotoGroup = Math.max(Math.floor((curPhotoInGallery - 1) / 3), 0);
  console.log({ curPhotoInGallery, curPhotoGroup });

  return (
    <div css={styles.imagesWithStepper}>
      <div css={styles.images}>
        <img
          src={props.photos?.[0] ?? NoImage}
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
                    setCurPhotoInGallery(props.photos.indexOf(photo) ?? 0);
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
          disabled={!props.photos[curPhotoInGallery - 1]}
        >
          <Icon style={{ fontSize: "60px" }}>keyboard_arrow_left</Icon>
        </Fab>
        <img
          src={props.photos[curPhotoInGallery]}
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
          steps={props.photos.length}
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
          disabled={!props.photos[curPhotoInGallery + 1]}
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
  );
};
