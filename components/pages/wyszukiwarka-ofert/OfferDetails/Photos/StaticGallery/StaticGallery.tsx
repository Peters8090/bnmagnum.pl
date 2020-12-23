import { css } from "@emotion/core";
import { MobileStepper } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { SwitchPhotoButton } from "./SwitchPhotoButton/SwitchPhotoButton";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import { Images } from "./Images/Images";
import { PhotosContext } from "../Photos";

export const StaticGallery: FC = () => {
  const theme = useTheme();

  const styles = {
    stepper: css`
      margin-top: ${theme.spacing(1)}px;
      width: 100%;
      background: transparent;
    `,
  };

  const groupLength = 3;

  const { photoIndex, photos } = useContext(PhotosContext);

  const photoGroups = chunk(photos.slice(1), groupLength);

  const lastPhotoGroup = photoGroups[photoGroups.length - 1];
  if (lastPhotoGroup) {
    const difference = groupLength - lastPhotoGroup.length;
    for (let i = 0; i < difference; i++) {
      lastPhotoGroup.push("");
    }
  }

  const photoGroupIndex = Math.max(Math.floor((photoIndex - 1) / 3), 0);

  return (
    <div>
      <Images photoGroup={photoGroups[photoGroupIndex]} />
      <MobileStepper
        variant="dots"
        steps={photoGroups.length}
        position="static"
        activeStep={photoGroupIndex}
        css={styles.stepper}
        backButton={<SwitchPhotoButton side="left" />}
        nextButton={<SwitchPhotoButton side="right" />}
      />
    </div>
  );
};
