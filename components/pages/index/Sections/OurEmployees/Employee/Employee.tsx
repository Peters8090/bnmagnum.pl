import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FC, Fragment } from "react";

export interface EmployeeProps {
  title: string;
  description: string[];
  image: string;
}

export const Employee: FC<EmployeeProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;

      align-items: center;
      margin: ${theme.spacing(7.5)}px 0;

      &:first-of-type {
        margin-top: ${theme.spacing(3)}px;
      }

      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }
    `,
    imageWrapper: css`
      flex: 1;
      text-align: center;
    `,
    image: css`
      border-radius: 130px;
      height: 250px;

      ${theme.breakpoints.up("md")} {
        margin-right: ${theme.spacing(7.5)}px;
      }

      ${theme.breakpoints.down("sm")} {
        height: 150px;
        margin-bottom: ${theme.spacing(1)}px;
      }
    `,
    title: css`
      font-family: "Rubik", sans-serif;
      font-weight: 500;

      ${theme.breakpoints.down("sm")} {
        text-align: center;
      }
    `,
    description: css`
      font-weight: 300;

      ${theme.breakpoints.up("md")} {
        width: 400px;
      }

      ${theme.breakpoints.down("sm")} {
        margin: 0 ${theme.spacing(2)}px;
      }
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.imageWrapper}>
        <img
          css={styles.image}
          src="https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg"
          alt=""
        />
      </div>
      <div>
        <Typography variant="h4" gutterBottom css={styles.title}>
          {props.title}
        </Typography>
        <Typography variant="h4" css={styles.description}>
          {props.description.map((desc) => (
            <Fragment key={desc}>
              {desc}
              <br />
            </Fragment>
          ))}
        </Typography>
      </div>
    </div>
  );
};
