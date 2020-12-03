import { css } from "@emotion/core";
import { MobileStepper } from "@material-ui/core";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { SwitchPhotoButton } from "./SwitchPhotoButton/SwitchPhotoButton";
import { useTheme } from "@material-ui/core/styles";
import { chunk } from "lodash";
import { Images } from "./Images/Images";

interface StaticGalleryProps {
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  photos: string[];
  openModalGallery: () => void;
}

export const StaticGallery: FC<StaticGalleryProps> = (props) => {
  const theme = useTheme();

  const styles = {
    stepper: css`
      margin-top: ${theme.spacing(1)}px;
      width: 100%;
      background: transparent;
    `,
  };

  const groupLength = 3;

  const photoGroups = chunk(props.photos.slice(1), groupLength);

  const lastPhotoGroup = photoGroups[photoGroups.length - 1];

  const difference = groupLength - lastPhotoGroup.length;
  for (let i = 0; i < difference; i++) {
    lastPhotoGroup.push("");
  }

  const photoGroupIndex = Math.max(Math.floor((props.photoIndex - 1) / 3), 0);

  return (
    <div>
      <Images
        photoGroup={photoGroups[photoGroupIndex]}
        openModalGallery={props.openModalGallery}
        photos={props.photos}
        setPhotoIndex={props.setPhotoIndex}
      />
      <MobileStepper
        variant="dots"
        steps={photoGroups.length}
        position="static"
        activeStep={photoGroupIndex}
        css={styles.stepper}
        {...(Object.fromEntries(
          [
            ["nextButton", "right"] as const,
            ["backButton", "left"] as const,
          ].map(([prop, side]) => [
            prop,
            <SwitchPhotoButton
              side={side}
              photoIndex={Math.max(props.photoIndex, 1)}
              setPhotoIndex={props.setPhotoIndex}
              photos={props.photos}
            />,
          ])
        ) as Record<"backButton" | "nextButton", ReactNode>)}
      />
    </div>
  );
};
