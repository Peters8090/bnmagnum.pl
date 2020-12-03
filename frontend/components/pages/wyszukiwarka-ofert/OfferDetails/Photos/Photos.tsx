import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC, useState } from "react";
import { ModalGallery } from "./ModalGallery/ModalGallery";
import { StaticGallery } from "./StaticGallery/StaticGallery";

interface PhotosProps {
  photos: string[];
}

export const Photos: FC<PhotosProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
      flex-direction: column;
      margin: ${theme.spacing(3)}px 0;
    `,
  };

  const [photoIndex, setPhotoIndex] = useState(0);
  const [modalGalleryOpen, setModalGalleryOpen] = useState(false);

  return (
    <div css={styles.root}>
      <StaticGallery
        photoIndex={photoIndex}
        photos={props.photos}
        setPhotoIndex={setPhotoIndex}
        openModalGallery={() => setModalGalleryOpen(true)}
      />

      <ModalGallery
        onClose={() => setModalGalleryOpen(false)}
        open={modalGalleryOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
        photos={props.photos}
      />
    </div>
  );
};
