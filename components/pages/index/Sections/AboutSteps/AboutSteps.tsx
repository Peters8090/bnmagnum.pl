import { css } from "@emotion/core";
import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { CustomTypography } from "../../../../shared/Custom Material-UI/CustomTypography";
import { PageTitle } from "../../shared/PageTitle";

export const AboutSteps: RouteType = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      width: 100%;
      padding: 5%;
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
    stepContent: css`
      flex: 1;
      margin: ${theme.spacing(2)}px 0;
    `,
    title: css`
      text-align: center;
    `,
  };

  const steps: Record<string, string> = {
    "Skontaktuj się z nami":
      "Powiedz jaką nieruchomość posiadasz do sprzedania i umów się na spotkanie.",
    Spotkanie:
      "Na spotkanie przyjedzie do Ciebie Agent działający w Twojej okolicy. Będziesz mieć pewność, że nie trafisz na przypadkowego doradcę, ale na specjalistę znającego dobrze rejon swojego działania.",
    "Przebieg spotkania": "Lorem ipsum",
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
      <PageTitle css={styles.title} text={AboutSteps.displayName} />
      <Stepper activeStep={activeStep}>
        {Object.entries(steps).map(([label]) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
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
      <div css={styles.stepContent}>
        <CustomTypography
          gutterBottom
          fontWeight={300}
          align="center"
          variant="h3"
          overrideFontSize={2.3}
        >
          {Object.keys(steps)[activeStep]}
        </CustomTypography>
        <CustomTypography
          fontWeight={200}
          align="justify"
          variant="h4"
          css={styles.instructions}
        >
          {Object.values(steps)[activeStep]}
        </CustomTypography>
      </div>
    </div>
  );
};

AboutSteps.routeName = "/#opis-wspolpracy";
AboutSteps.displayName = "Opis współpracy";
