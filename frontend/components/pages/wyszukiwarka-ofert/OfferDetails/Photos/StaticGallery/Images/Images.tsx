import NoImage from "../../../../../../../assets/images/no-image.png";
import { useTheme } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import { Dispatch, FC, SetStateAction } from "react";

interface ImagesProps {
  photoGroup: string[];
  setPhotoIndex: Dispatch<SetStateAction<number>>;
  openModalGallery: () => void;
  photos: string[];
}

export const Images: FC<ImagesProps> = (props) => {
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
  };

  return (
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
        {props.photoGroup.map((photo) =>
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
  );
};
