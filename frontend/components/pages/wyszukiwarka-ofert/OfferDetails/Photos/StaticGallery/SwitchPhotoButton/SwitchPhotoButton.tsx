import { Button } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React, { Dispatch, FC, SetStateAction } from "react";

interface SwitchPhotoButtonProps {
  side: "left" | "right";
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  photos: string[];
}

export const SwitchPhotoButton: FC<SwitchPhotoButtonProps> = (props) => {
  const afterClickPhotoIndex =
    props.photoIndex + (props.side === "right" ? 3 : -3);

  return (
    <Button
      size="small"
      onClick={() => props.setPhotoIndex(afterClickPhotoIndex)}
      disabled={!props.photos[afterClickPhotoIndex]}
    >
      <KeyboardArrowLeft />
      Poprzedni
    </Button>
  );
};
