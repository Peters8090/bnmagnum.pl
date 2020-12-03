import { css } from "@emotion/core";
import { Dialog, MobileStepper } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { PhotosContext } from "../Photos";
import { SwitchPhotoFab } from "./SwitchPhotoFab/SwitchPhotoFab";

interface ModalGalleryProps {
  open: boolean;
}

export const ModalGallery: FC<ModalGalleryProps> = (props) => {
  const styles = {
    stepper: css`
      width: 100%;
      background: transparent;
    `,
    photo: css`
      min-width: 30vw;
      max-width: 80vw;
      max-height: 80vh;
      border-radius: 25px;
      user-select: none;
    `,
  };

  const { photoIndex, photos, setModalGalleryOpen } = useContext(PhotosContext);

  return (
    <Dialog
      open={props.open}
      maxWidth={false}
      onClose={() => setModalGalleryOpen(false)}
      PaperProps={{
        elevation: 0,
        style: {
          background: "none",
        },
      }}
    >
      {(["left", "right"] as const).map((side) => (
        <SwitchPhotoFab side={side} />
      ))}

      <img src={photos[photoIndex]} css={styles.photo} />

      <MobileStepper
        variant="dots"
        steps={photos.length}
        position="bottom"
        backButton={<div />}
        nextButton={<div />}
        activeStep={photoIndex}
        css={styles.stepper}
      />
    </Dialog>
  );
};
