import { css } from "@emotion/core";
import { Fab, Icon } from "@material-ui/core";
import React, { Dispatch, FC, SetStateAction } from "react";

interface SwitchPhotoFabProps {
  side: "left" | "right";
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  photos: string[];
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

  const afterClickPhotoIndex =
    props.photoIndex + (props.side === "right" ? 1 : -1);

  return (
    <div css={styles.root}>
      <Fab
        onClick={() => props.setPhotoIndex(afterClickPhotoIndex)}
        color="secondary"
        disabled={!props.photos[afterClickPhotoIndex]}
      >
        <Icon css={styles.icon}>keyboard_arrow_{props.side}</Icon>
      </Fab>
    </div>
  );
};
