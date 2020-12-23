import { css } from "@emotion/core";
import { Fab } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { FC, useContext } from "react";
import { PhotosContext } from "../../Photos";

interface SwitchPhotoFabProps {
  side: "left" | "right";
}

export const SwitchPhotoFab: FC<SwitchPhotoFabProps> = (props) => {
  const styles = {
    root: css`
      position: fixed;
      ${props.side}: 1%;
      top: 50%;
      transform: translateY(-50%);

      /* it prevents clicking on the backdrop when fab is disabled */
      width: 56px;
      height: 56px;
      border-radius: 50%;
    `,
    icon: css`
      font-size: 60px;
    `,
  };

  const { photoIndex, photos, setPhotoIndex } = useContext(PhotosContext);

  const afterClickPhotoIndex = photoIndex + (props.side === "right" ? 1 : -1);

  return (
    <div css={styles.root}>
      <Fab
        onClick={() => setPhotoIndex(afterClickPhotoIndex)}
        color="secondary"
        disabled={!photos[afterClickPhotoIndex]}
      >
        {props.side === "right" ? (
          <KeyboardArrowRight css={styles.icon} />
        ) : (
          <KeyboardArrowLeft css={styles.icon} />
        )}
      </Fab>
    </div>
  );
};
