import { css } from "@emotion/core";
import { MobileStepper } from "@material-ui/core";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { SwitchPhotoButton } from "./SwitchPhotoButton/SwitchPhotoButton";
import { useTheme } from "@material-ui/core/styles";
import NoImage from "../../../../../../assets/images/no-image.png";
import { chunk } from "lodash";

interface StaticGalleryProps {
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  photos: string[];
  openModalGallery: () => void;
}

export const StaticGallery: FC<StaticGalleryProps> = (props) => {
  const theme = useTheme();
  const helperStyles = {
    image: css`
      border-radius: 25px;
      cursor: zoom-in;

      ${theme.breakpoints.down("sm")} {
        border-radius: 12.5px;
      }
    `,
  };
  const styles = {
    images: css`
      ${theme.customMixins.flexCentered};
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }
    `,
    mainImage: css`
      ${helperStyles.image};
      width: 300px;
      height: 300px;

      ${theme.breakpoints.down("sm")} {
        width: 200px;
        height: 200px;
      }

      object-fit: cover;
    `,
    thumbnails: css`
      ${helperStyles.image};
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      ${theme.breakpoints.up("md")} {
        flex-direction: column;
      }
    `,
    thumbnail: css`
      ${helperStyles.image};

      width: 100px;
      height: 100px;

      ${theme.breakpoints.down("sm")} {
        width: 75px;
        height: 75px;
      }

      object-fit: cover;
      margin: ${theme.spacing(2)}px;
    `,
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
  const photoGroup = photoGroups[photoGroupIndex];

  return (
    <div>
      <div css={styles.images}>
        <img
          src={props.photos?.[0] ?? NoImage}
          alt="image"
          css={styles.mainImage}
          onClick={() => {
            props.setPhotoIndex(0);
            props.openModalGallery();
          }}
        />
        <div css={styles.thumbnails}>
          {photoGroup.map((photo) =>
            photo.startsWith("http") ? (
              <img
                key={photo}
                src={photo}
                alt="image"
                css={styles.thumbnail}
                onClick={() => {
                  props.setPhotoIndex(props.photos.indexOf(photo) ?? 0);
                  props.openModalGallery();
                }}
              />
            ) : (
              <div css={styles.thumbnail} />
            )
          )}
        </div>
      </div>
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
