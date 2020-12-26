import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { Content } from "../../../../../content";
import { convertRouteHashToLinkId } from "../../../../../functions/convertRouteHashToLinkId";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { PageTitle } from "../../shared/PageTitle";
import { Employee } from "./Employee/Employee";

export const OurEmployees: RouteType = () => {
  const theme = useTheme();
  const styles = {
    ourEmployees: css`
      padding: ${theme.spacing(4)}px 0;
      ${theme.customMixins.flexCentered};
      flex-direction: column;
    `,
  };

  const linkId = convertRouteHashToLinkId(OurEmployees.routeName);

  return (
    <div id={linkId} css={styles.ourEmployees}>
      <PageTitle text={Content.ourEmployees.title} />
      <div>
        {Content.ourEmployees.employees.map((employee) => (
          <Employee {...employee} />
        ))}
      </div>
    </div>
  );
};

OurEmployees.displayName = "Nasi pracownicy";
OurEmployees.routeName = "/#nasi-pracownicy";
