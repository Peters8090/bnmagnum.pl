import css from "@emotion/css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { useTheme } from "@material-ui/core/styles";
import { Content } from "../../../../../content";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { PageTitle } from "../../shared/PageTitle";
import Carousel from "react-material-ui-carousel";

export const Reviews: RouteType = Object.assign(() => {
  const theme = useTheme();
  const styles = {
    root: css`
      ${theme.customMixins.flexCentered};
      flex-direction: column;
      padding: 5%;
    `,
    reviewsList: css`
      ${theme.customMixins.flexCentered};
      flex-wrap: wrap;
      justify-content: space-evenly;
    `,
    review: css`
      width: 400px;
      max-width: 85vw;
      text-align: center;
      border-radius: 20px;
      padding: 10px 15px;
      margin: 20px;
    `,
    reviewText: css`
      font-style: italic;
      font-weight: 300;
    `,
  };

  const linkId = convertRouteHashToLinkId(Reviews.routeName);

  return (
    <div css={styles.root} id={linkId}>
      <PageTitle text={Content.reviews.route.displayName} />
      <Carousel autoPlay interval={5000} fullHeightHover>
        <div css={styles.reviewsList}>
          {Content.reviews.reviews.map((review) => (
            <Card css={styles.review} elevation={12}>
              <Typography variant="h5">
                <span css={styles.reviewText}>„{review.text}"</span> <br />{" "}
                {review.author}
              </Typography>
            </Card>
          ))}
        </div>
        <div css={styles.reviewsList}>
          {Content.reviews.reviews.map((review) => (
            <Card css={styles.review} elevation={12}>
              <Typography variant="h5">
                <span css={styles.reviewText}>„{review.text}"</span> <br />{" "}
                {review.author}
              </Typography>
            </Card>
          ))}
        </div>
      </Carousel>
    </div>
  );
}, Content.reviews.route);
