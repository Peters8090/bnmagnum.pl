import { Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { FC, useContext } from "react";
import { PhotosContext } from "../../Photos";

interface SwitchPhotoButtonProps {
  side: "left" | "right";
}

export const SwitchPhotoButton: FC<SwitchPhotoButtonProps> = (props) => {
  const { photoIndex, photos, setPhotoIndex } = useContext(PhotosContext);

  const afterClickPhotoIndex =
    Math.max(photoIndex, 1) + (props.side === "right" ? 3 : -3);

  return (
    <Button
      size="small"
      onClick={() => setPhotoIndex(afterClickPhotoIndex)}
      disabled={!photos[afterClickPhotoIndex]}
    >
      {props.side === "right" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      {props.side === "right" ? Content.utils.next : Content.utils.back}
    </Button>
  );
};
