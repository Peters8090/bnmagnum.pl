import { FC } from "react";
import { Chip, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import Link from "next/link";
import OfferSearch, {
  useOfferName,
} from "../../../../../pages/wyszukiwarka-ofert/[[...offerName]]";
import { RouteLink } from "../../../../../functions/RouteLink";
import { addSpaceEveryThreeCharacters } from "../../../../../functions/addSpaceEveryThreeCharacters";
import NoImage from "../../../../../assets/images/no-image.png";
import { useUrlWithQueryString } from "../../../../../hooks/useUrlWithQueryString";

export interface OfferProps {
  normal: {
    id: string;
    currency: string;
    price: number;
    location: string;
    title: string;
    description: string;
    agent_surname: string;
    agent_phone_number: string;
    agent_email: string;
    slug: string;
    photos: string[];
  };
  params: Record<string, string>;
  keywords: Record<string, string>;
}

export const Offer: FC<OfferProps> = (props) => {
  const currentlySelectedOfferName = useOfferName();

  const theme = useTheme();

  const styles = {
    rootSelectAndHover: css`
      cursor: pointer;
    `,
    root: css`
      width: 100%;
      border: 2px solid #bdbdbd;
      padding: ${theme.spacing(1.2)}px;
      transition: background-color 250ms;
      user-select: none;

      &:hover {
        background-color: #bdbdbd;
        cursor: pointer;
      }

      ${currentlySelectedOfferName === props.normal.slug &&
      css`
        background-color: #bdbdbd;
      `};
    `,
    main: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${theme.spacing(1.5)}px;
      & > * {
        margin: 0 ${theme.spacing(1)}px;
      }

      ${theme.breakpoints.up("md")} {
        margin-bottom: ${theme.spacing(2)}px;
      }
    `,
    image: css`
      width: 80px;
      height: 80px;
      border-radius: 20px;
    `,
    title: css`
      font-weight: 500;
    `,
    chips: css`
      margin-top: ${theme.spacing(1)}px;
      & > * {
        margin: ${theme.spacing(0.5)}px ${theme.spacing(1)}px;
      }
    `,
    titlePrice: css`
      flex: 1;
    `,
    price: css`
      font-weight: 500;
      word-wrap: break-word;
      text-align: right;
    `,
  };

  const { query } = useUrlWithQueryString();

  return (
    <Link {...RouteLink(OfferSearch, props.normal.slug)}>
      <div css={styles.root}>
        <div css={styles.main}>
          <img
            css={styles.image}
            src={props.normal.photos?.[0] ?? NoImage}
            alt="image"
          />
          <div css={styles.titlePrice}>
            <Typography css={styles.title} gutterBottom variant="h5">
              {props.normal.title}
            </Typography>
            <Typography variant="h5" css={styles.price}>
              {addSpaceEveryThreeCharacters(props.normal.price.toString())}{" "}
              {props.normal.currency}
            </Typography>
          </div>
        </div>
        <div css={styles.chips}>
          {Object.keys(props.keywords).map((info) => (
            <Chip key={info} label={info} color="secondary" size="small" />
          ))}
        </div>
      </div>
    </Link>
  );
};
