import { css } from "@emotion/core";
import { Button, useMediaQuery } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { FC, MouseEventHandler } from "react";
import { CustomTypography } from "../../../../../components/shared/Custom Material-UI/CustomTypography";
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

      transition: text-shadow 500ms ease-in-out;

      ${isCurrent &&
      css`
        text-shadow: 0px 0px rgba(0, 0, 0, 0.75), 0px 1px rgba(0, 0, 0, 0.75),
          1px 0px rgba(0, 0, 0, 0.75), 0px 0px rgba(0, 0, 0, 0.75);
      `};
      margin: 0 ${theme.spacing(2.5)}px;
      text-align: center;
      text-transform: none;
    `,
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <NextLinkSmoothScroll
      href={props.LinkProps.href.toString()}
      as={props.LinkProps.as?.toString()}
    >
      <Button
        component="a"
        onClick={props.onClick}
        fullWidth={isMobile}
        disableRipple={!isMobile}
        css={styles.button}
      >
        <CustomTypography overrideFontSize={1.1} css={styles.text}>
          {props.text}
        </CustomTypography>
      </Button>
    </NextLinkSmoothScroll>
  );
};
