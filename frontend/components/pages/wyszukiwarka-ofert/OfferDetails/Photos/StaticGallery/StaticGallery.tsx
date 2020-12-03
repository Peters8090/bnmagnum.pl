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
  const styles = {
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
    stepper: css`
      width: 100%;
      background: transparent;
    `,
  };

  const photosGroups = chunk(props.photos.slice(1), 3);

  const curPhotoGroup = Math.max(Math.floor((props.photoIndex - 1) / 3), 0);

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
                    props.setPhotoIndex(props.photos.indexOf(photo) ?? 0);
                    props.openModalGallery();
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
      <MobileStepper
        variant="dots"
        steps={photosGroups.length}
        position="static"
        activeStep={curPhotoGroup}
        css={styles.stepper}
        {...(Object.fromEntries(
          [
            ["nextButton", "right"] as const,
            ["backButton", "left"] as const,
          ].map(([prop, side]) => [
            prop,
            <SwitchPhotoButton
              side={side}
              photoIndex={props.photoIndex}
              setPhotoIndex={props.setPhotoIndex}
              photos={props.photos}
            />,
          ])
        ) as Record<"backButton" | "nextButton", ReactNode>)}
      />
    </div>
  );
};
