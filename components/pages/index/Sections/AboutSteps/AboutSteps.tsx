import { css } from "@emotion/core";
import { Button, Step, StepLabel, Stepper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Content } from "../../../../../content";
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
      white-space: pre-wrap;
    `,
    title: css`
      text-align: center;
    `,
    stepContent: css`
      flex: 1;
      margin: ${theme.spacing(1)}px 0;
    `,
    main: css`
      border: 1px solid rgba(0, 0, 0, 0.12);
      margin-top: ${theme.spacing(3)}px;
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2%;
    `,
  };

  const steps: Record<string, string> = {
    "Skontaktuj się z nami":
      "Powiedz jaką nieruchomość posiadasz do sprzedania i umów się na spotkanie. Przyjedzie do Ciebie Agent działający w Twojej okolicy. Będziesz mieć pewność, że nie trafisz na przypadkowego doradcę, ale na specjalistę znającego dobrze rejon swojego działania.",
    "Przebieg spotkania": `Doradca:
- przedstawi Ci raport na temat cen transakcyjnych oraz zaproponuje przedział cenowy, dzięki któremu dowiesz się, ile naprawdę może być warta Twoja nieruchomość
- ustali z Tobą realną cenę wyjściową sprzedaży
- przedstawi Ci plan marketingowy sprzedaży Twojej nieruchomości
- zrobi zdjęcia nieruchomości lub przedyskutuje temat home stagingu (czyli profesjonalnego przygotowania nieruchomości do zdjęć i sprzedaży) i umówi profesjonalną sesję zdjęciową
- podpisze z Tobą umowę pośrednictwa
- zapyta o stan prawny nieruchomości oraz zbierze jak najwięcej informacji o nieruchomości, by móc jak najlepiej przedstawić ją przyszłym klientom.
`,
    "Współpraca na wyłączność":
      "Najbardziej skuteczną formą współpracy z agencją nieruchomości jest powierzenie sprzedaży nieruchomości tylko jednemu pośrednikowi. Dzięki temu masz pełną kontrolę nad sprzedażą i masz pewność, że pośrednik dokona wszelkich starań, by pomóc ci w sprzedaży. Dodatkowo zakres czynności proponowany przez pośrednika jest znacznie szerszy niż w przypadku umowy otwartej.",
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
      <div css={styles.main}>
        <Stepper activeStep={activeStep}>
          {Object.entries(steps).map(([label]) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div css={styles.stepContent}>
          <CustomTypography
            gutterBottom
            fontWeight={400}
            align="center"
            variant="h4"
            overrideFontSize={2}
          >
            {Object.keys(steps)[activeStep]}
          </CustomTypography>
          <CustomTypography
            fontWeight={300}
            align="justify"
            variant="h5"
            overrideFontSize={1.7}
            css={styles.instructions}
          >
            {Object.values(steps)[activeStep]}
          </CustomTypography>
        </div>
        <nav css={styles.buttonWrapper}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            css={styles.button}
          >
            {Content.utils.back}
          </Button>
          <div css={styles.spacer} />
          <Button onClick={handleNextOrReset}>
            {activeStep === Object.keys(steps).length - 1
              ? Content.utils.reset
              : Content.utils.next}
          </Button>
        </nav>
      </div>
    </div>
  );
};

AboutSteps.routeName = "/#dla-sprzedajacych";
AboutSteps.displayName = "Dla sprzedających";
