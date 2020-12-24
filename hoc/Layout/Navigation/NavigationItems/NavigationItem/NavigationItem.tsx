import { css } from "@emotion/core";
import { Button, useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEventHandler } from "react";
import { NextLinkSmoothScroll } from "./NextLinkSmoothScroll/NextLinkSmoothScroll";

export interface NavigationItemProps {
  text: string;
  onClick?: MouseEventHandler;
  LinkProps: LinkProps;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const router = useRouter();
  const isCurrent: boolean =
    router.asPath === props.LinkProps.as ||
    ((props.LinkProps.href as string).includes("[[...") &&
      router.pathname === props.LinkProps.href);

  const theme = useTheme();
  const styles = {
    button: css`
      border-radius: 0;
    `,
    text: css`
      font-family: "Rubik", sans-serif;
      font-weight: 300;

      ${isCurrent &&
      css`
        font-weight: 500;
      `};
      padding: 0 ${theme.spacing(2)}px;
      text-align: center;
      text-transform: none;
    `,
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <NextLinkSmoothScroll {...props.LinkProps}>
      <Button
        component="a"
        onClick={props.onClick}
        fullWidth={isMobile}
        disableRipple={!isMobile}
        css={styles.button}
      >
        <Typography css={styles.text}>{props.text}</Typography>
      </Button>
    </NextLinkSmoothScroll>
  );
};
