import { css } from "@emotion/core";
import { Dialog, MobileStepper } from "@material-ui/core";
import React, { Dispatch, FC, SetStateAction } from "react";
import { SwitchPhotoFab } from "./SwitchPhotoFab/SwitchPhotoFab";

interface ModalGalleryProps {
  open: boolean;
  onClose: () => void;
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  photos: string[];
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
      {(["left", "right"] as const).map((side) => (
        <SwitchPhotoFab
          side={side}
          photoIndex={props.photoIndex}
          setPhotoIndex={props.setPhotoIndex}
          photos={props.photos}
        />
      ))}

      <img src={props.photos[props.photoIndex]} css={styles.photo} />

      <MobileStepper
        variant="dots"
        steps={props.photos.length}
        position="bottom"
        backButton={<div />}
        nextButton={<div />}
        activeStep={props.photoIndex}
        css={styles.stepper}
      />
    </Dialog>
  );
};
