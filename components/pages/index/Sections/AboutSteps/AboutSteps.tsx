import { css } from "@emotion/core";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";

export const AboutSteps: RouteType = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      width: 100%;
      padding: ${theme.spacing(2)}px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    buttonWrapper: css`
      display: flex;
      flex-direction: row;
      padding: 16px 0 0;
    `,
    button: css`
      margin-right: ${theme.spacing(1)}px;
    `,
    spacer: css`
      flex: 1 1 auto;
    `,
    instructions: css`
      margin-top: theme.spacing(2) px;
      margin-bottom: theme.spacing(1) px;
    `,
  };

  const steps: Record<string, string> = {
    "Kontakt z nami":
      "Lorem 1 ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, officiis?",
    "Kontakt z nami 2":
      "Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, officiis?",
    "Kontakt z nami 3":
      "Lorem 3 ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, officiis?",
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNextOrReset = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === Object.keys(steps).length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const linkId = convertRouteHashToLinkId(AboutSteps.routeName);

  return (
    <div css={styles.root} id={linkId}>
      <Stepper activeStep={activeStep}>
        {Object.entries(steps).map(([label]) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography css={styles.instructions}>
        {Object.values(steps)[activeStep]}
      </Typography>
      <div css={styles.buttonWrapper}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          css={styles.button}
        >
          Back
        </Button>
        <div css={styles.spacer} />
        <Button onClick={handleNextOrReset}>
          {activeStep === Object.keys(steps).length - 1 ? "Reset" : "Next"}
        </Button>
      </div>
    </div>
  );
};

AboutSteps.routeName = "/#opis-wspolpracy";
AboutSteps.displayName = "Opis współpracy";
