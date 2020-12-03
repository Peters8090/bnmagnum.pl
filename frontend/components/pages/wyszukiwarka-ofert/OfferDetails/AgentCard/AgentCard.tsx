import { css } from "@emotion/core";
import { Icon, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { addSpaceEveryThreeCharacters } from "../../../../../functions/addSpaceEveryThreeCharacters";

interface AgentCardProps {
  agentName: string;
  phoneNumber: string;
}

export const AgentCard: FC<AgentCardProps> = (props) => {
  const theme = useTheme();
  const styles = {
    agentCard: css`
      display: flex;
      align-items: center;

      margin: ${theme.spacing(2)}px 0;
    `,
    agentCardIcon: css`
      font-size: 50px;
      margin-right: ${theme.spacing(2)}px;
    `,
    agentCardText: css`
      font-weight: 500;
      font-size: 22px;
    `,
    agentCardTextHighlighted: css`
      color: ${theme.palette.secondary.main};
    `,
  };

  return (
    <div css={styles.agentCard}>
      <Icon css={styles.agentCardIcon}>phone</Icon>
      <Typography css={styles.agentCardText} component="div">
        {props.agentName}
        <br />
        <a
          css={styles.agentCardTextHighlighted}
          href={`tel:${props.phoneNumber}`}
        >
          {addSpaceEveryThreeCharacters(props.phoneNumber)}
        </a>
      </Typography>
    </div>
  );
};
