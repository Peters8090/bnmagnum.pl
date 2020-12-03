import { css } from "@emotion/core";
import { Dialog, Fab, Icon, MobileStepper } from "@material-ui/core";
import React, { Dispatch, FC, SetStateAction } from "react";
import { SwitchPhotoFab } from "./SwitchPhotoFab/SwitchPhotoFab";

interface ModalGalleryProps {
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  photos: string[];
}

export const ModalGallery: FC<ModalGalleryProps> = (props) => {
  const styles = {
    mobileStepper: css`
      width: 100%;
      background: transparent;
    `,
  };

  return (
    <Dialog
      open={props.open}
      maxWidth={false}
      onClose={props.onClose}
      PaperProps={{
        elevation: 0,
        style: {
          background: "none",
        },
      }}
    >
      <SwitchPhotoFab
        side="left"
        photoIndex={props.photoIndex}
        setPhotoIndex={props.setPhotoIndex}
        photos={props.photos}
      />
      <SwitchPhotoFab
        side="right"
        photoIndex={props.photoIndex}
        setPhotoIndex={props.setPhotoIndex}
        photos={props.photos}
      />

      <img
        src={props.photos[props.photoIndex]}
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
        activeStep={props.photoIndex}
        css={styles.mobileStepper}
      />
    </Dialog>
  );
};
