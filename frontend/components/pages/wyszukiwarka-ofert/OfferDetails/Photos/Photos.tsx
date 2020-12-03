import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { ModalGallery } from "./ModalGallery/ModalGallery";
import { StaticGallery } from "./StaticGallery/StaticGallery";

interface PhotosProps {
  photos: string[];
}

interface PhotosContext {
  photos: string[];
  photoIndex: number;
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  setModalGalleryOpen: Dispatch<SetStateAction<boolean>>;
}

export const PhotosContext = createContext<PhotosContext>(
  (null as unknown) as PhotosContext
);

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
    <PhotosContext.Provider
      value={{
        photos: props.photos,
        photoIndex,
        setPhotoIndex,
        setModalGalleryOpen,
      }}
    >
      <div css={styles.root}>
        <StaticGallery />

        <ModalGallery open={modalGalleryOpen} />
      </div>
    </PhotosContext.Provider>
  );
};
