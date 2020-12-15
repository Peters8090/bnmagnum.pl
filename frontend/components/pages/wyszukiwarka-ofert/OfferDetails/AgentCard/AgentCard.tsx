import { css } from "@emotion/core";
import { Icon, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { addSpaceEveryThreeCharacters } from "../../../../../functions/addSpaceEveryThreeCharacters";

interface AgentCardProps {
  agentFullName: string;
  phoneNumber: string;
  email: string;
}

export const AgentCard: FC<AgentCardProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      justify-content: center;

      margin: ${theme.spacing(2)}px 0;
    `,
    container: css`
      display: flex;
      align-items: center;
    `,
    icon: css`
      font-size: 50px;
      margin-right: ${theme.spacing(2)}px;
    `,
    agentName: css`
      font-weight: 500;
      font-size: 22px;
    `,
    textHighlighted: css`
      color: ${theme.palette.secondary.main};
    `,
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        <Icon css={styles.icon}>phone</Icon>
        <Typography css={styles.agentName} component="div">
          {props.agentFullName}
          <br />
          <a
            css={styles.textHighlighted}
            href={`${props.phoneNumber ? "tel" : props.email && "mailto"}:${
              props.phoneNumber
            }`}
          >
            {addSpaceEveryThreeCharacters(props.phoneNumber) ?? props.email}
          </a>
        </Typography>
      </div>
    </div>
  );
};
